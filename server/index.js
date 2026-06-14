const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/kidrove";

// ── Middleware ─────────────────────────────────────────────────────────────
app.use(cors({
  origin: process.env.CLIENT_URL || "http://localhost:5173",
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());

// ── MongoDB Connection (optional – app works without it) ────────────────────
async function connectDB() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB connected:", MONGO_URI);
  } catch (err) {
    console.warn("⚠️  MongoDB not connected – running in memory-only mode.");
  }
}
connectDB();

// ── Mongoose Schema ─────────────────────────────────────────────────────────
const enquirySchema = new mongoose.Schema(
  {
    name:  { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    workshop: { type: String, default: "AI & Robotics Summer Workshop 2026" },
    submittedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

const Enquiry = mongoose.model("Enquiry", enquirySchema);

// In-memory fallback when MongoDB is unavailable
const enquiriesMemory = [];

// ── Validation Helper ───────────────────────────────────────────────────────
function validateEnquiry({ name, email, phone }) {
  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name is required (minimum 2 characters).");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("A valid email address is required.");
  }

  const phoneClean = String(phone || "").replace(/[\s\-().+]/g, "");
  if (!phoneClean || !/^[6-9]\d{9}$/.test(phoneClean)) {
    errors.push("A valid 10-digit Indian mobile number is required.");
  }

  return errors;
}

// ── Routes ──────────────────────────────────────────────────────────────────

// Health check
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    dbStatus: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
    timestamp: new Date().toISOString(),
  });
});

// POST /api/enquiry
app.post("/api/enquiry", async (req, res) => {
  const { name, email, phone } = req.body;

  // 1. Validate
  const errors = validateEnquiry({ name, email, phone });
  if (errors.length > 0) {
    return res.status(422).json({
      success: false,
      message: "Validation failed.",
      errors,
    });
  }

  const payload = {
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    workshop: "AI & Robotics Summer Workshop 2026",
    submittedAt: new Date(),
  };

  // 2. Persist (MongoDB preferred, memory fallback)
  if (mongoose.connection.readyState === 1) {
    try {
      const saved = await Enquiry.create(payload);
      console.log("📥 Enquiry saved to MongoDB:", saved._id);
    } catch (dbErr) {
      console.error("DB write error:", dbErr.message);
      // Don't block the user – continue with success response
    }
  } else {
    enquiriesMemory.push({ ...payload, id: enquiriesMemory.length + 1 });
    console.log("📥 Enquiry saved in memory (total):", enquiriesMemory.length);
  }

  // 3. Respond
  return res.status(201).json({
    success: true,
    message: "Enquiry received! We'll be in touch within 24 hours.",
    data: {
      name: payload.name,
      email: payload.email,
      workshop: payload.workshop,
    },
  });
});

// GET /api/enquiries  (admin list – protect in production!)
app.get("/api/enquiries", async (_req, res) => {
  if (mongoose.connection.readyState === 1) {
    const all = await Enquiry.find().sort({ createdAt: -1 }).lean();
    return res.json({ success: true, count: all.length, data: all });
  }
  return res.json({
    success: true,
    count: enquiriesMemory.length,
    data: [...enquiriesMemory].reverse(),
  });
});

// 404 handler
app.use((_req, res) => {
  res.status(404).json({ success: false, message: "Route not found." });
});

// Global error handler
app.use((err, _req, res, _next) => {
  console.error("Unhandled error:", err.message);
  res.status(500).json({ success: false, message: "Internal server error." });
});

// ── Start ────────────────────────────────────────────────────────────────────
app.listen(PORT, () => {
  console.log(`🚀 Kidrove API running → http://localhost:${PORT}`);
});

module.exports = app;

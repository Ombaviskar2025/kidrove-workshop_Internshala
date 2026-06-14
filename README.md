# 🤖 Kidrove — AI & Robotics Summer Workshop Landing Page

A responsive workshop landing page + Express.js API for Kidrove's **AI & Robotics Summer Workshop 2026**.

---

## 🚀 Quick Start

### Prerequisites
- Node.js ≥ 16
- npm ≥ 8
- MongoDB (optional — API runs in memory-fallback mode without it)

### 1. Install dependencies

```bash
# From project root
cd client && npm install
cd ../server && npm install
```

### 2. Start the API server

```bash
cd server
cp .env.example .env      # configure your MONGO_URI if needed
npm run dev               # runs on http://localhost:5000
```

### 3. Start the React client

```bash
cd client
npm run dev               # runs on http://localhost:5173
```

The Vite dev server proxies `/api/*` → `http://localhost:5000`, so no CORS issues in development.

---

## 📁 Project Structure

```
kidrove-workshop/
├── client/                   # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── WorkshopDetails.jsx
│   │   │   ├── LearningOutcomes.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── RegistrationForm.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
├── server/                   # Express.js backend
│   ├── index.js              # API server + routes
│   ├── .env.example
│   └── package.json
│
├── .gitignore
├── package.json
└── README.md
```

---

## 🌐 API Reference

### `POST /api/enquiry`

Submit a workshop registration enquiry.

**Request Body:**
```json
{
  "name": "Priya Sharma",
  "email": "priya@example.com",
  "phone": "9876543210"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Enquiry received! We'll be in touch within 24 hours.",
  "data": {
    "name": "Priya Sharma",
    "email": "priya@example.com",
    "workshop": "AI & Robotics Summer Workshop 2026"
  }
}
```

**Validation Error (422):**
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": ["A valid email address is required."]
}
```

### `GET /api/health`
Returns server and database status.

### `GET /api/enquiries`
Returns all submitted enquiries (for admin use — protect in production).

---

## ✅ Evaluation Criteria Coverage

| Criteria | Implementation |
|---|---|
| **UI Design & Responsiveness** | Mobile-first CSS, fluid typography, responsive grid, media queries at 640px and 900px |
| **React Component Structure** | 7 focused components, props for state lifting, clean separation of concerns |
| **Code Quality** | Consistent naming, helper functions, meaningful variable names, comments |
| **API Implementation** | POST /api/enquiry with validation, MongoDB + memory fallback, error handling |
| **Attention to Detail** | Loading states, success screen, field-level errors, phone prefix, FAQ accordion |

## ⭐ Bonus Features Implemented

- ✅ **Form validation** — real-time field-level errors, Indian phone regex
- ✅ **Loading states** — spinner on submit button
- ✅ **MongoDB integration** with graceful in-memory fallback
- ✅ **FAQ accordion** with smooth animations
- ✅ **Animated robot illustration** in the hero
- ✅ **Success state** after form submission
- ✅ **Semantic HTML** + accessible labels and aria attributes

---

## 📝 Submission Note

### Approach

I structured the project as two independent apps — a React + Vite client and an Express + Mongoose server — communicating via a proxied `/api` endpoint during development.

The frontend is built component-by-component following a clear visual hierarchy: Hero → Details → Outcomes → FAQ → Registration. I prioritized real form validation (regex for email and Indian mobile numbers), loading feedback, and a polished success state. The UI uses a purple-and-orange palette that feels energetic and child-friendly while maintaining readability for parents.

The backend is production-aware: it validates all required fields, persists to MongoDB when available, and gracefully falls back to in-memory storage when the database is unreachable — so the API never crashes in a demo environment.

### If Given More Time

1. **TypeScript** — add strict types across all components and API handlers
2. **Tailwind CSS** — replace custom CSS with utility classes for faster iteration
3. **Authentication** — protect the `GET /api/enquiries` admin endpoint with JWT
4. **Email notification** — send a confirmation email on registration using Nodemailer + Gmail SMTP
5. **Unit tests** — Jest for API validation logic, React Testing Library for components
6. **Vercel deployment** — deploy client on Vercel, server on Railway or Render

---

## 🏗️ Deploy to Vercel (Frontend)

```bash
cd client
npm run build
# Then deploy the dist/ folder to Vercel
```

Set `VITE_API_URL` environment variable in Vercel to point to your deployed API.

import { useState } from "react";
import Hero from "./components/Hero";
import WorkshopDetails from "./components/WorkshopDetails";
import LearningOutcomes from "./components/LearningOutcomes";
import FAQ from "./components/FAQ";
import RegistrationForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [formSuccess, setFormSuccess] = useState(false);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm onSuccess={() => setFormSuccess(true)} success={formSuccess} />
      <Footer />
    </div>
  );
}

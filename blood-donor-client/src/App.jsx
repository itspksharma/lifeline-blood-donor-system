import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

import Hero from "./components/Hero";
import WhyDonate from "./components/WhyDonate";
import DonationGuide from "./components/DonationGuide";
import BloodCompatibility from "./components/BloodCompatibility";
import About from "./components/About";

import StatisticsPage from "./pages/StatisticsPage";
import FeedbackPage from "./pages/FeedbackPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* HOME */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <WhyDonate />
              <DonationGuide />
              <BloodCompatibility />
              <About />
            </>
          }
        />

        {/* PAGES */}
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      {/* GLOBAL */}
      <CTA />
      <Footer />
    </BrowserRouter>
  );
}

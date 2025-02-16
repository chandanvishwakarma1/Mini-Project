import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StatsPage from "./components/StatsPage";
import LoginPage from './components/LoginPage';
import FAQPage from './components/FAQPage';
import SignupPage from  './components/SignupPage';
import ContactUsPage from './components/ContactUsPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stats" element={<StatsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/LandingPage";
import StatsPage from "./components/StatsPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

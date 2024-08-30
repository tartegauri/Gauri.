import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
import ProcessPage from "./pages/ProcessPage";
import Contact from "./pages/Contact";
import "./index.css";

const AppContent = () => {
  const location = useLocation();

  // Define the routes where you don't want the Navbar to be shown
  const noNavbarRoutes = ['/'];

  // Conditionally render Navbar based on the current route
  return (
    <>
      {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/" element={<Contact />} />
        {/* Add other routes here */}
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;

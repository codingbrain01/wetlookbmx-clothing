import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/wetlookbmx-clothing" element={<Home />} />
        <Route path="/wetlookbmx-clothing/about" element={<About />} />
        <Route path="/wetlookbmx-clothing/gallery" element={<Gallery />} />
        {/* Add more routes as needed */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

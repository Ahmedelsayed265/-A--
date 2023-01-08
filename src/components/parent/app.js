import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./../side/nav";
import Home from "./../main/home";
import About from "./../about/about";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="entire">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

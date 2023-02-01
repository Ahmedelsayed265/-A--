import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./../side/nav";
import Home from "./../main/home";
import About from "./../about/about";
import Contact from "./../contact/contact";
import Works from "./../works/works";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <div className="entire">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;

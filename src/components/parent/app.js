import React from "react";
import "./app.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./../side/nav";
import Home from "./../main/home";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Routes >
        <Route path="/" exact element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import "./app.css";
import Nav from "./../side/nav";
import Home from "./../main/home";
const App = () => {
  return (
    <div className="app">
      <Nav />
      <Home />
    </div>
  );
};

export default App;

import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>
          <span>{`<`}</span> Ahmed <span>{`/>`}</span>
        </h1>
      </div>
      <div className="toggle">
      <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Nav;

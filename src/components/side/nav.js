import React from "react";
import "./nav.css";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>
          <span>{`<`}</span> A <span>{`/>`}</span>
        </h1>
      </div>
      <div className="toggle">
        <span className="cir_tog active">
          <small>Home</small>
        </span>
        <span className="cir_tog">
          <small>About</small>
        </span>
        <span className="cir_tog">
          <small>Resume</small>
        </span>
        <span className="cir_tog">
          <small>Works</small>
        </span>
        <span className="cir_tog">
          <small>Contact</small>
        </span>
      </div>
      <div className="copy">
        <div className="tw">
          <p>
            <span>© 2022</span>
            <a href="https://www.linkedin.com/in/ahmed-elsayed-0ba86020b/">
              AhmedElsayed
            </a>
          </p>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

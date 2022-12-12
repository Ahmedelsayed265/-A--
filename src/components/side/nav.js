import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <h1>
          <Link to="/">
            <span>{`<`}</span> A <span>{`/>`}</span>
          </Link>
        </h1>
      </div>
      <div className="toggle">
        <Link to="/" className="cir_tog active">
          <small>Home</small>
        </Link>
        <Link to="/about" className="cir_tog">
          <small>About</small>
        </Link>
        <Link to="/works" className="cir_tog">
          <small>Works</small>
        </Link>
        <Link to="/contact" className="cir_tog">
          <small>Contact</small>
        </Link>
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

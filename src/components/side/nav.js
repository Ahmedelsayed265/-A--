import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
const Nav = () => {
  const [activeLink, setActiveLink] = useState("Link1");
  const handleClick = e => {
    setActiveLink(e.target.id);
  };
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
        <Link
          to="/"
          id="Link1"
          onClick={handleClick}
          className={`cir_tog ${activeLink === "Link1" ? "active" : ""}`}
        >
          <small>Home</small>
        </Link>
        <Link
          to="/about"
          id="Link2"
          onClick={handleClick}
          className={`cir_tog ${activeLink === "Link2" ? "active" : ""}`}
        >
          <small>About</small>
        </Link>
        <Link
          to="/works"
          id="Link3"
          onClick={handleClick}
          className={`cir_tog ${activeLink === "Link3" ? "active" : ""}`}
        >
          <small>Works</small>
        </Link>
        <Link
          to="/contact"
          id="Link4"
          onClick={handleClick}
          className={`cir_tog ${activeLink === "Link4" ? "active" : ""}`}
        >
          <small>Contact</small>
        </Link>
      </div>
      <div className="copy">
        <div className="tw">
          <p>
            <span>© 2023</span>
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

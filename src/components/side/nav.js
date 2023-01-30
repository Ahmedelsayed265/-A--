import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
const Nav = () => {
  const [activeLink, setActiveLink] = useState("Link1");
  let location = useLocation();
  useEffect(() => {
      setActiveLink(location.pathname);
    },[location.pathname]
  );
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
          className={`cir_tog ${activeLink === "/" ? "active" : ""}`}
        >
          <small>Home</small>
        </Link>
        <Link
          to="/about"
          id="Link2"
          className={`cir_tog ${activeLink === "/about" ? "active" : ""}`}
        >
          <small>About</small>
        </Link>
        <Link
          to="/works"
          id="Link3"
          className={`cir_tog ${activeLink === "/works" ? "active" : ""}`}
        >
          <small>Works</small>
        </Link>
        <Link
          to="/contact"
          id="Link4"
          className={`cir_tog ${activeLink === "/contact" ? "active" : ""}`}
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

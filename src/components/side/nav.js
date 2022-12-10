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
        <span className="cir_tog active" />
        <span className="cir_tog" />
        <span className="cir_tog" />
        <span className="cir_tog" />
        <span className="cir_tog" />
      </div>
      <div className="copy">
        <div className="tw">
          <p>
            <span>© 2022</span>{" "}
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

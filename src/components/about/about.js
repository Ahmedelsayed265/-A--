import React, { useState } from "react";
import "./about.css";
import abo from "./../assest/about.jpg";
import cv from "./../assest/Ahmed_elsayed.pdf";
const About = () => {
  const [activeAccordion, setActiveAccordion] = useState("acc1");
  const handleClick = e => {
    setActiveAccordion(e.target.id);
  };
  return (
    <main className="about">
      <h2 className="hidden">ABOUT</h2>
      <h2 className="hidden f">FEATURES</h2>
      <div className="container">
        <h3>About me</h3>
        <div className="line">
          <span />
        </div>
        <section className="row">
          <div className="img">
            <img src={abo} loading="lazy" alt="developer" />
            <span className="top" />
            <span className="right" />
            <span className="bottom" />
            <span className="left" />
          </div>
          <div className="review">
            <h4>
              Hi, I am Ahmed Elsayed <br />
              <span>React.js Front-End developer</span>
            </h4>
            <ul>
              <li>
                <strong>Age</strong> : 21 Years
              </li>
              <li>
                <strong>Nationality</strong> : Egyptian
              </li>
              <li>
                <strong>Languages</strong> : Arabic , English
              </li>
              <li>
                <strong>Address</strong> : Menouf city, Menofia, Egypt
              </li>
              <li>
                <strong>Education</strong> : Menoufia university, a computer
                science student at level 3
              </li>
              <li>
                <strong>Freelance</strong> : Available
              </li>
            </ul>
            <div className="btn">
              <a href={cv} download>
                Download cv
              </a>
              <span className="t" />
              <span className="l" />
              <span className="bl" />
              <span className="bb" />
            </div>
          </div>
        </section>
        <section className="features">
          <h3>What I Do</h3>
          <div className="line">
            <span />
          </div>
          <div className="accordion">
            <div className="inner">
              <div className="ac_title">
                <div id="acc1" onClick={handleClick} className="tit">
                  <h4 className="title">Trendy Design</h4>
                  <div className="open">
                    <i
                      className={`fa-solid fa-chevron-down ${activeAccordion ===
                      "acc1"
                        ? "active"
                        : ""}`}
                    />
                  </div>
                </div>
                <div
                  className={`acc_content cc1 ${activeAccordion === "acc1"
                    ? "active"
                    : ""}`}
                >
                  <p>
                    A modern, minimalistic and fully responsive design created
                    in accordance with the latest web design trends for your
                    worthy online web presence.
                  </p>
                  <ul>
                    <li>Pixel Perfect</li>
                    <li>Clean, Simple and Minimalist</li>
                    <li>Fully Responsive </li>
                    <li>Converting FIGMA or XD to Website</li>
                  </ul>
                </div>
              </div>
              <div className="ac_title">
                <div id="acc2" onClick={handleClick} className="tit">
                  <h4 className="title">Clean Code</h4>
                  <div className="open">
                    <i
                      className={`fa-solid fa-chevron-down ${activeAccordion ===
                      "acc2"
                        ? "active"
                        : ""}`}
                    />
                  </div>
                </div>
                <div
                  className={`acc_content cc2 ${activeAccordion === "acc2"
                    ? "active"
                    : ""}`}
                >
                  <ul>
                    <li>Built With HTML5 CSS3 - SCSS JavaScript - React.js</li>
                    <li>
                      Easy to understand and customizable code (Readable code).
                    </li>
                    <li>
                      Neatly written, well-organized, valid and well-commented
                      code
                    </li>
                    <li>
                      Best coding practices to achieve higher search engine
                      rankings and faster page loading.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="ac_title">
                <div id="acc3" onClick={handleClick} className="tit">
                  <h4 className="title">Smooth Animations</h4>
                  <div className="open">
                    <i
                      className={`fa-solid fa-chevron-down ${activeAccordion ===
                      "acc3"
                        ? "active"
                        : ""}`}
                    />
                  </div>
                </div>
                <div
                  className={`acc_content cc3 ${activeAccordion === "acc3"
                    ? "active"
                    : ""}`}
                >
                  <p>
                    The template includes cool effects and various options for
                    smooth and unique animations built on pure CSS3 or famous
                    libraries.
                  </p>
                  <ul>
                    <li>Parallax</li>
                    <li>Midnight Header</li>
                    <li>Slider Animations</li>
                    <li>Page Transitions</li>
                    <li>Preloader</li>
                    <li>Navigation Animations</li>
                    <li>Scroll Animations</li>
                    <li>Progress Bars</li>
                    <li>Hover Animations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;

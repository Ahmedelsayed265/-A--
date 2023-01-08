import React from "react";
import "./about.css";
import abo from "./../assest/about.jpg";
import cv from "./../assest/Ahmed_elsayed.pdf";
const About = () => {
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
                <div className="tit">
                  <h4 className="title">Trendy Design</h4>
                  <div className="open">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="ac_title">
                <div className="tit">
                  <h4 className="title">Clean Code</h4>
                  <div className="open">
                    <span />
                    <span />
                  </div>
                </div>
              </div>
              <div className="ac_title">
                <div className="tit">
                  <h4 className="title">Smooth Animations</h4>
                  <div className="open">
                    <span />
                    <span />
                  </div>
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

import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import "./home.css";
import Star from "./../assest/star.png";
const Home = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Ahmed Elsayed",
        "Front End Developer",
        "React.js developer",
        "Website Designer"
      ],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 30,
      backDelay: 500,
      loop: true
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <main className="home">
      <div className="h_entire">
        <div className="img">
          <img loading="lazy" src={Star} alt="star" />
        </div>
        <h2>
          <i>Hi, I am $ </i><span ref={el} />
        </h2>
        <p className="h_p">
          Creative Front End Developer skilled at creating a unique customer
          experience that highlights brand messaging. Drives customer experience
          improving click rates and conversion rates.Able to facilitate
          translation of customer vision into a functional web experience that
          engages customers and improves the bottom line.
        </p>
        <div className="social">
          <div className="icon">
            <span>
              <i className="fa-brands fa-facebook-f" />
            </span>
            <a
              className="span"
              href="https://www.facebook.com/profile.php?id=100012773227138"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook-f" />
            </a>
          </div>
          <div className="icon">
            <span>
              <i className="fa-brands fa-instagram" />
            </span>
            <a
              className="span"
              href="https://www.instagram.com/ahmedelsayed_122/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
          </div>
          <div className="icon">
            <span>
              <i className="fa-brands fa-linkedin-in" />
            </span>
            <a
              className="span"
              href="https://www.linkedin.com/in/ahmed-elsayed-0ba86020b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin-in" />
            </a>
          </div>
          <div className="icon">
            <span>
              <i className="fa-brands fa-github" />
            </span>
            <a
              className="span"
              href="https://github.com/Ahmedelsayed265"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
          <div className="icon">
            <span>
              <i className="fa-brands fa-behance" />
            </span>
            <a
              className="span"
              href="https://www.behance.net/ahmedelsayed282"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-behance" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

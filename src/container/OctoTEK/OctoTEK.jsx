import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { images } from "../../constants";
import "./OctoTEK.scss";

const OctoTEK = () => {
  const buttonRef = useRef(null);

  const handleMouseEnter = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    // Calculate mouse position relative to the button
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Determine the direction of the hover
    const isLeft = mouseX < rect.width / 2;
    const isTop = mouseY < rect.height / 2;

    // Set CSS variables for animation direction
    button.style.setProperty("--hover-x", isLeft ? "-100%" : "100%");
    button.style.setProperty("--hover-y", isTop ? "-100%" : "100%");
  };

  return (
    <section className="hero__area">
      <div className="logo_container">
        <img src={images.octotek} alt="octotek_logo" width="80" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div className="hero__content animation__hero_one">
              <a target="_blank" href="https://octotek.io">
                Strategy, Design, Solution Development{" "}
                <span>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </a>
              <div className="hero__title-wrapper">
                <h1 className="hero__title">Your Ideas, Our Reality</h1>
                <p className="hero__sub-title">
                  At <span>OctoTEK</span>, we transform dreams into code and{" "}
                  <span>visions</span> into <span>reality</span>. Partner with
                  us to bring your ideas to life. Let’s collaborate on{" "}
                  <span>innovative</span>, tailored software solutions that
                  drive <span>growth</span> and redefine possibilities. Reach
                  out today, and let’s build the future <span>together</span>.
                </p>
              </div>
              <div className="btn-wrapper">
                <a
                  href="https://octotek.io/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="circle-btn"
                  ref={buttonRef}
                  onMouseEnter={handleMouseEnter}
                >
                  Contact Us
                </a>
              </div>
              <div className="experience">
                <h2 className="title">100+</h2>
                <p>
                  Projects completed <br />
                  successfully
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        width="1920"
        height="1000"
        src={images.octotekbg}
        className="hero1_bg"
      />
    </section>
  );
};

export default OctoTEK;

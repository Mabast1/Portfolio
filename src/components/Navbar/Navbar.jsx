import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navLinks = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="/">
          <img src={images.logo} alt="logo" />
        </a>
      </div>

      {/* Desktop Navigation Links */}
      <div className="app__navbar-links">
        {navLinks.map((item) => (
          <div className="app__navbar-link" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </div>
        ))}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {/* Mobile Navigation Links */}
        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
            className="app__navbar-mobile"
          >
            <HiX onClick={() => setToggle(false)} />
            <div className="app__navbar-mobile-links">
              {navLinks.map((item) => (
                <div key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

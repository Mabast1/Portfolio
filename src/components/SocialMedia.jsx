import React from "react";
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <a href="https://github.com/mabast1" target="_blank" rel="noreferrer">
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://www.linkedin.com/in/mabast/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
    <a
      href="https://www.instagram.com/mabast_95/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsInstagram />
      </div>
    </a>
    <a href="https://twitter.com/Mabast95" target="_blank" rel="noreferrer">
      <div>
        <BsTwitter />
      </div>
    </a>
  </div>
);

export default SocialMedia;

import React from "react";
import { BsTwitter, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/mabast1" target="_blank" rel="noreferrer">
        <BsGithub />
      </a>
    </div>
    <div>
      <a
        href="https://www.linkedin.com/in/mabast/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
    </div>
    <div>
      <a
        href="https://www.instagram.com/mabast_95/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
    </div>
    <div>
      <a href="https://twitter.com/Mabast95" target="_blank" rel="noreferrer">
        <BsTwitter />
      </a>
    </div>
  </div>
);

export default SocialMedia;

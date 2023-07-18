import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";
import {FaInstagram } from 'react-icons/fa'
import '../styles/footer.css';

export default function Footer() {
  return (
    <footer>
      <h2>Made by Megan Vincent©</h2>
      <p>
        <ul>
          <a href="https://github.com/MVincent15">
            <li className="logo">
              <VscGithubAlt />
            </li>
          </a>
          <a href="https://www.linkedin.com/in/megan-vincent/">
            <li className="logo">
              <AiOutlineLinkedin />
            </li>
          </a>
          <a href="https://www.instagram.com/meganjordan23/">
            <li className="logo">
              <FaInstagram />
            </li>
          </a>
        </ul>
      </p>
    </footer>
  );
}


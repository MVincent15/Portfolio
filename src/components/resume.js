import React from "react";
import myResume from "../assets/Vincent_Resume.pdf";
import { BsCloudDownload } from "react-icons/bs";
import "../styles/resume.css";

export default function Resume() {
  return (
    <div className="resume-page">
      <main className="resume-content">
        <section className="resume-section">
          <h2 className="section-title">My Resume</h2>
          <div className="resume-download">
            <a href={myResume} className="resume-download-link" download>
              <BsCloudDownload className="resume-download-icon" />
              Download Resume
            </a>
          </div>
        </section>
        <div className="resume-columns-container">
          <div className="resume-column">
            <h3 className="column-title">Front-End</h3>
            <ul className="column-list">
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>API</li>
              <li>GIT</li>
              <li>Development frameworks</li>
            </ul>
          </div>
          <div className="resume-column">
            <h3 className="column-title">Back-End</h3>
            <ul className="column-list">
              <li>Node.js</li>
              <li>Jest</li>
              <li>Express.js</li>
              <li>MySQL2</li>
              <li>Sequelize</li>
              <li>ORM</li>
              <li>MVC</li>
            </ul>
          </div>
          <div className="resume-column">
            <h3 className="column-title">Full Stack</h3>
            <ul className="column-list">
              <li>NoSQL</li>
              <li>PWA</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
              <li>GraphQL</li>
              <li>React</li>
              <li>MERN</li>
              <li>State</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

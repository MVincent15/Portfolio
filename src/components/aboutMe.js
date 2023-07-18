import React from "react";
import profile from "../assets/profile.jpg";
import '../styles/aboutMe.css'

export default function About() {
  return (
    <section className="about-me-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <img src={profile} alt="Profile" className="img-fluid rounded-circle mb-4 profile-image" />
          </div>
          <div className="col-lg-9">
            <div className="about-content">
              <h2 className="mb-4 about-heading">About Me</h2>
              <p className="text-muted about-paragraph">Hello! I'm 24 years old, born and raised near Dallas, Texas. I went to college in Florida at Stetson University where I studied Biochemistry and Environmental Science, and I'm currently enrolled in the SMU coding bootcamp.</p>
              <p className="text-muted about-paragraph">Although back in the day I played Division I college basketball, I now mostly enjoy rock climbing and going on walks with my adorable Australian Shepherd.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

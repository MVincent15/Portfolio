import React, { useState } from "react";
import "../styles/contactMe.css";
import { validateEmail } from "../utils/helpers";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
      setEmailError("");
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleInputBlur = (e) => {
    const { target } = e;
    const inputType = target.name;

    if (inputType === "userName" && !userName.trim()) {
      setErrorMessage("Name is required");
    } else if (inputType === "email" && !validateEmail(email)) {
      setEmailError("Invalid email");
    } else if (inputType === "message" && !message.trim()) {
      setErrorMessage("Message is required");
    } else {
      setErrorMessage("");
      setEmailError("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName.trim() || !message.trim()) {
      setErrorMessage("Please fill in all required fields correctly");
      return;
    }

    setUserName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
    setEmailError("");
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-titles secondary-border">Contact Me!</h2>
      </div>

      <div className="contact-info">
        <div>
          <h3>Hello!</h3>
          <p>
            <strong>I would love to hear from You!</strong>
          </p>
          <address>
            Keller, TX <br />
            Cell: <p>817-913-0562</p>
            <br />
            Email: <p>vincent.megan23@gmail.com</p>
          </address>
        </div>

        <div className="contact-form">
          <h3>Contact Me</h3>
          <form className="form">
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />
            {emailError && (
              <div>
                <p className="error-text">{emailError}</p>
              </div>
            )}

            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              onBlur={handleInputBlur}
              id="contact-message"
              placeholder="Your Message"
            />

            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

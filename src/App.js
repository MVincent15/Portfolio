import React, { useState } from "react";
import Header from "./components/header";
import AboutMe from "./components/aboutMe";
import ContactMe from "./components/contactMe";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Footer from "./components/footer";
import "./styles/App.css";

export default function App() {
  const [currentPage, handlePageChange] = useState("About");
  const renderPage = () => {
    if (currentPage === "About") {
      return <AboutMe />;
    }
    if (currentPage === "Contact") {
      return <ContactMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <AboutMe />;
  };

  return (
    <>
      <Header handlePageChange={handlePageChange} />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

import React from "react";
import Navbar from "./navbar";
import '../styles/header.css'

export default function Header(props) {
  const { handlePageChange } = props;

  return (
    <div>
      <section>
        <header className="flex-row headerContainer px-1">
          <div>
            <h1 className="portfolio-title">Megan Vincent's Portfolio</h1>
          </div>
          <div>
            <Navbar handlePageChange={handlePageChange} />
          </div>
        </header>
      </section>
    </div>
  );
}

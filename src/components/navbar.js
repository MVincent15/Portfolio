const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className={currentPage === "About" ? "active" : ""}>
          <a href="#about" onClick={() => handlePageChange("About")}>
            About
          </a>
        </li>
        <li className={currentPage === "Portfolio" ? "active" : ""}>
          <a href="#portfolio" onClick={() => handlePageChange("Portfolio")}>
            Portfolio
          </a>
        </li>
        <li className={currentPage === "Contact" ? "active" : ""}>
          <a href="#contact" onClick={() => handlePageChange("Contact")}>
            Contact
          </a>
        </li>
        <li className={currentPage === "Resume" ? "active" : ""}>
          <a href="#resume" onClick={() => handlePageChange("Resume")}>
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

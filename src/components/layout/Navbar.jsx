import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
      <nav className="navbar">
          
      <div className="logo-container">
        <FaGithub />
        <Link to="/">{title}</Link>
     </div>
          
      <div className="nav_routes_container">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
     </div>
          
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

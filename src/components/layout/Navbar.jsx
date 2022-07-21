import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import PropTypes from "prop-types";

function Navbar({ title }) {
  return (
    <div>
      <FaGithub />
      <Link to="/">{title}</Link>
    </div>
  );
}

Navbar.defaultProps = {
  title: "Github Finder",
};
Navbar.propTypes = {
  title: PropTypes.string,
};

export default Navbar;

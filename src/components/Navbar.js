import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand ps-4">
          My Contacts
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

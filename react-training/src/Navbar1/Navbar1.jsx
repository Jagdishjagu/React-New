import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <h1 className="navbar-brand">React Training</h1>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/class-1" className="nav-link">
              Class 1
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/class-2" className="nav-link">
              Class 2
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/class-3" className="nav-link">
              Class 3
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar1;

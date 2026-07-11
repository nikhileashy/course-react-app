import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ currentView, setCurrentView }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-info">CourseHub</span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/view" className="nav-link">
                <button
                  className={`nav-link btn border-0 bg-transparent ${currentView === "view" ? "active fw-bold text-white" : ""}`}
                >
                  View Courses
                </button>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                <button
                  className={`nav-link btn border-0 bg-transparent ${currentView === "add" ? "active fw-bold text-white" : ""}`}
                >
                  Add Course
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

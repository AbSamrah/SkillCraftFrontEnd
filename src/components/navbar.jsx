import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link
              to="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none h3 p-3">
              SkillCraft
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <Link to="/users" className="nav-link px-2 text-white">
                  Users
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="#" className="nav-link px-2 text-white">
                  Quizes
                </Link>
              </li>
            </ul>

            <div className="text-end">
              <Link to="/login" className="btn btn-outline-light me-2">
                Login
              </Link>
              <Link to="/signup" className="btn btn-primary">
                Sign-up
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;

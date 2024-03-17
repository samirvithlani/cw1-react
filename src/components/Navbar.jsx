import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light"
        style={{ backgroundColor: "#218CEB" }}
      >
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shows">
                SHOWS
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo1">
                API DEMO 1
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/apidemo2">
                API DEMO 2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postapidemo">
                POST API DEMO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postapidemo2">
                POST API DEMO2
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/adduser">
                ADD USER
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/students">
                Student-context-api
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/muitable">
                muitable
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/muibutton">
                muibutton
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/slider">
                slider
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/content">
                content
              </Link>
            </li>

            {/* <li className="nav-item">
              <Link className="nav-link" to="/userlist">
                USER LISt
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/popup">
                POPUP DEMO
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/employeelist">
                EMployee List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addemp">
                Add employee
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addbook">
                Add book
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/getbooks">
                 book List
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/addpdf">
                 ADD PDF
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/viewpdf">
                 view pdf
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/loadpdf">
                 load pdf
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/">
                LOGIN
              </Link>
            </li>
            <li className="nav-item">
              <button
                className="btn btn-danger"
                onClick={() => {
                  logout();
                }}
              >
                LOGOUT
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

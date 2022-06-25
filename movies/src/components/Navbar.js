import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../App.css";



const NavBar = () => {
  return (
    <>
      <nav className="nav">
        <div className="container-fluid">
          <header>
            <LinkRouter to="/peliculas">
              <h2 className="logo">
                <img src="img/logo.png" height="38px" alt="Logo" />
                My movies
              </h2>
            </LinkRouter>

            <ul id="options">


              <LinkRouter className="nav-link" to="/peliculas">
                <li className="nav-item">
                  <h2 className="Cities">Cities</h2>
                </li>
              </LinkRouter>

            </ul>
          </header>

        </div>
      </nav>
    </>
  );
};
export default NavBar;

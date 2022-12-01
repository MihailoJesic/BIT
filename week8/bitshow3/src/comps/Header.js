import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="container-fluid bg-dark d-flex flex-row justify-content-center">
        <div className="header-container">
          <nav className="container-fluid d-flex justify-content-between col-lg-8 col-md-12 col-sm-12">
            <a
              href="#"
              className="logo mt-auto mb-auto text-white d-inline-block"
            >
              BitShow
            </a>
            <div className="about">About</div>
          </nav>
          <div className="search-bar position-relative m-1">
            <input
              className="search d-inline-block p-1"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <div className="search-container position-absolute d-flex flex-column bg-light"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

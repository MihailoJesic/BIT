import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="header-container">
          <nav>
            <div onClick={() => props.setCurrentPage(`home`)} className="logo">
              BitShow 2.0
            </div>
            <div
              onClick={() => props.setCurrentPage(`about`)}
              className="about"
            >
              About
            </div>
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

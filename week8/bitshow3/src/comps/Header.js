import React from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <>
      <header>
        <div className="header-container">
          <nav>
            <div
              onClick={() => {
                props.setCurrentPage(`home`);
                props.setSearchQueary(``);
                document.querySelector(`.search`).value = ``;
              }}
              className="logo"
            >
              BitShow 2.0
            </div>
            <div
              onClick={() => {
                props.setCurrentPage(`about`);
                props.setSearchQueary(``);
                document.querySelector(`.search`).value = ``;
              }}
              className="about"
            >
              About
            </div>
          </nav>
          <div className="search-bar">
            <input
              className="search"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
              onChange={(e) => {
                props.setSearchQueary(e.target.value);
                props.setCurrentPage(`home`);
              }}
            />
            <div className="search-container"></div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

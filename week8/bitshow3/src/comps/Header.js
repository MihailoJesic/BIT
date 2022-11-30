import React from "react";

const Header = () => {
  return (
    <>
      <header class="container-fluid bg-dark d-flex flex-row justify-content-center">
        <nav class="container-fluid d-flex justify-content-between col-lg-8 col-md-12 col-sm-12">
          <a href="#" class="logo mt-auto mb-auto text-white d-inline-block">
            BitShow
          </a>
          <div class="search-bar position-relative m-1">
            <input
              class="search d-inline-block p-1"
              type="search"
              name="search"
              id="search"
              placeholder="Search..."
            />
            <div class="search-container position-absolute d-flex flex-column bg-light"></div>
          </div>
          <div className="about">About</div>
        </nav>
      </header>
    </>
  );
};

export default Header;

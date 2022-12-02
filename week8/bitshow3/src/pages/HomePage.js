import React from "react";
import Card from "../comps/Card";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <section className="home-section">
      <h1 className="">
        {props.searchQueary.length === 0 ? `Popular Shows` : `Search Results:`}
      </h1>
      {props.searchResults.length === 0 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
      ) : (
        ``
      )}
      <h3>{props.searchResults.length === 0 ? `We've got Nothing` : ``}</h3>

      <div className="show-container">
        {props.searchResults.map((el, i) => {
          return (
            <Card
              item={el}
              loaded={props.loaded}
              setCurrentPage={props.setCurrentPage}
              setShow={props.setShow}
              key={i}
            ></Card>
          );
        })}
        <Card></Card>
      </div>
    </section>
  );
};

export default HomePage;

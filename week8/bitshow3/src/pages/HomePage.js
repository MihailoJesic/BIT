import React from "react";
import Card from "../comps/Card";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <section className="home-section">
      <h1 className="">Popular Shows</h1>
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

import React from "react";
import Card from "../comps/Card";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home-section">
      <h1 className="">Popular Shows</h1>
      <div className="show-container">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
};

export default HomePage;

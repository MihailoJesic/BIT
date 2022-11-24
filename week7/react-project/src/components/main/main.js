import React from "react";
import "./main.css";
import Card from "../card/card";

class Main extends React.Component {
  render(props) {
    return (
      <>
        <main>
          <Card />
          <Card />
          <Card />
          <Card />
        </main>
      </>
    );
  }
}

export default Main;

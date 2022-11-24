import React from "react";
import "./main.css";
import Card from "../card/card";

class Main extends React.Component {
  arr = [1, 2, 3, 4, 5, 6, 7, 8];

  render(props) {
    return (
      <>
        <main>
          {this.arr.map((el) => {
            return <Card val={el} />;
          })}
        </main>
      </>
    );
  }
}

export default Main;

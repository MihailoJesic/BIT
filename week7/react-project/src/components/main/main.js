import React from "react";
import "./main.css";
import Card from "../card/card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
    };
  }
  arr = [1, 2, 3, 4, 5, 6, 7, 8];

  render() {
    return (
      <>
        <main>
          <h2>Number is {this.state.number}</h2>
          <button
            onClick={() => {
              this.setState({ number: this.state.number + 1 });
              this.render();
            }}
          >
            Increase Number
          </button>
          <div>
            {this.arr.map((el) => {
              return <Card val={el} />;
            })}
          </div>
        </main>
      </>
    );
  }
}

export default Main;

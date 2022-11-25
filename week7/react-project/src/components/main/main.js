import React from "react";
import "./main.css";
import Card from "../card/card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      isFriday: true,
      data: [],
    };

    this.changeFriday = this.changeFriday.bind(this);
    this.fetchData = this.fetchData.bind(this);
  }

  changeFriday() {
    this.setState({ isFriday: !this.state.isFriday });
  }

  fetchData() {
    fetch(`https://637f92525b1cc8d6f949b90f.mockapi.io/entries`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        this.setState({ data: res });
      });
  }

  arr = [1, 2, 3, 4, 5, 6, 7, 8];

  render() {
    return (
      <>
        <main>
          <h2>Number is {this.props.number}</h2>
          <div className="add-sub">
            <button
              onClick={() => {
                this.props.counter(`add`);
              }}
            >
              Increase Number
            </button>
            <button
              onClick={() => {
                this.props.counter(`subtract`);
              }}
            >
              Decrease Number
            </button>
          </div>
          <button
            onClick={() => {
              this.changeFriday();
              console.log(this.state.isFriday);
            }}
          >
            It is {this.state.isFriday ? `` : `not `}Friday
          </button>
          <button
            onClick={() => {
              this.fetchData();
            }}
          >
            Get Data
          </button>
          <div className="card-container">
            {this.state.data.map((el, i) => {
              return (
                <Card
                  img={el.avatar}
                  key={i}
                  id={el.id}
                  name={el.name}
                  date={el.createdAt}
                />
              );
            })}
          </div>
        </main>
      </>
    );
  }
}

export default Main;

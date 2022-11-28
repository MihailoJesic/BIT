import React, { Component } from "react";
import Card from "./card";

export class App extends Component {
  constructor(props) {
    super();
    this.state = { data: [], target: ``, targetData: null };
    this.setTarget = this.setTarget.bind(this);
    this.back = this.back.bind(this);
    this.fetcCountry = this.fetcCountry.bind(this);
  }

  fetchData() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("asdas", res);
        this.setState({ data: Array.from(res) });
        // console.log("state.data :", this.state.data);
      });
  }

  fetcCountry(code) {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ targetData: res[0] });
        console.log("state.targetData :", this.state.targetData);
      });
  }

  setTarget(target) {
    this.setState({ target: target });
    this.fetcCountry(target);
  }

  componentDidMount() {
    this.fetchData();
  }

  back() {
    this.setState({ target: "", targetData: null });
  }

  render() {
    if (this.state.targetData === null) {
      return (
        <>
          {this.state.data.map((el, i) => {
            return (
              <Card
                name={el.name.common}
                flag={el.flag}
                code={el.cca3}
                key={i}
                setTarget={this.setTarget}
              ></Card>
            );
          })}
        </>
      );
    } else if (this.state.targetData !== null) {
      console.log(`HERE `, this.state.targetData);
      return (
        <>
          <Card
            name={this.state.targetData.name.common}
            flag={this.state.targetData.flag}
            code={this.state.targetData.cca3}
            setTarget={this.back}
          ></Card>
        </>
      );
    }
  }
}

export default App;

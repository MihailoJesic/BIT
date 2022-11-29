import React, { Component } from "react";
import Card from "./components/card";
import Pagination from "./components/pagination";
import Page from "./components/page";
import "./App.css";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      target: ``,
      targetData: null,
      page: 1,
      ITEMSPERPAGE: 15,
    };
    this.setTarget = this.setTarget.bind(this);
    this.back = this.back.bind(this);
    this.fetchCountry = this.fetchCountry.bind(this);
    this.setPage = this.setPage.bind(this);
  }

  fetchData() {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((res) => {
        // console.log("asdas", res);
        this.setState({ data: res, data: res });
        // console.log("state.data :", this.state.data);[]
      });
  }

  fetchCountry(code) {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({ targetData: res[0] });
        // console.log("state.targetData :", this.state.targetData);
      });
  }

  setTarget(target) {
    this.setState({ target: target });
    this.fetchCountry(target);
  }

  setPage(num) {
    this.setState({
      data: num,
    });
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
          <main>
            {this.state.data.map((el, i) => {
              let output;
              if (
                i >= this.state.ITEMSPERPAGE * (this.state.page - 1) &&
                i < this.state.ITEMSPERPAGE * this.state.page
              ) {
                output = (
                  <>
                    <Card
                      name={el.name.common}
                      flag={el.flags.svg}
                      code={el.cca3}
                      key={50000 - i}
                      setTarget={this.setTarget}
                    ></Card>
                  </>
                );
              }
              return output;
            })}
          </main>
          <Pagination
            setPage={this.setPage}
            page={this.state.page}
            max={Math.ceil(this.state.data.length / this.state.ITEMSPERPAGE)}
          ></Pagination>
        </>
      );
    } else if (this.state.targetData !== null) {
      return (
        <>
          <main>
            <Page
              name={this.state.targetData.name.common}
              flag={this.state.targetData.flags.svg}
              code={this.state.targetData.cca3}
              setTarget={this.back}
              capital={this.state.targetData.capital}
              coatOfArms={this.state.targetData.coatOfArms.svg}
              population={this.state.targetData.population}
              region={this.state.targetData.region}
              subregion={this.state.targetData.subregion}
              map={this.state.targetData.maps.googleMaps}
            ></Page>
          </main>
        </>
      );
    }
  }
}

export default App;

import React, { Component } from "react";
import "./page.css";

export class Page extends Component {
  render(props) {
    // console.log("Props: ", this.props);
    return (
      <div className="page">
        <img src={this.props.flag} alt="Flag" />
        <h1>{this.props.name}</h1>
        <div className="description">
          <div className="coa">
            <div>Coat of Arms</div>
            <img src={this.props.coatOfArms} alt="Coat of Arms" />
          </div>
          <div className="text-box">
            <div>Capital: {this.props.capital}</div>
            <div>
              Population:{" "}
              {new Intl.NumberFormat().format(this.props.population)}
            </div>
            <div>Continent: {this.props.region}</div>
            <div>Region: {this.props.subregion}</div>
            <div
              className="btn-back"
              onClick={() => {
                this.props.setTarget(this.props.code);
              }}
            >
              Back
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Page;

import React, { Component } from "react";

export class Card extends Component {
  render(props) {
    // console.log("Props: ", this.props);
    return (
      <div
        className="card"
        onClick={() => {
          this.props.setTarget(this.props.code);
        }}
      >
        <div>
          {" "}
          {this.props.flag} - {this.props.name}
        </div>
        <div className="details">
          <div>Capital: {this.props.capital}</div>
          <div>Population: {this.props.population}</div>
          <div>Continent: {this.props.region}</div>
          <div>Region: {this.props.subregion}</div>
          <img src={this.props.coatOfArms} alt="Coat of Arms" />
        </div>
      </div>
    );
  }
}

export default Card;

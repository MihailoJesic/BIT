import React, { Component } from "react";
import "./card.css";

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
        <img src={this.props.flag} alt="Flag" />
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Card;

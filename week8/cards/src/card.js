import React, { Component } from "react";

export class Card extends Component {
  render(props) {
    // console.log("Props: ", this.props);
    return (
      <div
        onClick={() => {
          this.props.setTarget(this.props.code);
        }}
      >
        {this.props.flag}
        <div>{this.props.name}</div>
      </div>
    );
  }
}

export default Card;

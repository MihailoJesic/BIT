import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="profile">
          <img src={this.props.img}></img>
          <div>{this.props.name}</div>
        </div>
        <div className="userData">
          {this.props.id} - {this.props.date}
        </div>
      </div>
    );
  }
}

export default Card;

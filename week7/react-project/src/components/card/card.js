import React from "react";
import "./card.css";

class Card extends React.Component {
  render() {
    return <div className="card">Card #{this.props.val}</div>;
  }
}

export default Card;

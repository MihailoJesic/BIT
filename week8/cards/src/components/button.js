import React, { Component } from "react";
import "./button.css";

class Button extends Component {
  render(props) {
    // console.log(props);
    return (
      <>
        <div>{props?.number}</div>
      </>
    );
  }
}

export default Button;

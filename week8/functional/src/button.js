import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Button = (props) => {
  return (
    <div>
      <div onClick={() => props.methods(props.counter + 1)}>+</div>
      <div onClick={() => props.methods(props.counter - 1)}>-</div>
    </div>
  );
};

export default Button;

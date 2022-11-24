import React from "react";
import Sub from "./sub";

class Title extends React.Component {
  render() {
    let name = `Mihailo`;
    let surname = `Jesic`;
    let now = new Date();
    let year = now.getFullYear();
    let yob = 1991;

    let arr = [`One`, `Two`, `Three`, `Four`];

    return (
      <>
        <h1>
          {name} {surname}, age: {year - yob}
        </h1>

        <Sub text="9" />
        <Sub text="8" />
        <Sub text="7" />

        {arr.map((el) => {
          return <p>{el}</p>;
        })}
      </>
    );
  }
}

export default Title;

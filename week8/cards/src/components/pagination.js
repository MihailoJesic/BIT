import React, { Component } from "react";
import Button from "./button";
import "./pagination.css";

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = { buttons: [1], nav: [1] };
    this.navify = this.navify.bind(this);
    this.listify = this.listify.bind(this);
  }

  listify(num) {
    let result = Array.from(Array(num).keys());
    return result;
  }

  navify(arr, num, max) {
    let result = arr.filter((el) => {
      let testEl = el + 1;
      let res;
      if (
        testEl == 1 ||
        testEl == max ||
        (testEl >= num - 2 && testEl <= num + 2)
      ) {
        res = true;
      }
      return res;
    });
    return result;
  }

  componentDidUpdate() {
    // this.setState({
    //   buttons: this.listify(this.props.max),
    //   nav: this.navify(
    //     this.listify(this.props.max),
    //     this.props.page,
    //     this.props.max
    //   ),
    // });
  }

  render() {
    return (
      <>
        {this.state.nav.map((el) => {
          return <Button key={el} number={el + 1}></Button>;
        })}
        ;
      </>
    );
  }
}

export default Pagination;

import React from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import "./homepage.css";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <h1>Home Page</h1>
        <Header />
        <Main counter={this.props.counter} number={this.props.number} />
        <Footer />
      </>
    );
  }
}

export default HomePage;

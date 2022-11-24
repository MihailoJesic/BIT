import React from "react";
import Header from "../../components/header/header";
import Main from "../../components/main/main";
import Footer from "../../components/footer/footer";
import "./homepage.css";

class HomePage extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Main />
        <Footer />
      </>
    );
  }
}

export default HomePage;

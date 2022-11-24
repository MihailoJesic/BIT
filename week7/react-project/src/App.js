import React from "react";
import HomePage from "./pages/homepage/homepage";
import SinglePage from "./pages/singlepage/singlepage";
import "./index.css";

class App extends React.Component {
  isOnHomePage = true;
  render() {
    return (
      <>
        {this.isOnHomePage && <HomePage />}
        {!this.isOnHomePage && <SinglePage />}
      </>
    );
  }
}

export default App;

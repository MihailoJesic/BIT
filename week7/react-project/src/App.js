import React from "react";
import HomePage from "./pages/homepage/homepage";
import SinglePage from "./pages/singlepage/singlepage";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOnHomePage: true };
  }
  render() {
    return (
      <>
        <button
          onClick={(e) => {
            this.setState({ isOnHomePage: !this.state.isOnHomePage });
          }}
        >
          Go to {this.state.isOnHomePage ? `Single Page` : `Home Page`}
        </button>
        {this.state.isOnHomePage ? <HomePage /> : <SinglePage />}
      </>
    );
  }
}

export default App;

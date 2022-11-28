import React from "react";
import HomePage from "./pages/homepage/homepage";
import SinglePage from "./pages/singlepage/singlepage";
import "./index.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isOnHomePage: true, number: 0 };
    this.counter = this.counter.bind(this);
  }

  counter(action) {
    if (action === `add`) {
      this.setState({ number: this.state.number + 1 });
    } else if (action === `subtract`) {
      this.setState({ number: this.state.number - 1 });
    }
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
        {this.state.isOnHomePage ? (
          <HomePage counter={this.counter} number={this.state.number} />
        ) : (
          <SinglePage />
        )}
      </>
    );
  }
}

export default App;

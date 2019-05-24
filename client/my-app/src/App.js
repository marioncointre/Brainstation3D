import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Chart from "./Components/Chart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <p>Test</p>
        {/* <Header />*/}
        <Chart />
      </div>
    );
  }
}

export default App;

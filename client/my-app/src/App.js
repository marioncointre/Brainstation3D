import React from "react";
import "./App.css";
import Hero from "./Components/Hero";
import DonutChart from "./modals/DonutChart"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import LineChart from "./modals/LineChart";

class App extends React.Component {


  render() {  
    return (
      <div className="App">
        <BrowserRouter>
          <Hero />
          <Switch>
            <Redirect path="/" exact to="/linechart"/>
            <Route path="/donutchart" exact component={DonutChart} />
            <Route path="/linechart" component={LineChart} />
          </Switch>
        </BrowserRouter>
        
        {/* <Main /> */}
      </div>
    );
  }
}

export default App;

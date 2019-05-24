import React from "react";
import { Link } from "react-router-dom";

class Hero extends React.Component {
  render() {
    return (
      <div className="hero">
        <h1>What's Next?</h1>
        <h2>Find a job, start a company or go back to school?</h2>
        <p>Find a job, start a company or go back to school?</p>
        <div className="menu">
          <ul>
            <li>
              <p>Topic popularity over time</p>
              <button>+</button>
            </li>
            <li>Dougnut</li>
            <button>+</button>
            <li>Top</li>
            <button>+</button>
          </ul>
        </div>
        <div className="hero__links--container">
          <Link to="/linechart">
            <button>Topic popularity</button>
          </Link>
          <Link to="/donutchart">
            <button>Topic popularity</button>
          </Link>
          <Link to="/wordcloud">
            <button>Topic popularity</button>
    
          </Link>
        </div>
      </div>
    );
  }
}
export default Hero;

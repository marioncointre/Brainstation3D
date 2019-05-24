import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return(
        <div className="hero">
            <h1>What's Next?</h1>
            <h2>Find a job, start a company, or go back to school?</h2>
            <h3>Trends in pathways for new grads between 2007-2017 according to popular Ted Talks.</h3>
            <div className="hero__links--container">
                <Link to= "/linechart">
                    LINE CHART
                </Link>
                <Link to="/donutchart">
                    DONUT CHART
                </Link>
                <Link to="/wordcloud">
                    WORD CLOUD
                </Link>
            </div>
        </div>
        
    )
}

export default Hero;

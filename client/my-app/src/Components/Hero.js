import React from 'react';
import { Link } from "react-router-dom";

function Hero() {
    return(
        <div className="hero">
            <h1>TITLE GOES HERE</h1>
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

import React from "react";
import { Line } from "react-chartjs-2";

let sampleData = {
    labels: ["2006", "'07", "'08", "'09", "'10", "'11", "'12", "'13", "'14", "'15", "'16", "2017", ],
    datasets: [
        {
            label: "Entrepreneurship",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#7d2e8d",
            borderColor: "#7d2e8d",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#7d2e8d",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#7d2e8d",
            pointHoverBorderColor: "#7d2e8d",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [43, 101, 136, 185, 183, 196, 224, 158, 147, 138, 235, 171]
        },

        {
            label: "Post-Graduate Education",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#76ac2f",
            borderColor: "#76ac2f",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#76ac2f",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#76ac2f",
            pointHoverBorderColor: "#76ac2f",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [45, 104, 161, 192, 201, 226, 243, 179, 140, 148, 232, 117]
        },

        {
            label: "Traditional Employment",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "#55c0ee",
            borderColor: "#55c0ee",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "#55c0ee",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#55c0ee",
            pointHoverBorderColor: "#55c0ee",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [31, 66, 92, 117, 103, 126, 130, 81, 74, 92, 203, 135]
        },

    ]
};

var divStyle = {
    height: "800px",
    width: "800px"
};

class LineChart extends React.Component {
    state = sampleData;

    sliderHandle = event => {
        let newData = sampleData;
        newData.datasets[0].data[2] = event.target.value;
        sampleData = newData;
        this.setState(sampleData);
    };

    componentDidUpdate = () => { };

    clickHandle = () => {
        let alldata = this.state;
        alldata.datasets[0].data[2]++;
        this.setState({
            alldata
        });
    };

    render() {
        console.log(this.state);
        return (
            <div style={divStyle}>
                <h2>Line Example</h2>
                <Line data={this.state} />
                <button onClick={this.clickHandle} />
            </div>
        );
    }
}

export default LineChart;
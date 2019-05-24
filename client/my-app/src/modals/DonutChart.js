import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const sampleData = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [10, 10, 10],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

class DonutChart extends React.Component {

    state = sampleData;
    

    clickHandle = (event) => {

        let currentData = this.state;
        currentData.datasets[0].data[0] = event.target.value;
        this.setState({
            currentData
        })
    }

    render() {
        return (
            <div>
                <h2>GRAPH TITLE</h2>
                <Doughnut data={this.state} />
                <input type="range" onChange={this.clickHandle} min={0} max={10}></input>
            </div>
        )
    }
}

export default DonutChart;
import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const sampleData = {
    labels: [
        'Entrepreneurship',
        'Post-Graduate Education',
        'Traditional Employment'
    ],
    datasets: [{
        data: [43, 45, 31],
        backgroundColor: [
            '#7d2e8d',
            '#76ac2f',
            '#55c0ee'
        ],
        hoverBackgroundColor: [
            '#7d2e8d',
            '#76ac2f',
            '#55c0ee'
        ]
    }]
};



class DonutChart extends React.Component {

    state = sampleData;
    

    sliderHandle = (event) => {
        let currentData = [];
        let year = event.target.value;

        if (year == 0) {
            currentData = [43, 45, 31]
        } else if (year == 1) {
            currentData = [101, 104, 66]
        } else if (year == 2) {
            currentData = [136, 161, 92]
        } else if (year == 3) {
            currentData = [185, 192, 117]
        } else if (year == 4) {
            currentData = [183, 201, 103]
        } else if (year == 5) {
            currentData = [196, 226, 126]
        } else if (year == 6) {
            currentData = [224, 243, 130]
        } else if (year == 7) {
            currentData = [158, 179, 81]
        } else if (year == 8) {
            currentData = [147, 140, 74]
        } else if (year == 9) {
            currentData = [138, 148, 92]
        } else if (year == 10) {
            currentData = [235, 232, 203]
        } else if (year == 11) {
            currentData = [171, 177, 135]
        } 

        let newData = this.state;

        newData.datasets[0].data = currentData;
        this.setState({
            newData
        })
    }

    render() {
        return (
            <div>
                <h2>GRAPH TITLE</h2>
                <Doughnut data={this.state} />
                <input type="range" onChange={this.clickHandle} min={0} max={12}></input>
            </div>
        )
    }
}

export default DonutChart;
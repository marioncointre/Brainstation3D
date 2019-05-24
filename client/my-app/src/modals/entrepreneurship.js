import React from 'react';
import { Line } from 'react-chartjs-2';
// import { defaults } from 'react-chartjs-2';
// defaults.global.animation = false;

let sampleData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 50, 81, 56, 55, 40]
        }
    ]
}

class Chart extends React.Component {

    state = sampleData;


    sliderHandle = (event) => {
        let newData = sampleData;
        newData.datasets[0].data[2] = event.target.value;
        sampleData = newData;
        this.setState(sampleData);
    }

    componentDidUpdate = () => {

    }

    clickHandle = () => {

        let alldata = this.state;
        this.state.datasets[0].data.map((elem, index) => {
            return index === 2 ? elem++ : elem
        })

        this.setState(alldata);
        console.log(alldata);
        console.log(alldata.datasets[0].data[2]);
    }

    render() {

        console.log(this.state);
        return (
            <div>
                <h2>Line Example</h2>
                <Line data={this.state} />
                <button onClick={this.clickHandle}></button>
                {/* <input type="range" onClick={this.sliderHandle} min={0} max={100}></input> */}
            </div>
        );
    }
};

export default Chart;
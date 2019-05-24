import React from 'react';
import { Line } from 'react-chartjs-2';



export default function Chart(props) {

    console.log(props.data.datasets[0].data[2]);

    return (
        <div>
            <h2>Line Example</h2>
            <Line data={props.data} />
        </div>
    );
};
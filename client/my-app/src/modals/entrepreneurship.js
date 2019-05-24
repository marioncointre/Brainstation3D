import React from "react";
import { Line } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";

export default function Chart(props) {
  return (
    <div>
      <h2>Data</h2>
      <Line data={props.data} />
      <Doughnut data={props.data} />
    </div>
  );
}

import React from "react";
import D3Chart from "./D3Chart.js";

class ChartWrapper extends React.Component {
  // executes once as soon as the component is mounted to the screen
  componentDidMount() {
    // refers to the ref in the div
    new D3Chart(this.refs.chart);
  }
  render() {
    return <div ref="chart" />;
  }
}

export default ChartWrapper;
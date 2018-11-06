import React from 'react';
import { connect } from 'react-redux';

import { scaleLinear } from 'd3-scale';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import * as axis from 'd3-axis';

class Datavis extends React.Component {
    constructor(props){
      super(props)
      this.createLineChart = this.createLineChart.bind(this)
    }

    componentDidMount() {
        this.createLineChart()
    }

    componentDidUpdate() {
        this.createLineChart()
    }

    createLineChart() {
        const node = this.node;
        const height = 250;

        const y = scaleLinear()
                    .domain([0, 100])
                    .range([height, 0]);
        const x = scaleLinear()
                    .domain([0, 100])
                    .range([0, height]);

        const yAxis = axis.axisLeft(y);
        const xAxis = axis.axisBottom(x);

        select(node)
            .append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0, ${height})`)
            .call(xAxis);

        select(node)
            .append('g')
            .attr('class', 'y axis')
            .call(yAxis);
    }

render() {
      return <svg ref={node => this.node = node}
      width={250} height={250}>
      </svg>
   }
}

// const Datavis = (props) => {
//     return (
//     );
// };

export default Datavis;
import React from 'react';
import { connect } from 'react-redux';

import { scaleLinear, scaleBand } from 'd3-scale';
import { line } from 'd3-shape';
import { select } from 'd3-selection';
import * as axis from 'd3-axis';


const mapStateToProps = state => ({
  data: state.data,
});

class Datavis extends React.Component {
  constructor(props) {
    super(props);
    this.createLineChart = this.createLineChart.bind(this);
  }

  componentDidMount() {
    this.createLineChart();
  }

  componentDidUpdate() {
    this.createLineChart();
  }

  createLineChart() {
    const { node } = this;
    const height = 250;
    const strokeColors = ['red', 'blue', 'purple', 'green', 'yellow', 'orange', 'pink'];

    const y = scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    const x = scaleBand()
      .domain(['DPS', 'Hit%', 'Special%'])
      .range([0, height]);

    const yAxis = axis.axisLeft(y)
      .ticks(4);
    const xAxis = axis.axisBottom(x)
      .tickSizeOuter(0);

    const dataLine = line()
      .x(d => x(d.cat))
      .y((d) => {
        if (d.cat !== 'DPS') {
          return y(d.val * 100);
        }
        return y(d.val);
      });

    select(node)
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', `translate(25, ${height + 15})`)
      .call(xAxis);

    select(node)
      .append('g')
      .attr('class', 'y axis')
      .attr('transform', 'translate(25, 15)')
      .call(yAxis);

    for (let i = 0; i < this.props.data.length; i++) {
      select(node)
        .append('path')
        .attr('d', dataLine(this.props.data[i].data))
        .attr('transform', `translate(67, ${15})`)
        .attr('stroke-width', 2)
        .attr('stroke', `${strokeColors[i]}`);
    }
  }

  render() {
    return (
      <svg
        ref={node => this.node = node}
        width={300}
        height={300}
      />
    );
  }
}


export default connect(mapStateToProps)(Datavis);

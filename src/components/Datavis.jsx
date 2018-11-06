import React from 'react';
import { connect } from 'react-redux';

import { scaleLinear } from 'd3-scale';
import { max } from 'd3-array';
import { select } from 'd3-selection';

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
        const node = this.node
        const dataMax = max(this.props.data)
        const yScale = scaleLinear()
            .domain([0, dataMax])
            .range([0, this.props.size[1]]);
        var xAxis = select(node).axis().scale(x)
            .orient("bottom").ticks(5);
        
        var yAxis = select(node).axis().scale(y)
            .orient("left").ticks(5);
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .enter()
            .append('rect')
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .exit()
            .remove()
        
        select(node)
            .selectAll('rect')
            .data(this.props.data)
            .style('fill', '#fe9922')
            .attr('x', (d,i) => i * 15)
            .attr('y', d => this.props.size[1] - yScale(d))
            .attr('height', d => yScale(d))
            .attr('width', 25)

        // Add the X Axis
        select(node).append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        // Add the Y Axis
        select(node).append("g")
            .attr("class", "y axis")
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
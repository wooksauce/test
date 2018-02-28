import React, { Component } from 'react';
import { Chart } from 'react-d3-core';
import { BarChart } from 'react-d3-basic';

class GraphView extends Component {
  // load your general data
  render() {
    const chartData = [{
      "accountNum": 1234700024242152,
      "revenue": 2000
    }, {
      "accountNum": 5464527864626811,
      "revenue": "2000"
    }, {
      "accountNum": 9031477656143980,
      "revenue": "2800"
    }];

    // var width = 700,
    //   height = 400,
    //   title = "Bar Chart",
    //   chartSeries = [
    //     {
    //       field: 'revenue',
    //       name: 'revenue'
    //     }
    //   ],
    //   x = function(d) {
    //     return d.accountNums;
    //   },
    //   xScale = 'ordinal',
    //   xLabel = "Letter",
    //   yLabel = "Frequency",
    //   yTicks = [10, "%"];

    return(
      <BarChart
        // title= {title}
        data= {chartData}
        // width= {width}
        // height= {height}
        // chartSeries = {chartSeries}
        // x= {x}
        // xLabel= {xLabel}
        // xScale= {xScale}
        // yTicks= {yTicks}
        // yLabel = {yLabel}
      />
    )
  }
}

export default GraphView;
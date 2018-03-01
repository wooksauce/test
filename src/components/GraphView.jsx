import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartistGraph from 'react-chartist';
import chartist from 'chartist';
import './styles/graphView.css';

class GraphView extends Component {

  render() {
    const accounts = this.props.accounts;
    if (!accounts || !accounts.length) {
      return null;
    }
    let temp = accounts.slice(0);
    const sortedByRevenue = temp.sort((a, b) => {
      return b.revenue - a.revenue;
    });
    const names = [];
    const revenues = [];
    for (let i = 0; i < 4; i++) {
      names.push(sortedByRevenue[i].firstName + ' ' + sortedByRevenue[i].lastName);
      revenues.push(sortedByRevenue[i].revenue);
    }

    const data ={
      labels: names,
      series: [
        revenues
      ],
    }

    const steps = [0];
    const step = Math.floor((revenues[0] - revenues[0]%1000) / 3) - Math.floor((revenues[0] - revenues[0]%1000) / 3)%1000;
    for (let i = 0; i < 3; i++) {
      steps.push(step * (i + 1));
    }

    var options = {
      width: 1215,
      height: 250,
      axisX: {
        // offset: 30,
      },
      axisY: {
        offset: 10,
        labelInterpolationFnc: function(value, ind) {
          if (ind % 3 === 0) {
            return '$' + value;
          }
        },
        scaleMinSpace: 12,
      },
      chartPadding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      },
    }

    var type = 'Bar'

    return (
      <div className="graphContainer">
        <p className="revenueAxis"> Revenue </p>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default GraphView;
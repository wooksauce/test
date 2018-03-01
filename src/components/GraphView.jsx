import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartistGraph from 'react-chartist';
import './styles/GraphView.css';

class GraphView extends Component {

  render() {
    let accounts = this.props.accounts;
    if (!accounts || !accounts.length) {
      return null;
    }
    let temp = accounts.slice(0);
    let sortedByRevenue = temp.sort((a, b) => {
      return b.revenue - a.revenue;
    });
    let names = [];
    let revenues = [];
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

    console.log('data', data)

    var options = {
      width: 1295,
      height: 380,
      seriesBarDistance: 10,
      axisX: {
        offset: 60
      },
      axisY: {
        offset: 80,
        labelInterpolationFnc: function(value) {
          return value % 1000 === 0 ? '$' + value: null;
        },
        scaleMinSpace: 15,
      },
      low: 0,
    }

    var type = 'Bar'

    return (
      <ChartistGraph data={data} options={options} type={type} />
    )
  }
}

export default GraphView;
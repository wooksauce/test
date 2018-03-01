import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './styles/GraphView.css';

class GraphView extends Component {

  render() {
    let accounts = this.props.accounts;
    if (!accounts || !accounts.length) {
      return null;
    }
    let clone = accounts.slice(0);
    let sortedByRevenue = clone.sort((a, b) => {
      return b.revenue - a.revenue;
    });
    let data = [];
    for (let i = 0; i < 4; i++) {
      let temp = {};
      temp['name'] = sortedByRevenue[i].firstName + ' ' + sortedByRevenue[i].lastName;
      temp['revenue'] = sortedByRevenue[i].revenue;
      data.push(temp);
    }

    console.log('data', data)

    return (
      <div>
        <BarChart width={1295} height={380} data={data}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid stroke="#ccc"/>
          <Tooltip/>
          <Legend />
          <Bar type="monotone" dataKey="revenue" fill="#8884d8" barSize={80} />
        </BarChart>
      </div>
    )
  }
}

export default GraphView;
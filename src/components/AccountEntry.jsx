import React, { Component } from 'react';

class AccountEntry extends Component {
  render() {
    const account = this.props.account;
    return(
      <tr>
        <td className="firstCol"> {account.account_number} {account.name} </td>
        <td> {account.created_on} </td>
        <td> {account.membership} </td>
        <td> {account.coverage_level} </td>
        <td> {account.revenue} </td>
      </tr>
    )
  }
}

export default AccountEntry;
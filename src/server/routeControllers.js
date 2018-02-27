const fs = require('fs');
let accounts = require('../accounts.json');

module.exports = {
  addNewAccount: (req, res) => {
    const { firstName, lastName, membership, coverageLevel, Revenue } = req.body;
    const acctNum = Math.floor(Math.pow(10, 15) * (1 + Math.random() * 9))
    console.log('here', accounts);
  }
}
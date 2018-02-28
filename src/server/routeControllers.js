const fs = require('fs');
const path = require('path');
// let accounts = require('../accounts.json');

module.exports = {
  addNewAccount: (req, res) => {
    const { firstName, lastName, membership, coverageLevel, revenue } = req.body;
    //not going to worry about duplicate acct nums
    const acctNum = Math.floor(Math.pow(10, 15) * (1 + Math.random() * 9))
    const newAccount = {
      accountNum: acctNum,
      firstName: firstName,
      lastName: lastName,
      createdOn: new Date(),
      membership: membership,
      coverageLevel: coverageLevel,
      revenue: revenue,
    }
    fs.readFile(path.join(__dirname, '../accounts.json'), 'utf8', (err, data) => {
      if (err) {
          console.log('error occured while reading the json file', err);
      } else {
        obj = JSON.parse(data)
        obj.push(newAccount); //add some data
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(path.join(__dirname, '../accounts.json'), json, 'utf8', (err) => {
          console.log('error occured while writing file', err);
        });
        res.status(202).send(data);
      }
    });
  }
}
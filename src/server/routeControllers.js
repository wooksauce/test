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
        res.status(404).send(err);
      } else {
        obj = JSON.parse(data)
        obj.push(newAccount);
        json = JSON.stringify(obj); //convert it back to json
        fs.writeFile(path.join(__dirname, '../accounts.json'), json, 'utf8', (err) => {
          if (err) {
            res.status(404).send(err);
          } else {
            res.status(202).send(data);
          }
        });
      }
    });
  },

  updateAccount: (req, res) => {
    const { accountNum, firstName, lastName, membership, coverageLevel, revenue } = req.body;
    fs.readFile(path.join(__dirname, '../accounts.json'), 'utf8', (err, data) => {
      if (err) {
        console.log('error occured while updating', err);
      } else {
        obj = JSON.parse(data);
        for (let i = 0; i < obj.length; i++) {
          if (obj[i].accountNum == accountNum) {
            obj[i].firstName = firstName;
            obj[i].lastName = lastName;
            obj[i].membership = membership;
            obj[i].coverageLevel = coverageLevel;
            obj[i].revenue = revenue;
          }
        }
        json = JSON.stringify(obj);
        fs.writeFile(path.join(__dirname, '../accounts.json'), json, 'utf8', (err) => {
          if (err) {
            res.status(404).send(err);
          } else {
            res.status(202).send(data);
          }
        });
      }
    })
  },

  getAllAccounts: (req, res) => {
    fs.readFile(path.join(__dirname, '../accounts.json'), 'utf8', (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        obj = JSON.parse(data);
        res.status(202).send(obj);
      }
    })
  },

  deleteAccount: (req, res) => {
    const acctToDelete = req.params.acctNum;
    fs.readFile(path.join(__dirname, '../accounts.json'), 'utf8', (err, data) => {
      if (err) {
        res.status(404).send(err);
      } else {
        obj = JSON.parse(data);
        for (let i = 0; i < obj.length; i++) {
          if (obj[i].accountNum == acctToDelete) {
            obj.splice(i, 1);
          }
        }
        json = JSON.stringify(obj);
        console.log('json', json)
        fs.writeFile(path.join(__dirname, '../accounts.json'), json, 'utf8', (err) => {
          if (err) {
            res.status(404).send(err)
          } else {
            res.status(202).send(data);
          }
        });
      }
    })
  }
}
const router = require('express').Router();
const control = require('./routeControllers');

router.get('/allAccounts', control.getAllAccounts);

router.post('/addNewAccount', control.addNewAccount);

router.put('/updateAccount', control.updateAccount);

module.exports = router;
const router = require('express').Router();
const control = require('./routeControllers');

// router.get('/getMovie/:imdbid', control.getMovie);

router.post('/addNewAccount', control.addNewAccount);

module.exports = router;
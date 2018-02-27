const express = require('express');
const parser = require('body-parser');
const path = require('path');
// const routes = require('./routes/serverRouter')

const app = express();

const port = 3000;

app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../../src/static')));
// app.use('/api', routes)

app.listen(port, () => {
  console.log(`node listening on ${port}`);
});
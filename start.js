'use strict';

const express = require('express');
const app = express();
const {resolve} = require('path')

const bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Loads environment variables from a .env file into process.env
const dotenv = require('dotenv');
dotenv.config();

// Serve static files from ./public
app.use(express.static(resolve(__dirname, 'public')));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, 'public', 'index.html')));

const models = require('./models');
app.use('/', require('./routes'));

models.db.sync({force:true}) // Set force:true if you want to reset the database each time you restart server.
.then(function () {
  app.listen(3000, function () {
      console.log('Server listening on 3000');
  });
})
.catch(console.error);

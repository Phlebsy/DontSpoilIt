const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors')

const users = require('./routes/users');
const twitter = require('./routes/twitter');
const movies = require('./routes/movie');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.use('/users', users);
app.use('/twitter', twitter);
app.use('/movies', movies);

module.exports = app;

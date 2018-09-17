const express = require('express');
const router = express.Router();
const { getMovies, getMovie } = require('../utils/sentiment/tools');

router.get('/', (req, res) => {
  getMovies()
    .then(data => {
      console.log(data);
      res.send(data.data.results);
    })
    .catch(err => console.log(err));
});

router.get('/movie/:id', (req, res) => {
  getMovie(req.params.id)
    .then(data => res.send(data))
    .catch(err => console.log(err));
});

module.exports = router;

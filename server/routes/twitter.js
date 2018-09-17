const express = require('express');
const router = express.Router();
const axios = require('axios');
const { runAnalysis, stripHashAt } = require('../utils/sentiment/tools');

const configs = require('../configs/configs');

//Callback functions
const error = function(err, response, body) {
  console.log('ERROR [%s]', err);
};
const success = function(data) {
  console.log('Data [%s]', data);
};

const Twitter = require('twitter-node-client').Twitter;

//Get this data from your twitter apps dashboard
const twitterConfigs = {
  consumerKey: configs.twitterAPIKey,
  consumerSecret: configs.twitterAPISecret,
  accessToken: configs.twitterAccessToken,
  accessTokenSecret: configs.twitterAccessTokenSecret,
  callBackUrl: '/twitter/'
};

var twitter = new Twitter(twitterConfigs);

router.get('/search/:query', (req, res) => {
  twitter.getSearch(
    { q: encodeURI(stripHashAt(req.params.query)), lang: 'en', count: 100 },
    error,
    data => {
      data = JSON.parse(data);
      let accum = '';
      let nonEng = 0;
      console.log(data.statuses.length);
      data.statuses.forEach(tweet => {
        if (tweet.metadata.iso_language_code == 'en') {
          accum += tweet.text + '\n\n';
        } else {
          nonEng++;
        }
      }, '');
      console.log(`Can't use: ${nonEng}`);
      runAnalysis(accum)
        .then(data =>
          res.json({
            sentiment: data.sentiment.document,
            emotions: data.emotion.document.emotion
          })
        )
        .catch(err => res.json(err));
    }
  );
});

router.get('/', (req, res) => {
  res.send('hi');
});

module.exports = router;

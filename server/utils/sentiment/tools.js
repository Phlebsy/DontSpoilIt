const configs = require('../../configs/configs');
// var fs = require('fs');
var NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const axios = require('axios');

module.exports = {
  stripHashAt(tweetText) {
    return tweetText.replace(/[ #@:]/g, '');
  },
  runAnalysis(tweet) {
    var nlu = new NaturalLanguageUnderstandingV1({
      username: configs.watsonusername,
      password: configs.watsonpassword,
      version: '2018-04-05',
      url:
        'https://gateway.watsonplatform.net/natural-language-understanding/api/'
    });
    // let myDate = new Date();
    // console.log(myDate.getSeconds(), myDate.getMilliseconds());
    return new Promise((res, reject) => {
      nlu.analyze(
        {
          html: tweet,
          features: {
            emotion: {},
            categories: {},
            sentiment: {}
          }
        },
        function(err, response) {
          if (err) {
            console.log('error:', err);
            reject(err);
          } else {
            // console.log(JSON.stringify(response, null, 2));
            // let myDate2 = new Date();
            // console.log(myDate2.getSeconds(), myDate2.getMilliseconds());
            res(response);
          }
        }
      );
    });
  },

  getMovies() {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/now_playing?api_key=${
            configs.tmdbkey
          }&language=en-US&page=1`
        )
        .then(result => resolve(result))
        .catch(err => reject(err));
    });
  },

  getMovie(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${
            configs.tmdbkey
          }&language=en-US`
        )
        .then(result => {
          console.log(result);
          const movieObj = {
            title: result.data.title,
            popularity: result.data.popularity,
            adult: result.data.adult,
            runtime: result.data.runtime,
            releaseDate: result.data.release_date,
            description: result.data.overview
          };

          resolve(movieObj);
        })
        .catch(err => reject(err));
    });
  }
};

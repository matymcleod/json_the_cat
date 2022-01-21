const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, response, body) => {
  
    const data = JSON.parse(body);
    console.log('data :: ', data );
    
    if (data.length === 0) {
      callback('No input detected :: ', null);
      return;
    }

    if (err) {
      console.log('API error :: ', err.message);
      return;
    }

    callback(null, data[0].description);
    
  });
};

module.exports = fetchBreedDescription;
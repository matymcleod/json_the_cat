const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];
fetchBreedDescription(breedName, (err, description) => {
  if (err) {
    console.log('Problem with: ', err);
  } else {
    console.log(description);
  }
});
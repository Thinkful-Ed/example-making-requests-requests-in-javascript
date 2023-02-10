const axios = require("axios");

const url = "http://localhost:5001/constellations";
axios
  .get(url)
  .then((response) => {
    const result = response.data.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

axios
  .post(url, {
    name: "Ara",
    meaning: "Altar",
    starsWithPlanets: 7,
    quadrant: "SQ3",
  })
  .then((response) => {
    console.log(response.data);
  });

// Since the ID for the newly created constellation
// is randomly generated, yours will look different from
// what is shown here.
const idToDelete = "ctvVRjy";
axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`); // should return a 404 error, since the constellation was deleted in the previous API call

const fetch = require("node-fetch");

const url = "http://localhost:5000/constellations";

fetch(url)
  .then((response) => {
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.body);
    return response.json();
  })
  .then((response) => {
    const result = response.filter((constellation) => {
      return constellation.starsWithPlanets < 10;
    });
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

const body = {
  name: "Ara",
  meaning: "Altar",
  starsWithPlanets: 7,
  quadrant: "SQ3",
};

fetch(url, {
  method: "POST",
  body: JSON.stringify(body),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error.message);
  });

// Since the ID for the newly created constellation
// is randomly generated, the ID that you will use will look
// different from what is shown here.
const idToDelete = "ETRy5Vl";
fetch(`${url}/${idToDelete}`, {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error.message);
  });

fetch(`${url}/${idToDelete}`) // should return a 404 error, since the constellation was deleted in the previous API call
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((error) => {
    console.log(error.message);
  });

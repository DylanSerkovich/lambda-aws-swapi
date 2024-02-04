const apiToLambda = require("../mapper/vehicleMapper");

const URL = "https://swapi.dev/api/";

const findVehicleById = async (id) => {
    const vehicle = await request(`${URL}vehicles/${id}`);
    return apiToLambda.apiToLambda(vehicle);
}

async function request(url) {
    return fetch(url)
      .then(function (res) {
        return res.json();
      })
      .catch(function (err) {
        console.log(err);
      });
  }

module.exports = {
    findVehicleById,
}
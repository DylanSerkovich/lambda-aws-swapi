const findVehicleById = require("./repository/swAPI")

const getVehicle = async(event) => {
    const {id} = event.pathParameters;

    return {
        status: 200,
        body: await findVehicleById.findVehicleById(id),
    }
}

module.exports = {
    getVehicle,
}
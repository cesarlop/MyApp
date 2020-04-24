const { getAllRides, getOneRide } = require('../../services/RideServise');

const getRides = async () => {
    const riders = await getAllRides();
    return riders;
};

const getRideById = async (_,{ id }) => {
    const ride = await getOneRide(id);
    return ride;
};


module.exports = {
    getRides,
    getRideById,
};
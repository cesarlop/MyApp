const { getAllRides } = require('../../services/RideServise');

const getRides = async () => {
    const riders = await getAllRides();
    return riders;
};


module.exports = {
    getRides,
};
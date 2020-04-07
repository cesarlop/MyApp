const Rides = require('../models/Rides');

const getAllRides = () => Rides.find({ is_active: true });

module.exports = {
    getAllRides,
};
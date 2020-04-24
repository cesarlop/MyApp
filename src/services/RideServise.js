const Rides = require('../models/Rides');

const getAllRides = () => Rides.find({ is_active: true });
const getOneRide  = (id) => Rides.findById({ _id:id, is_active:true });

/*
 * before to create a ride check if you have one already create by day
 */
const createOneRide = (data) => Rides.create(data);

const updateOneRide = (id, data) => Rides.findByIdAndUpdate( 
    { _id: id, is_active:true} , { ...data }, 
    {new : true, useFindAndModify : false});

const deleteOneRide = (id) => Rides.findByIdAndUpdate( 
    { _id:id, is_active:true }, 
    { is_active:false }, 
    { new : true, useFindAndModify : false });

module.exports = {
    getAllRides,
    createOneRide,
    updateOneRide,
    getOneRide,
    deleteOneRide,
};
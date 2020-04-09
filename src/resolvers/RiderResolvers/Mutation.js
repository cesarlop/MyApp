const { createOneRide, updateOneRide } = require('../../services/RideServise');
const { getOneUserById } = require('../../services/UserServise');


const createRide = async (_, { idUser,data }) => {
    const ride = await createOneRide(data);
    if (ride){
        const user = await getOneUserById(idUser);
        user.ride_created.push(ride._id);
        user.save(); 
    }
    return ride;
};

const updateRide = async(_, { id, data }) => {
    const ride = await updateOneRide(id, data);
    return ride;
};


module.exports = {
    createRide,
    updateRide,
};
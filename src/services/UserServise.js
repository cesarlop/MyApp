const Users = require('../models/Users');

const getAllUsers = () => Users.find({is_active: true});

const getOneUserById  = (id) => Users.findById({_id:id});

const createOneUser = (data) => Users.create(data);

const updateOneUser = (id,data) => Users.findByIdAndUpdate({ _id:id, is_active:true }, 
    { ...data }, {new : true, useFindAndModify : false});

const deleteOneUser = (id) => Users.findByIdAndUpdate({ _id:id, is_active:true },
    { is_active: false }, {new : true, useFindAndModify : false});
    
module.exports = {
    getAllUsers,
    getOneUserById,
    createOneUser,
    updateOneUser,
    deleteOneUser,
};
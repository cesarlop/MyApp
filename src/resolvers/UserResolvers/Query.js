const { getAllUsers, getOneUserById } = require('../../services/UserServise');

const getUsers = async () => {
    const users = await getAllUsers();
    return users;
};

const getUserById = async (_,{ id }) => {
    const user = await getOneUserById(id);
    return user;
};

module.exports = {
    getUsers,
    getUserById,
};
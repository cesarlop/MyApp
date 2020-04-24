const { getAllUsers, getOneUserById, getOneUserByEmail } = require('../../services/UserServise');

const getUsers = async () => {
    const users = await getAllUsers();
    return users;
};

const getUserById = async (_,{ id }) => {
    const user = await getOneUserById(id);
    return user;
};

const getUserByEmail = async (_,{ email }) => {
    const user = await getOneUserByEmail(email);
    return user;
};

module.exports = {
    getUsers,
    getUserById,
    getUserByEmail,
};
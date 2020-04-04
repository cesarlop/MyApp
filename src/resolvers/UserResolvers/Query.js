const { getAllUsers } = require('../../services/UserServise');

const getUsers = async () => {
    const users = await getAllUsers();
    return users;
};

module.exports = {
    getUsers,
};
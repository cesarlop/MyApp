const { createOneUser, updateOneUser, deleteOneUser } = require('../../services/UserServise');

const createUser = async (_, {data}) => {
    const user = await createOneUser(data);
    return user;
};

const updateUser = async (_,{ id,data }) => {
    const user = await updateOneUser(id,data);
    return user;
};

const deleteUser = async(_,{ id }) => {
    const user = await deleteOneUser(id);
    return user;
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
};
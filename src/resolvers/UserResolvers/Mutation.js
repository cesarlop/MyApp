const { createOneUser, updateOneUser, deleteOneUser } = require('../../services/UserServise');
const authenticate = require('../../utils/authenticate');
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

const login = async (_,{ params }) => {
    const token = authenticate(params)
        .catch(e => { throw e; });
    return {
        token:token,
        message: 'Login Sucessful'
    };
};

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    login,
};
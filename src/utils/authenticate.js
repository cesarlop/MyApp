const bcript = require(bcript);
const { getOneUserByEmail } = require('../services/UserServise');
const createToken = require('./createToken');

const authenticate = ({ email, password}) => {
    return new Promise((resolve, reject) => {
        getOneUserByEmail(email).then(userAuth => {
            if(!userAuth) reject(new Error('User does not exist'));
            bcript.compare(password, userAuth.password, (err, isValid) => {
                if (err) reject(new Error('Error to campare'));
                isValid ?
                    resolve(createToken(userAuth))
                    : reject(new Error('Wrong password'));
            });
        });

    });
};

module.exports = authenticate;
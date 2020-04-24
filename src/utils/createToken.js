const jwt = require('jsonwebtoken');

/**
 * header
 * payload SHOULD NOT CONTAINS PERSONAL DATA
 * signature
 */

const createToken = ({ email, first_name }) => {
    const payload = {
        email,
        first_name,
    };
    return jwt.sign(payload, process.env.SECRET_KEY_JWT,{expiresIn:'1d'});
};

module.exports = createToken;
const jwt = require('jsonwebtoken');

const { jwt_secret, jwt_refresh } = require('../config/config');

module.exports = async data => {
    const access_token = jwt.sign(data, jwt_secret, {expiresIn: '3m'});
    const refresh_token = jwt.sign({}, jwt_refresh, {expiresIn: '1d'});

    return {
        access_token,
        refresh_token
    }
};
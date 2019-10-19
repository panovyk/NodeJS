const { tokenVerify } = require('../../helpers');

module.exports = (req, res, next) => {

    try {
        const token = req.get('Authorization');

        if(!token) {
            throw new Error('User without token')
        }

        const  userWithToken = tokenVerify(token);

        req.user = userWithToken;
        next()
    }
    catch (e) {
        res.status(400).json(e.message)
    }
};
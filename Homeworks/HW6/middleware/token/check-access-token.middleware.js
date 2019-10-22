const { tokenVerify } = require('../../helpers');

module.exports = (req, res, next) => {
    try {
        const token = req.get('Authorization');

        if (!token) {
            throw new Error('User without token')
        }

        const userIdFromToken = tokenVerify(token);

        req.user = userIdFromToken;
        next()
    } catch (e) {
        res.status(403).json(e.message)
    }
};

const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;
        const query = `SELECT * FROM user WHERE id = ${userID}`;
        const isUserPresented = await provider().query(query);

        if (!isUserPresented.length) {
            throw new Error(`User with ${userID} is not presented`)
        }

        req.user = isUserPresented;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
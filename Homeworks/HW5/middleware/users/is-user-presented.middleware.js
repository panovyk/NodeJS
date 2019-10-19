const { userService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;

        const userById = await userService.getUserById(userID);

        if (!userById) {
            throw new Error(`User with ID ${userID} is unknown`)
        }

        req.user = userById;

        next();
    } catch (e) {
        res.status(404).json(e.message)
    }
};
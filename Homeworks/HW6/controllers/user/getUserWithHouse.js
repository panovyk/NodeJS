const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const { userID } = req.params;

        const user = await userService.getUserWithHouse(userID);

        res.json(user);
    } catch (e) {
        res.status(400).json(e.message);
    }
};

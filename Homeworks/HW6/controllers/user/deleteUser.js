const { userService } = require('../../service');
const { compareIdValidator } = require('../../validators');

module.exports = async (req, res) => {
    try {
        const { userID } = req.params;
        const { id: userFromToken } = req.user;

        compareIdValidator(userID, userFromToken);

        await userService.deleteUser(userID);

        return res.json('Ok');
    } catch (e) {
        return res.status(400).end();
    }
};
const {userService} = require('../../service')

module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body;
        const { userID } = req.params;

        await userService.updateUser(userToUpdate, userID);

        res.json('Updated')
    } catch (e) {
        res.status(400).json(e.message)
    }
};

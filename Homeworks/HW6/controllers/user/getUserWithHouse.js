const { userService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await userService.getUserWithHouse(id);

        res.json(user);
    } catch (e) {
        res.json(e.message);
    }
};
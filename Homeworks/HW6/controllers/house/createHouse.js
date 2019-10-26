const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const newHouse = req.body;
        const {id} = req.user;

        Object.assign(newHouse, {userID: id});

        await houseService.createHouse(newHouse);

        res.json(newHouse);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const newHouse = req.body;
        const {id} = req.user;

        Object.assign(newHouse, {userID: id});
        await houseService.createHouse(houseToCreate);

        res.json(newHouse);
    } catch (e) {
        res.json(e.message)
    }
};
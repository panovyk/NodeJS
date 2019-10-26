const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body;
        const { houseID } = req.params;
        await houseService.updateHouse(houseToUpdate, houseID);

        res.json('Updated')
    } catch (e) {
        res.status(400).json(e.message)
    }
};
const { houseService } = require('../../service');

module.exports = async (req, res) => {
    try {
        const houseToUpdate = req.body;
        const { houseID } = req.params;
        const HouseModel = houseService.getModel('House');

        await HouseModel.update(houseToUpdate, {
            where: {
                id: houseID
            }
        });

        res.json('Updated')
    } catch (e) {
        res.json(e.message)
    }
};
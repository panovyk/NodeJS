const { houseService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {houseId} = req.params;

        const houseById = await houseService.getHouseById(houseId);

        if (!houseById) {
            throw new Error(`House with ID ${houseId} is not present`);
        }

        req.house = houseById;

        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};

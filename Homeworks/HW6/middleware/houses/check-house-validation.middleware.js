const { houseService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {city, street} = req.body;
        const HouseModel = houseService.getModel('House');
        const foundHouse = await HouseModel.findAll({
            where: {
                city, street
            },
        });

        if(!foundHouse.length){
            throw new Error('Cant find any houses')
        }

        req.houses = foundHouse;
        next()
    }catch (e) {
        res.status(404).json(e.message);
    }
};
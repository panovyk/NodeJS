const { houseService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {city, street} = req.body;

        const foundHouse = await houseService.getHouseByParams({city, street});

        if(!foundHouse.length){
            throw new Error('Cant find any houses')
        }

        req.houses = foundHouse;
        next()
    }catch (e) {
        res.status(404).json(e.message);
    }
};

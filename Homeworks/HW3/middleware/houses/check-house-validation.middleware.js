const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {city, street} = req.body;
        const HouseModel = dataBase.getModel('House');
        const findingHouses = await HouseModel.findAll({
            where: {
                city, street
            },
        });

        if(!findingHouses.length){
            throw new Error('Cant find any houses')
        }

        req.houses = findingHouses;
        next()
    }catch (e) {
        res.status(404).json(e.message);
    }
};
const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const newHouse = req.body;
        const HouseModel = dataBase.getModel('House');

        await HouseModel.create(newHouse);

        res.json('House created');
    }catch (e) {
        res.json(e.message)
    }
};
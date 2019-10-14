const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res, next) => {
    try {
        const {userID} = req.params;
        const HouseModel = dataBase.getModel('User');
        const foundHouse = await HouseModel.findByPk(userID);

        if (!foundHouse){
            throw new Error(`House:${userID} is not presented`)
        }

        req.user = foundHouse;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
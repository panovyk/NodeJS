const dataBase = require('../../dataBase').getInstance();

module.exports = async (updateObject, houseID) => {
    const HouseModel = dataBase.getModel('House');

    await HouseModel.update(updateObject, {
        where: {
            id: houseID
        }
    })
};
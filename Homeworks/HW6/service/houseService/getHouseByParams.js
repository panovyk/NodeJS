const dataBase = require('../../dataBase').getInstance();

module.exports = findObject => {
    const HouseModel = dataBase.getModel('House');

    return HouseModel.findAll({
        where: findObject
    });
};

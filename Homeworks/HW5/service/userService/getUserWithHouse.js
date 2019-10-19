const dataBase = require('../../dataBase').getInstance();
const getUserById = require('./getUserById');

module.exports = async id => {
    const HouseModel = dataBase.getModel('House');
    const UserModel = dataBase.getModel('User');

    const house = await HouseModel.findAll({
        where: {
            id
        }
    });

    const user = await UserModel.findByPk(id);

    user.dataValues.houses = house;

    return user && user.dataValues;
};
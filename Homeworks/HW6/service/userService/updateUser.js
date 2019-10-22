const dataBase = require('../../dataBase');

module.exports = async (id) => {
    const UserModel = dataBase.getModel('User');
    const user = await UserModel.findByPk(id);

    return user && user.dataValues;
};
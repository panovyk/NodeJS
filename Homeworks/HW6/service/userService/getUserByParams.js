const dataBase = require('../../dataBase').getInstance();

module.exports = async findObject => {
    const UserModel = dataBase.getModel('User');

    const user =  UserModel.findOne({
        where: findObject
    });

    return user && user.dataValues;
};

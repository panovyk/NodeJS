const dataBase = require('../../dataBase');

module.exports = async (updateObject, id) => {
    const UserModel = dataBase.getModel('User');

    return  UserModel.update(updateObject, {
        where: {
            id
        }
    })
};

const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const newUser = req.body;
        const UserModel = dataBase.getModel('User');

        await UserModel.create(newUser);

        res.json('User created');
    }catch (e) {
        res.json(e.message)
    }
};
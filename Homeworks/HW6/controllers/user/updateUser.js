const dataBase = require('../../dataBase').getInstance();

module.exports = async (req, res) => {
    try {
        const userToUpdate = req.body;
        const { userID } = req.params;
        const UserModel = dataBase.getModel('User');

        await UserModel.update(userToUpdate, {
            where: {
                id: userID
            }
        });

            res.json('Updated')
    } catch (e) {
        res.json(e.message)
    }
};
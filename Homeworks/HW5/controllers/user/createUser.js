const { userService } = require('../../service');
module.exports = async (req, res) => {
    try {
        const newUser = req.body;

        await userService.createUser(newUser);

        res.json('User created');
    }catch (e) {
        res.json(e.message)
    }
};
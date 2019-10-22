const { userService } = require('../../service');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        const foundUser = await userService.getUserByParams({email, password});

        if (!foundUser) {
            throw new Error('Incorrect email or password')
        }

        req.user = foundUser;
        next()
    } catch (e) {
        res.status(400).json(e.message);
    }
};

const { userService } = require('../../service');

module.exports = async (req, res, next) => {
    try { const {email, password} = req.body;
        const UserModel = userService.getModel('User');

        const foundUser = await UserModel.findOne({
            where: {
                email, password
            },
            attributes:['id']
        });

        if(!foundUser){
            throw new Error('Incorrect email or password')
        }

        req.user = foundUser.dataValues;
        next()

    }  catch (e) {
        res.status(400).json(e.message);
    }
};
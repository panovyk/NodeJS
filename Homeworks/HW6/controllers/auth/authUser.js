const { tokenCreate } = require('../../helpers');

module.exports = (req, res) => {
    try {
        const user = req.user;
        const tokens = tokenCreate(user);

        res.json(tokens);
    } catch (e) {
        res.status(400).json(e.message)
    }
};
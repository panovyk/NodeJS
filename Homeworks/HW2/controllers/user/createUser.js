const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {email, name, password} = req.body;
        const query = (`INSERT INTO user (email, name, password) VALUES (?, ?, ?)`);

        await provider().query(query, [email, name, password]);

        res.render('login');
    }catch (e) {
        res.json(e.message)
    }
};
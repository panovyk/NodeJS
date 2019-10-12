const { provider } = require('../../dataBase');

module.exports = async (req, res) => {
    try {
        const {city, street, price} = req.body;
        const query = (`INSERT INTO house (city, street, price) VALUES (?, ?, ?)`);

        await provider().query(query, [city, street, price]);

        res.render('Ok');
    } catch (e) {
        res.json(e.message)
    }
};
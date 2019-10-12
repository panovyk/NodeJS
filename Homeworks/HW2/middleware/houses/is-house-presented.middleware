const { provider } = require('../../dataBase');

module.exports = async (req, res, next) => {
    try {
        const {houseID} = req.params;
        const query = `SELECT * FROM user WHERE id = ${houseID}`;
        const isHousePresented = await provider().query(query);

        if (!isHousePresented) {
            throw new Error(`House with ${houseID} is not presented`)
        }

        req.house = isHousePresented;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
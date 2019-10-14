const router = require('express').Router();

const { house } = require('../../controllers');
const { house: houseMiddleware } = require('../../middleware');

//just to be shure
router.get ('/check123', (req, res) => {
    res.json('ALL GOOD 456')
});
router.post('/', houseMiddleware.checkHouseValidation, house.createHouse);
router.get('/:houseID', houseMiddleware.isHousePresentedMiddleware, house.getHouseById);

module.exports = router;
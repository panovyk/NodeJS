const router = require('express').Router();

const { house } = require('../../controllers');
const { house: houseMiddleware } = require('../../middleware');

router.post('/', houseMiddleware.checkHouseValidation, house.createHouse);
router.get('/:houseID', houseMiddleware.isHousePresentedMiddleware, house.getHouseById);
router.put('/:houseID', houseMiddleware.isHousePresentedMiddleware, house.updateHouse);

module.exports = router;
const router = require('express').Router();

const { user: userMiddleware } = require('../../middleware');
const { auth } = require('../../controllers');

router.post('/', auth.authUser, userMiddleware.checkUserLoginValidationMiddleware);

module.exports = router;
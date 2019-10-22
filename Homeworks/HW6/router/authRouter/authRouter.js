const router = require('express').Router();

const { user: userMiddleware } = require('../../middleware');
const { auth } = require('../../controllers');

router.post('/', userMiddleware.checkUserLoginValidationMiddleware, auth.authUser);

module.exports = router;

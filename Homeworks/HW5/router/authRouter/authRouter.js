const router = require('express').Router();

const { user: Middleware } = require('../../middleware');
const { auth } = require('../../controllers');

router.post('/', auth.authUser, Middleware.checkUserLoginValidationMiddleware);

module.exports = router;

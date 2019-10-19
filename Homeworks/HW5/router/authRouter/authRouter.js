const authRouter = require('express').Router();

const { user: Middleware } = require('../../middleware');
const { auth } = require('../../controllers');

authRouter.post('/', auth.authUser, Middleware.checkUserLoginValidationMiddleware);

module.exports = authRouter;
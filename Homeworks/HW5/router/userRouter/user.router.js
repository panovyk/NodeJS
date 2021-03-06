const router = require('express').Router();

const { user } = require('../../controllers');
const { user: userMiddleware, token } = require('../../middleware');

router.post('/', userMiddleware.checkUserValidationMiddleware, user.createUser);
router.get('/:userID', userMiddleware.isUserPresentedMiddleware, user.getUserById);
router.patch('/:userID', token.CheckAccessTokenMiddleware, user.updateUser);
router.delete('/:userID', token.CheckAccessTokenMiddleware, user.deleteUser);

module.exports = router;
const router = require('express').Router();

const { user } = require('../../controllers');
const { user: userMiddleware } = require('../../middleware');

router.post('/', userMiddleware.checkUserValidationMiddleware, user.createUser);
router.get('/:userID', userMiddleware.isUserPresentedMiddleware, user.getUserById);
router.patch('/:user_id', userMiddleware.isUserPresentedMiddleware, user.updateUser);



module.exports = router;
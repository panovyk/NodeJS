const router = require('express').Router();

const { user } = require('../../controllers');
const { user: userMiddleware } = require('../../middleware');

//just to be shure
router.get ('/check123', (req, res) => {
    res.json('ALL GOOD 456')
});

router.post('/', userMiddleware.checkUserValidationMiddleware, user.createUser);
router.get('/:userID', userMiddleware.isUserPresentedMiddleware, user.getUserById);



module.exports = router;
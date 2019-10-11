module.exports = (req, res, next) => {
    try {
        const{userID} = req.params;

        const isUserPresented = users.find(user => user.id === + userID);

        if (!isUserPresented) {
            throw new Error(`User with ${userID} is not presented`)
        }

        req.user = isUserPresented;
        next();
    } catch (e) {
        res.status(400).json(e.message)
    }
};
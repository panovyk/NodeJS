module.exports= (req, res) => {
    try {
        const { userID } = req.user;

        res.redirect(`users/${ userID }`);
    }catch (e) {
        res.json(e.message)
    }
};
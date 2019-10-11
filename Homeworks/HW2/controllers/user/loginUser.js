module.exports = (req, res) => {
    console.log(req.body);
    console.log(req.body.login);
    console.log(req.body.password);

    res.render('login.hbs')
};
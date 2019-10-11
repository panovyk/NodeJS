module.exports = (req, res) => {
    const body = req.body;
    const users = [];

    body.user_id = users.length + 1;
    users.push(body);
    console.log(body);

    res.render('register.hbs')
};
module.exports =  (req, res) => {
    const body = req.body;
    const houses = [];

    body.house_id = houses.length + 1;
    houses.push(body);
    console.log(body);

    res.render('newHouse.hbs')
};
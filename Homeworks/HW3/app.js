const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');

const app = express();

const dataBase = require('./dataBase').getInstance();
dataBase.setModels();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'static')));

app.engine('.hbs', expHbs({
    extname: '.hbs',
    defaultLayout: null
}));

//MODULE
const {user, house, navigation} = require('./controllers');
const {user: userMiddleware, house: houseMiddleware} = require('./middleware');
const { userRouter, houseRouter } = require('./router');

//USER
app.use('/users', userRouter);
app.post('/auth/users',userMiddleware.checkUserLoginValidationMiddleware, user.loginUser);

//HOUSE
app.use('/houses', houseRouter);

//MAIN PAGE NAVIGATION
app.get('/', navigation.mainPage);
app.get('/auth', navigation.loginPage);
app.get('/register', navigation.registrationPage);
app.get('/newHouse', navigation.newHousePage);

//UNKNOWN PAGES
app.all('*', navigation.unknownPage);

//CONNECTION TO HOST
app.listen(3030, () => {
    console.log('Connected');
});
const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');

const app = express();

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
const { provider } = require('./dataBase');

//USER
app.post('/register', userMiddleware.checkUserValidationMiddleware, user.createUser);
app.post('/auth/users',userMiddleware.checkUserLoginValidationMiddleware, user.loginUser);
app.get('/users/:userID', userMiddleware.isUserPresentedMiddleware, user.getUserById);

//HOUSE
app.post('/', userMiddleware.checkUserValidationMiddleware, house.createHouse);
app.get('/houses/:houseID', houseMiddleware.isHousePresentedMiddleware, house.getHouseById);

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
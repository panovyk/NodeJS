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
const { navigation } = require('./controllers');
const { userRouter, houseRouter, authRouter } = require('./router');

//USE
app.use('/users', userRouter);
app.use('/houses', houseRouter);
app.use('/auth', authRouter);

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
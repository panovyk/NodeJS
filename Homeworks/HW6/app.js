const express = require('express');
const path = require('path');
const expHbs = require('express-handlebars');

const app = express();

const http = require('http').createServer(app);

const io = require('socket.io')(http);

io.on('connection', socket => {
    socket.on('joinRoom', data => {
        socket.join(data.room_id);

        console.log('Connected User', data);
    });

    socket.on('MessageToRoom', data=> {
        io.to(data.room_id).emit('chat', {message: data.message});
    })
});

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
app.get('/support', navigation.supportPage);
app.get('/', navigation.mainPage);
app.get('/auth', navigation.loginPage);
app.get('/register', navigation.registrationPage);
app.get('/newHouse', navigation.newHousePage);

//UNKNOWN PAGES
app.all('*', navigation.unknownPage);

//CONNECTION TO HOST
http.listen(3030, () => {
    console.log('Connected');
});
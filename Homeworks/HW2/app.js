const express = require('express');

const app = express();

app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended: true}));


const users = [];

app.get('/login', (req, res)=>{
    res.render('login.hbs')
});

app.get('/register', (req, res)=>{
    res.render('register.hbs')
});

app.get('/newHouse', (req, res)=>{
    res.render('newHouse.hbs')
});

app.get('/', (req, res)=>{
   res.end ('This is Main Page')
});


app.listen (3030, ()=>{
    console.log('Connected');
});


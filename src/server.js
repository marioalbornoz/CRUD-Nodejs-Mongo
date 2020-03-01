const express = require('express');
const path = require('path');

// initializations

const app = express();

// Setting 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({extended:false}));

// Global Variables

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
})

// Static Files



module.exports = app;
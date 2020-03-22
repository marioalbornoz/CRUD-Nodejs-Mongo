const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// initializations

const app = express();

// Setting 
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layout'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}))

app.set('view engine','.hbs');

// Middlewares
app.use(express.urlencoded({extended:false}));

// Global Variables

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
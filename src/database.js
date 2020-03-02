const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:notes-app'
mongoose.connect(mongoURI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is conected'))
    .catch(err => console.log(err));
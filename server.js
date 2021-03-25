//Declarations
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const db = mongoose.connection;
require('dotenv').config();


//Environment Viariables
const mongoDB=process.env.MONGO_URI;
const PORT = process.env.PORT;

//Connection to Mongoose
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}, () => {
    console.log('MongoDB connction establish:', mongoDB);
});
db.on('error', (err)=> console.log(err.message + 'is Mongod not running?'));
db.on('disconnected', ()=> console.log('mongo disconnected'));

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client', 'build')));


//Controller Routes
const bookmarkControllers = require('./controllers/bookmark.js');

//Routes
app.use('/bookmark', bookmarkControllers);

app.get('*', (req, res) => {
    res.status(404).json('Page not found');
});


app.listen(PORT, ()=> {
    console.log('App is listening on:', PORT);
})
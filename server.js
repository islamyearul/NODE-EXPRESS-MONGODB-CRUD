
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const path = require('path');
 
const connectDB = require('./server/database/connection');



const app = express();
dotenv.config({ path: './config.env' });
const port =process.env.PORT || 4000;

//log requests
app.use(morgan('tiny'));

// Mongo db connection
 connectDB();

//pass request to body-parser
app.use(bodyParser.urlencoded({ extended: true }));

//set view engine
app.set("view engine", "ejs");
// app.use(express.static(__dirname + '../public'));
// app.set("views", path.resolve(__dirname, "views/ejs"));
app.set('views', path.resolve(__dirname, 'views'))
// app.set('views', path.join(__dirname,'views'));


//load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")));
app.use('/img', express.static(path.resolve(__dirname, "assets/img")));
app.use('/js', express.static(path.resolve(__dirname, "assets/js")));


// Load Routers
app.use('/', require('./server/routes/route'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

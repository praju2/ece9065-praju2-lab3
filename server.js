/*jshint esversion: 6 */

const express = require('express');
var bodyParser = require('body-parser');
const joi = require('joi');
const mongoose = require('mongoose');
//const expressSanitizer = require('express-sanitizer');
const item = require('./routes/item.route');
const dueDate = require('./routes/dueDate.route');  
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
  level: 'info',
  format: format.timestamp(),
    transports: [
    new transports.File({ filename: 'error.log', level: 'error' }),
    new transports.File({ filename: 'combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new transports.Console({
    format: format.simple()
  }));
}

const app = express();

logger.info("hey");
// Set up mongoose connection
let dev_db_url = 'mongodb://library_user:uwo123$@localhost:27017/ECE9065_PRAJU2_LAB3';
const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(mongoDB).catch(error => logger.info(`Error in DB Connection ${error}`));
mongoose.connection.on('error', error => logger.info(`Error in DB Connection ${error}`));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
//app.use(express.json());

app.use('/', express.static(__dirname));//Index file placed in base directory
app.use('/library', item);
app.use('/library/dueDate', dueDate);

const port=process.env.PORT || 8080;
app.listen(port,()=>logger.info(`Listening on port ${port}`)); // start server // set env variable laster



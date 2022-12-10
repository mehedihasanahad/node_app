/*
 * Simple CRUD app
 * Author: Mehedi Hasan Ahad
 * Date: 02-12-22
 */

// All dependencies section
const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');

const upload = multer();
const webRouter = require('./router/web');
const apiRouter = require('./router/api');

require('dotenv').config();

const app = express();
const api = express();

app.use(express.static('public')); // use public folder for all static files
app.set('view engine', 'ejs'); // set ejs as template engine
app.use(upload.array()); // form-data receiver
app.use(cookieParser()); // handle request cookies

app.use('/api', api); // set api as sub app
app.use('/', webRouter); // web router
api.use('/', apiRouter); // api router

app.listen(process.env.port); // run the app at defined port

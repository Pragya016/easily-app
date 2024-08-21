import dotenv from 'dotenv';
// config env file
dotenv.config();

import express from 'express';
import path from 'path';
import session from 'express-session';
import expressEjsLayouts from 'express-ejs-layouts';
import cookieParser from 'cookie-parser';
import { displayError } from './src/controllers/errorController.js';
import userRoutes from './src/routes/user.routes.js';
import { Auth } from './src/middlewares/authMiddleware.js';
import {connectToMongoDB} from './config/mongodbConfig.js';
import jobRoutes from './src/routes/job.routes.js';
import {LandingPageController} from './src/controllers/landingPageController.js'

const app = express();

// config env file
dotenv.config();

// setup session
app.use(session({
    secret: 'secret-key',
    saveUninitialized: false,
    resave: true,
    cookie: {
        secure: false
    }
}))

const auth = new Auth()

// setup cookie parser
app.use(cookieParser())

// set up body data parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// setup view engine
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve() + '/src' + '/views'));

// set isLoggedIn conditionally so that it may update navbar links conditionally
app.use((req, res, next) => {
    // if (req.session && req.session.email) {
    if (req.cookies && req.cookies.userEmail) {
        if (req.cookies.username) {
            res.locals.username = req.cookies.username;
        }

        res.locals.isLoggedIn = true;
    } else {
        res.locals.isLoggedIn = false;
    }
    next();
});

// using ejs layout
app.use(expressEjsLayouts);
app.use(express.static('src/views'));
app.use(express.static('public'));


const landingPageController = new LandingPageController();

// Application Routes
app.get('/', landingPageController.displayLandingPage);
app.use('/', userRoutes);
app.use('/jobs', jobRoutes);

// render error page
app.get('*', displayError);

// create a server
app.listen(process.env.PORT, () => {
    connectToMongoDB()
    console.log('server is listening at 5500.');
});
// Dependencies
const CF = require('../helpers/commonFunction'); // common function

// Web routers out of middleware
const excepts = ['/login'];

module.exports = (router) => {
    router.use((req, res, next) => {
        if (
            req.originalUrl.split('/')[1] === 'api' ||
            CF.inArray(req.originalUrl, excepts) ||
            req.cookies.Authorization
        ) {
            next();
        } else {
            res.redirect('/login');
        }
    });
};

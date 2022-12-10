// Dependencies
const CF = require('../helpers/commonFunction'); // common function

// API routes out of middleware
const excepts = ['/api/auth', '/api/auth?name=ahad'];

module.exports = (router) => {
    router.use((req, res, next) => {
        if (CF.inArray(req.originalUrl, excepts) || req.cookies.Authorization) {
            next();
        } else {
            res.end('Unauthorized');
        }
    });
};

const routes = require('express').Router();
const lesson01Controller = (require('../controllers/lesson01'));
 
routes.get('/', lesson01Controller.alexanderRoute);


routes.get('/nancy', lesson01Controller.nancyRoute);

module.exports = routes;

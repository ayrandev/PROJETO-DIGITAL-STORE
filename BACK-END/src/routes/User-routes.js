const privateRoutes = require('./private-routes');
const publicRoutes = require('./public-routes');

const AllUserContoller = require('../controllers/User/AllUserController')
const CreateUserController = require('../controllers/User/CreateUserController')
const encriptPassword = require('../middleware/encript-password')
const CreateTokenController = require('../controllers/User/CreateTokenController')


publicRoutes.get('/users', AllUserContoller);
publicRoutes.post('/users', encriptPassword, CreateUserController);
publicRoutes.post('/users/token', CreateTokenController)

module.exports = [publicRoutes, privateRoutes];
const privateRoutes = require('./private-routes')
const publicRoutes = require('./public-routes')


const AllProductsController = require('../controllers/Products/AllProductsController')
const CreateController = require('../controllers/Products/CreateController')
const UpdateController = require('../controllers/Products/UpdateController')
const DeleteController = require('../controllers/Products/DeleteController')
const GetBySlug = require('../controllers/Products/GetBySlug')
const ListingImageController = require('../controllers/Products/ListingImageController')
const CreateImageController = require('../controllers/Products/CreateImageController')
const UpdateImagesController = require('../controllers/Products/UpdateImagesController')

publicRoutes.get('/products', AllProductsController);
publicRoutes.get('/products', GetBySlug);
privateRoutes.post('/products', CreateController);
privateRoutes.put('/products/:id', UpdateController);
privateRoutes.delete('/products/:id', DeleteController);
publicRoutes.get('/products/:id/images', ListingImageController);
privateRoutes.post('/products/:id/images', CreateImageController);
privateRoutes.put('/products/:id/images/:imageId', UpdateImagesController);

module.exports = [publicRoutes, privateRoutes];
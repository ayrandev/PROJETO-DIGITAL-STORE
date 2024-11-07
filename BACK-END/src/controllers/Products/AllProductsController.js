const ProductModel = require('../../models/ProductModel')
const ProductImageModel = require('../../models/ProductImageModel');


module.exports = async (resquest, response) => {
    let products = await ProductModel.findAll({
        include: {
            attributes: ['id', 'url', 'path'],
            model: ProductImageModel,
            as: 'images'
        }
    });
    return response.json(products);
}


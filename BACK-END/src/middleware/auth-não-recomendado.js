const UserModel = require('../models/UsersModel')

module.exports = async (request, response, next) => {
    let email = request.headers.email;
    let password = request.headers.password;

    let user = await UserModel.findOne({
        where: {
            email, password: btoa(password)
        }
    });

    if(!user) {
            return response.json({
            message: "Voce não está autorizado para acessar este recurso"
        });
    }

   next();
}
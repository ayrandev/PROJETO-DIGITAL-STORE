const UserModel = require('../models/UsersModel')
const jwt = require ('jsonwebtoken');

module.exports = async (request, response, next) => {
    let token = request.headers.authorization.replace('Bearer ', '');

    
    try {
        
        if(!token) {
        throw new Error("Token não enviado na requiseção")
        }

        let decoded = jwt.verify(token, process.env.SECRET);
        let user = await UserModel.findByPk(decoded.id);
        if(!user?.id){
            throw new Error("Usuario não encontrado")
        }
        
    } catch(error){
        return response.json({
            message: "Voce não está autorizado para acessar este recurso"
        });
    }

   next();
}
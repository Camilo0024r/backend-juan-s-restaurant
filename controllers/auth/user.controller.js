const userModel = require('../../models/user');

const userController = {
    registerUser: async (req, res) => {
        const {username,password} = req.body;
        try{
            await userModel.createSession(username,password);
            res.send('Usuario registrado exitosamente');
        }catch(error){
            console.log('Hubo un error al registrar el usuario desde el controlador',error);
        }
    }
}

module.exports = {userController};
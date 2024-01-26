const {returnDatabase} = require('../config/dbConfig');

const userModel = {
    createSession: async (username, password) =>{
        try{
            const db = returnDatabase();
            const userCoollection = db.collection('users');
            await userCoollection.insertOne({username, password});
            
        }catch(error){
            console.error('Hubo un error al crear el usuario:', error);
        }
    }
}

module.exports = userModel;

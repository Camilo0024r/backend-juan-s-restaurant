const { MongoClient } = require ('mongodb');

const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);
const dbName = 'RestauranteDonJuanBD';
var dataDB;

//Conexión con la base de datos
async function connectToDB(){
    try{
        await client.connect();
        console.log('Conectado correctamente al servidor de MongoDB');

        dataDB = client.db(dbName);
        const collections = await dataDB.listCollections().toArray();

        if(collections.length > 0) {
            console.log('Conexión a la base de datos exitosa:', dbName);
        } else {
            console.log('La conexión a la base de datos no pudo establecerse:', dbName);
        }
        
    }catch(error){
        console.log('La conexión del servidor no fue exitosa', error);
    }
}

//Devuelve el objeto con la información de la base de datos de mongoDB
function returnDatabase(){
    return dataDB;
}

module.exports = {connectToDB,returnDatabase};
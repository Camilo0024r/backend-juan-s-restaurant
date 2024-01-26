const express = require('express')
const app = express()

// Configura el middleware para analizar JSON y URL-encoded
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Configuración de las plantillas
const configureViews = () => {
 app.set('view engine','ejs');
};

//Correr servidor
const startServer = (port) => {
    app.listen(port, () => {
      console.log(`Servidor corriendo en el puerto ${port}`);
    });
  };

module.exports = {app,configureViews,startServer};
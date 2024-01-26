//Importación sistema y gestión de archivos y directorios
const fs = require('fs');
const path = require ('path');
const express = require('express');

const router = express.Router();

const normalizedPath = path.join(__dirname, '..routes');

/*Automatiza el proceso de importación y montaje de rutas en Express. 
  Lee todos los archivos de una carpeta específica (en este caso, el directorio ../routes), 
  importa cada archivo como una ruta y las monta en un enrutador para ser utilizado en la aplicación principal de Express.*/
fs.readFileSync(normalizedPath).forEach(file => {
    const route = require(`../routes/${file}`);
    router.use(`/${file.split('.')[0]}`, route);
});

module.exports = router;

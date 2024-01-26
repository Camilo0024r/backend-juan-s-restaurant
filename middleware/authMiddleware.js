const express = require('express');
const session = require('express-session');
const app = express();

app.set('trust proxy', 1);

const configureSession = () => {
  app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true } // Ajusta las opciones según tus necesidades
  }));
};

module.exports = {
  configureSession
};

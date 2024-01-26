//Declaración de variables y importación
const routes = require('./routes/routes.js');
const port = 3000;

//Importación de ficheros
const {app,configureViews,startServer} = require('./config/serverConfig.js')
const {connectToDB} = require('./config/dbConfig.js');
const { configureSession } = require('./middleware/authMiddleware.js');
const {userController} = require('./controllers/auth/user.controller.js');

//Conectar a la base de datos
connectToDB();

//Configurar vistas
configureViews();

//Configurar sesiones
configureSession();

//Iniciar servidor
startServer(port);

//Uso de las rutas
app.use('/',routes);
app.post('/login', userController.registerUser);

module.exports = app;
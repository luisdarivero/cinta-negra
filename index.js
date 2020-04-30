require('dotenv').config()
//no es necesario poner index cuando se carga con require
//se obtienen dos variables por "destructuring"
const {server, PORT} = require('./server');
require('./database');

server.listen(PORT, () => console.log('example server listening'));
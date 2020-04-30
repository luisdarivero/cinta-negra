const mongoogse = require('mongoose');

mongoogse.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {console.log('conectado a la base de datos');})
    .catch((err) => {console.log('error al conectarse a la base de datos');})
;
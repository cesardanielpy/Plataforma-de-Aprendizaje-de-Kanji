const express = require('express'); //Importacion del paquete express
const cors = require('cors'); //Importacion de Cors
const bodyParser = require('body-parser')
const app = express(); //Creando Instancia llamada app

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) //Uso de Politica de origenes

require('../server/config/mongoose.config'); //Coneccion a MongoDB

require('../server/routes/kanji.routes')(app);//Incluir Modulo de Rutas
app.listen(8000, () => {console.log("Listening at Port 8000 ")});

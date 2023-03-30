const express = require('express'); //Importacion del paquete express
const app = express(); //Creando Instancia llamada appx
const cors = require('cors'); //Importacion de Cors
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
require('../server/config/mongoose.config'); //Coneccion a MongoDB8



app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()) //Uso de Politica de origenes

app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000',exposedHeaders:['set-cookie']}));
require('../server/routes/kanji.routes')(app);//Incluir Modulo de Rutas
require('../server/routes/usuarios.routes')(app);//
app.listen(8000, () => {console.log("Listening at Port 8000 ")});

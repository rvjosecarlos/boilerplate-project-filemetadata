var express = require('express');
var cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const exFileUpload = require('express-fileupload');

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// app.use para obtener los datos del formulario
app.use( exFileUpload() );

// Manejador de verbos POST
app.post( '/api/fileanalyse', obtenerArchivo );

// Middleware del manejador POST
function obtenerArchivo( req, res ){

  const { name, size, mimetype } = req.files.upfile

  res.json( { name, type: mimetype, size } );

}


const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});

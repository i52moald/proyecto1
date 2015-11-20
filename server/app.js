var express = require("express"),
    app = express(),
    http     = require("http"),
    server   = http.createServer(app),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose'),
    configDB = require('./config/database.js');

//Connection to DB
mongoose.connect(configDB.url, function(err, res) {
    if (err) throw err;
    console.log('Connected to Database.');
});
/*mongoose.connect('mongodb://localhost/clientes', function(err, res) {
    if(err) throw err;
    console.log('Connected to Database.');
});*/

//Midlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

//Import Models and controllers
var models = require('./models/clientes')(app,mongoose);
var ClienteCtrl = require('./controllers/clientes');

//Example Route
var router = express.Router();
router.get('/', function(req, res) {
    res.send("Hello World!");
});

app.use(router);

//API routes
var clientes = express.Router();

clientes.route('/clientes')
    .get(ClienteCtrl.findAllClientes)
    .post(ClienteCtrl.addCliente);

clientes.route('/clientes/:id')
    .get(ClienteCtrl.findById)
    .delete(ClienteCtrl.deleteCliente);

app.use('/api', clientes);

//Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
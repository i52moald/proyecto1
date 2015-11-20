var mongoose = require('mongoose');
var Cliente = mongoose.model('Cliente');

//GET
exports.findAllClientes = function(req,res){
    Cliente.find(function(err, clientes){
        if(err) res.send(500,err.message);

        console.log('GET /clientes')
        //para que devuelva el json de la bbdd
        res.status(200).jsonp(clientes);
    });
};

//GET - Return a Cliente with specified ID
exports.findById = function(req, res) {
	Cliente.findById(req.params.id, function(err, cliente) {
		if(err) return res.send(500, err.message);

		console.log('GET /cliente/' + req.params.id);
		res.status(200).jsonp(cliente);
	});
};


//POST
exports.addCliente = function(req, res){
	console.log('POST');
	console.log(req.body);

	var cliente = new Cliente({
		nombre:    req.body.tittle,
  		edad:      req.body.edad,
  		calle:		req.body.calle,
		dni:		req.body.dni
	});

	cliente.save(function(err, cliente) {
		if(err) return res.send(500, err.message);
	res.status(200).jsonp(cliente);
	});
};

//DELETE
exports.deleteCliente = function(req,res){
    Cliente.findById(req.params.id, function(err, cliente) {
        cliente.remove(function(err) {
            if(err) return res.send(500, err.message);
            res.status(200);
        })
    });
};
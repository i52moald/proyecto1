var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var clienteSchema = new Schema({  
  nombre:    { type: String },
    dni:    { type: String },
  edad:     { type: Number },
  calle:  { type: String }
});

module.exports = mongoose.model('Cliente', clienteSchema);
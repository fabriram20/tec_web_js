/**
 * SaludoController
 *
 * @description :: Server-side logic for managing saludoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    hola: function (req, res) {
    if (req.method == 'GET'){
        
        res.json({
            nombre: 'Hola get'
        });
    }
    
        if (req.method == 'POST'){
        
        res.json({
            nombre: 'Hola post'
        });
    }else{
        res.json({
            nombre: 'Hola todos'
        })
    }
        
    },
    adios: function (req, res) {
        res.send('Adios')
    },
    hora: function (req, res) {
        res.send('Hora')
    }
};
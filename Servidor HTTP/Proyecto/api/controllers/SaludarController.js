/**
 * SaludarController
 *
 * @description :: Server-side logic for managing Saludars
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    hola: function (req, res) {

        var parametros = req.allParams()
        if (req.method == 'GET') {
            res.json({
                nombre: 'Hola get!!!!!!!!!',
                para: parametros
            });
        } else {
            if (req.method == 'POST') {
                res.json({
                    nombre: 'Hola post!!!!!!!'
                });
            } else {
                res.json({
                    nombre: 'Hola todos!!!!!!!!'
                });
            }
        }
    },
    adios: function (req, res) {
        res.send('Adios');
    },
    hora: function (req, res) {
        res.send('Hora');
    }
};
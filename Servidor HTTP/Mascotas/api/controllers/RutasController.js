/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {

        // res.view(String: Nombre Vista, Datos JSON)
        return res.view('vistas/home.ejs', {
            titulo: 'Inicio',
            numero: 1,
            mauricio: {
                nombre: 'Mauricio',
                cedula: 1752146598
            }
        })
    }

};

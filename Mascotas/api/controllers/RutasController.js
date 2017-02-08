/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    home: function (req, res) {

        // res.view(String: Nombre vista, Datos JSON)
        return res.view('vistas/home')

    },
    crearUsuario: function (req, res) {

        return res.view('usuario/crearUsuario')

    },
    error: function (req, res) {

        return res.view('vistas/error', {

            error: {

                descripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
                rawError: "Rutas equivocada",
                url: "/Inicio"
            }
        });

    },
    listarUsuarios: function (req, res) {

        Usuario.find()
            .exec(function (errorIndefinido, usuariosEncontrados) {

                if (errorIndefinido) {
                    res.view('vistas/Error', {
                        error: {
                            desripcion: "Hubo un problema cargando los Usuarios",
                            rawError: errorIndefinido,
                            url: "/ListarUsuarios"
                        }
                    });
                }
            
                res.view('usuario/ListarUsuarios', {
                    usuarios:usuariosEncontrados
                });
            })
    }

};
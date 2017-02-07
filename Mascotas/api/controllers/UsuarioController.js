/**
 * UsuarioController
 *
 * @description :: Server-side logic for managing Usuarios
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */



module.exports = {

    crearUsuario: function (req, res) {
        //   Se accede asi: /Usuario/crearUsuario

        // Guardando todos los parametros en la variable parametros

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {

            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (err, usuarioCreado) {
                    if (err) {

                        return res.view('vistas/error', {

                            err: {

                                descripcion: "Fallo al crear el usuario",
                                rawError: err,
                                url: "/Inicio"
                            }
                        })

                    }
                });
            } else {

                return res.view('vistas/error', {

                    error: {

                        descripcion: "No envia todos los parametros",
                        rawError: "Rutas equivocada",
                        url: "/Inicio"
                    }
                })

            }
            
            return res.view('/Inicio')
            
        } else {


            return res.view('vistas/error', {

                error: {

                    descripcion: "Metodo invalido",
                    rawError: "Rutas equivocada",
                    url: "/Inicio"
                }
            })

        }

    },
    crearUsuarioForm: function (req, res) {

        var parametros = req.allParams();
        console.log(parametros);

        if (req.method == 'POST') {
            if (parametros.nombres && parametros.apellidos) {
                //creo el usuario
                Usuario.create({
                    nombres: parametros.nombres,
                    apellidos: parametros.apellidos,
                    correo: parametros.correo
                }).exec(function (error, usuarioCreado) {

                    if (error) return res.serverError()
                    sails.log.info(usuarioCreado);

                    return res.view('vistas/home', {
                        titulo: 'Inicio',
                        numero: 1,
                        mauricio: {
                            nombre: 'Mauricio',
                            cedula: 1718137159
                        }
                    });
                });




            } else {
                // bad Request
                return res.badRequest('No envia todos los parametros');
            }
        } else {
            return res.badRequest('Metodo invalido');
        }

    }

};
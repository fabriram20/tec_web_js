/**
 * RazaController
 *
 * @description :: Server-side logic for managing Razas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    crearRaza: function (req, res) {

        if (req.method == "POST") {
            var parametros = req.allParams();
            if (parametros.nombreRaza) {
                var razaCrear = {
                    nombre: parametros.nombreRaza,                    
                }
                Raza.create(razaCrear).exec(function (err, razaCreada) {
                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear Nueva Raza",
                                rawError: err,
                                url: "/CrearRaza"
                            }
                        });
                    }
                    Raza.find()
                        .exec(function (errorIndefinido, razasEncontradas) {

                            if (errorIndefinido) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Hubo un problema cargando las Razas",
                                        rawError: errorIndefinido,
                                        url: "/ListarRaza"
                                    }
                                });
                            }
                            res.view('vistas/Raza/listarRaza', {
                                razas: razasEncontradas
                            });
                        })
                })
            } else {
                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Ingrese el nombre de la nueva Raza",
                        rawError: "Fallo en envio de parametros",
                        url: "/CrearRaza"
                    }

                });
            }
        } else {
            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP",
                    rawError: "HTTP Invalido",
                    url: "/CrearRaza"
                }
            });

        }

    },
	
};


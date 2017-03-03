/**
 * MascotaController
 *
 * @description :: Server-side logic for managing Mascotas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    
    
    crearMascota: function (req, res) {

        if (req.method == "POST") {

            var parametros = req.allParams();

            if (parametros.nombre && parametros.idRaza) {

                var mascotaCrear = {
                    nombres: parametros.nombres,
                    fechaNacimiento: parametros.fechaNacimiento,
                    paisNacimiento: parametros.paisNacimiento,
                    idRaza: parametros.idRaza
                }                

                Mascota.create(mascotaCrear).exec(function (err, mascotaCreada) {

                    if (err) {
                        return res.view('vistas/Error', {
                            error: {
                                desripcion: "Fallo al crear una Mascota",
                                rawError: err,
                                url: "/CrearMascota"
                            }
                        });
                    }

                    Mascota.find()
                        .exec(function (errorIndefinido, mascotasEncontradas) {

                            if (errorIndefinido) {
                                res.view('vistas/Error', {
                                    error: {
                                        desripcion: "Hubo un problema cargando las Mascotas",
                                        rawError: errorIndefinido,
                                        url: "/ListarUsuarios"
                                    }
                                });
                            }

                            res.view('vistas/mascota/listarMascota', {
                                mascotas: mascotasEncontradas
                            });
                        })

                })


            } else {

                return res.view('vistas/Error', {
                    error: {
                        desripcion: "Llena todos los parametros: Nombre y Raza",
                        rawError: "Fallo en envio de parametros",
                        url: "/CrearMascota"
                    }

                });

            }


        } else {

            return res.view('vistas/Error', {
                error: {
                    desripcion: "Error en el uso del Metodo HTTP",
                    rawError: "HTTP Invalido",
                    url: "/CrearMascota"
                }
            });

        }

    }
	
};


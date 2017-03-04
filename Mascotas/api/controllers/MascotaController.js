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
          nombre: parametros.nombre,
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

  },
  borrarMascota: function (req, res) {
    var parametros = req.allParams();
    if (parametros.id) {
      Mascota.destroy({
        id: parametros.id
      }).exec(function (errorInesperado, MascotaRemovido) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Tuvimos un Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarMascota"
            }
          });
        }
        Mascota.find()
          .exec(function (errorIndefinido, MascotaEncontrados) {

            if (errorIndefinido) {
              res.view('vistas/Error', {
                error: {
                  desripcion: "Hubo un problema cargando los Usuarios",
                  rawError: errorIndefinido,
                  url: "/ListarMascota"
                }
              });
            }
            res.view('vistas/Mascota/ListarMascota', {
              mascotas: MascotaEncontrados
            });
          })
      })

    } else {
      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos el ID para borrar al Usuario",
          rawError: "No envia ID",
          url: "/ListarMascota"
        }
      });
    }

  },
  editarMascota: function (req, res) {

    var parametros = req.allParams();

    if (parametros.idRaza && (parametros.nombre || parametros.fechaNacimiento || parametros.paisNacimiento)) {

      var mascotaEditar = {
        nombre: parametros.nombre,
        fechaNacimiento: parametros.fechaNacimiento,
        paisNacimiento: parametros.paisNacimiento,
        idRaza: parametros.idRaza
      }

      if (mascotaEditar.nombre == "") {
        delete mascotaEditar.nombre
      }
      if (mascotaEditar.fechaNacimiento == "") {
        delete mascotaEditar.fechaNacimiento
      }
      if (mascotaEditar.paisNacimiento == "") {
        delete mascotaEditar.paisNacimiento
      }

      Mascota.update({
        id: parametros.id
      }, mascotaEditar)
        .exec(function (errorInesperado, MascotaRemovido) {
          if (errorInesperado) {
            return res.view('vistas/Error', {
              error: {
                desripcion: "Tuvimos un Error Inesperado",
                rawError: errorInesperado,
                url: "/ListarMascota"
              }
            });
          }

          Mascota.find()
            .exec(function (errorIndefinido, MascotaEncontrados) {

              if (errorIndefinido) {
                res.view('vistas/Error', {
                  error: {
                    desripcion: "Hubo un problema cargando los Usuarios",
                    rawError: errorIndefinido,
                    url: "/ListarMascota"
                  }
                });
              }

              res.view('vistas/Mascota/ListarMascota', {
                mascotas: MascotaEncontrados
              });
            })

        })

    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "Necesitamos que envies el ID y el nombre, apellido o correo",
          rawError: "No envia Parametros",
          url: "/ListarMascota"
        }
      });

    }



  }

};


/**
 * RutasController
 *
 * @description :: Server-side logic for managing Rutas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  home: function (req, res) {
    return res.view('vistas/home');
  },
  error: function (req, res) {
    return res.view('vistas/Error', {
      error: {
        desripcion: "Usted esta por error en esta Ruta dirijase a Inicio",
        rawError: "Ruta equivocada",
        url: "/Inicio"
      }
    });
  },

  /////////Usuario//////////
  crearUsuario: function (req, res) {
    return res.view('vistas/usuario/crearUsuario');
  },
  listarUsuarios: function (req, res) {

    Usuario.find()
      .exec(function (errorIndefinido, usuariosEncontrados) {

        if (errorIndefinido) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema listando los Usuarios",
              rawError: errorIndefinido,
              url: "/ListarUsuarios"
            }
          });
        }

        res.view('vistas/usuario/ListarUsuarios', {
          usuarios: usuariosEncontrados
        });
      })
  },
  editarUsuario: function (req, res) {

    var parametros = req.allParams();

    if (parametros.id) {

      Usuario.findOne({
        id: parametros.id
      }).exec(function (errorInesperado, UsuarioEncontrado) {
        if (errorInesperado) {
          return res.view('vistas/Error', {
            error: {
              desripcion: "Error Inesperado",
              rawError: errorInesperado,
              url: "/ListarUsuarios"
            }
          });
        }
        if (UsuarioEncontrado) {
          return res.view("vistas/Usuario/editarUsuario", {
            usuarios: UsuarioEncontrado
          });
        } else {
          return res.view('vistas/Error', {
            error: {
              desripcion: "El usuario con id: " + parametros.id + " no existe.",
              rawError: "No existe el usuario",
              url: "/ListarUsuarios"
            }
          });
        }
      })
    } else {

      return res.view('vistas/Error', {
        error: {
          desripcion: "No ha enviado el parametro ID",
          rawError: "Faltan Parametros",
          url: "/ListarUsuarios"
        }
      });

    }
  },

  /////////Mascota//////////

  crearMascota: function (req, res) {
    Raza.find().exec(function (error, razasEncontrados) {
      if (error) return res.serverError();
      return res.view('vistas/Mascota/crearMascota', {
        razas: razasEncontrados
      });
    });
  },

  listarMascota: function (req, res) {

    Mascota.find()
      .exec(function (err, mascotasEncontradas) {

        if (err) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema listando las Mascotas",
              rawError: err,
              url: "/ListarMascotas"
            }
          });
        }

        res.view('vistas/Mascota/ListarMascota', {
          mascotas: mascotasEncontradas
        });
      })
  },

  /////////Raza//////////
  crearRaza: function (req, res) {
    return res.view('vistas/Raza/crearRaza');
  },
  listarRaza: function (req, res) {
    Raza.find()
      .exec(function (err, razasEncontradas) {

        if (err) {
          res.view('vistas/Error', {
            error: {
              desripcion: "Hubo un problema listando las Razas",
              rawError: err,
              url: "/ListarRaza"
            }
          });
        }

        res.view('vistas/Raza/ListarRaza', {
          razas: razasEncontradas
        });
      })
  }

};

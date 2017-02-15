module.exports = function (req, res, next) {

    var parametros = req.allParams();

    if (parametros.id == req.session.credencialSegura.id) {

        if (req.session.credencialSegura) {
            return next();
        }

    }
    return res.forbidden(' Usted no puede No puede editar la informacion de otros usuario');
};
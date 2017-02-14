/**
 * Usuario.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var Passwords = require('machinepack-passwords');

module.exports = {

    attributes: {
        nombres: {
            type: 'string',
            minLength: 5,
            required: true
        },
        apellidos: {
            type: 'string',
            minLength: 5,
            required: true
        },
        correo: {
            type: 'string',
            email: true,
            required:true,
            unique:true
        },
        password: {
            type: 'string',
            defaultsTo: "123456"
        }
    },

    beforeCreate: function (values, cb) {

        sails.log.info(values);
        //        cb(132135232)//Error
//        cb() //ok si no colocamos el callbak entonces el servidor nuca devuelve los datos
            //        cb("hola");
        Passwords.encryptPassword({
            password: values.password,
        }).exec({
            // An unexpected error occurred.
            error: function (err) {
                cb(err)

            },
            // OK.
            success: function (result) {
                values.password = result;
                cb();
            },
        });



    }

};
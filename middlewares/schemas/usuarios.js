const Joi = require('@hapi/joi');

const schemas = {
    login: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty": "El nombre de usuario es obligatorio"
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty" : "La pass es obligatoria",
            "string.min" : "La pass tiene que tener como minimo 3 caracteres",
            "string.max" : "La pass puede tener como maximo 20 caracteres"
        })
    }),
    registro: Joi.object().keys({
        username: Joi.string().required().messages({
            "string.empty": "El nombre de usuario es obligatorio"
        }),
        pass: Joi.string().min(3).max(20).required().messages({
            "string.empty" : "La pass es obligatoria",
            "string.min" : "La pass tiene que tener como minimo 3 caracteres",
            "string.max" : "La pass puede tener como maximo 20 caracteres"
        }),
        mail: Joi.string().email().required().messages({
            "string.empty" : "Tiene que registrarse con un mail",
        }),
        telefono: Joi.number().required().messages({
            "string.empty" : "Tiene que ingresar un numero de telefono",
        }),
    })
}

module.exports = {schemas};
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Se requiere el primer nombre"]
    },
    email: {
        type: String,
        required: [true, "Correo electronico es requerido"],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Por favor introduzca una dirección de correo electrónico válida"
        }


    },
    password: {
        type: String,
        required: [true, "Se requiere contraseña"],
        minlength: [6, "La contraseña debe tener 6 caracteres o más"]
    }
}, { timestamps: true });




module.exports.Usuario = mongoose.model('Usuario', UserSchema);
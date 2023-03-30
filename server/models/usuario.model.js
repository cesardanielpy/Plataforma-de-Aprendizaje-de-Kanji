const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Se requiere el primer nombre"]
    },
    lastName: {
        type: String,
        required: [true, "Se requiere apellido"]
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

// add this after UserSchema is defined
UserSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

UserSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'La contraseña debe coincidir con confirmar contraseña');
    }
    next();
});

UserSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});



module.exports.Usuario = mongoose.model('Usuario', UserSchema);
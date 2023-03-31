const { Usuario } = require("../models/usuario.model");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");



module.exports.createUsuario = async (req, res) => {
    const {email,password,name} = req.body
    try {
        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);
        const usuario = new Usuario({email, password: hashedPassword, name});
        await usuario.save();
        res.json({ msg: "Usuario Registrado", usuario });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
module.exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await Usuario.findOne({ email: email })
        if (usuario === null) {
            return res.status(403).json({ msg: "Correo no encontrado" });
        }

        const isValidPass = await bcrypt.compare(password, usuario.password);

        if (isValidPass){
            const secret = "Esto es secreto OP";

            const newJWT = jwt.sign({
                _id: usuario._id,
                nombre:`${usuario.firstName} ${usuario.lastName}`,
                email: usuario.email
            },secret)
        
            res.cookie("usertoken", newJWT, {
                httpOnly: true
            })

        res.json({ msg: "Logeado Correctamente", usuario })
        }

            
        else
        return res.status(403).json({ msg: "La clave no es correcta" });

        //res.cookie("user-token", "valor de la cookie", { httpOnly: true })
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
module.exports.logout = async (req, res) => {
    try {
        res.clearCookie("usertoken")
        res.json({ msg: "Saliste correctamente" });
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
module.exports.getAllUsuarios = async (req, res) => {
    try {
        console.log(req.usuario)
        const usuarios = await Usuario.find({})
        res.json(usuarios);
    } catch (error) {
        res.status(400);
        res.json(error);
    }
}
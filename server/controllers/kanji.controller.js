const { Kanji } = require("../models/kanji.model");
const path = require("path");
const { request } = require("http");


module.exports.crearKanji =  (req, res) => {
    console.log(req.body.data);
    let data = req.body.data;
        console.log(req.file.filename);
        console.log(data);
        data.url = req.file.filename;
        Kanji.create(data)
            .then(data => {
                res.status(200);
                res.json(data)
            })
            .catch(err => {
                res.status(500);
                res.json(err)
            })
}

module.exports.all = async (request, response) => {
    try {
        const kanjis = await Kanji.find({})
        response.json(kanjis);
        response.status(200);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.find = async (request, response) => {
    try {
        const kanji = await Kanji.findOne({ _id: request.params.id })
        response.json(kanji);
        response.status(200);
    } catch (error) {
        response.status(400);
        response.json(error);
    }

}
/*module.exports.update = async (request, response) => {
    try {
        const kanji = await Kanji.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        response.json(kanji);
        response.status(200);
    } catch (error) {
        response.status(400);
        response.json(200);
    }

}*/

module.exports.getFile = (req,res) => {
    const filepath = "./uploads/" + req.params.filename;
    console.log(filepath);
    let absolutePath = path.resolve(filepath);
    console.log(absolutePath);

    res.sendFile(absolutePath);
}
module.exports.eliminarKanji = (req, res) => {
    const kanjiId = req.params.id; // obtenemos el ID del kanji a eliminar
    Kanji.findByIdAndDelete(kanjiId) // buscamos el kanji y lo eliminamos
        .then(kanjiEliminado => {
            if (!kanjiEliminado) { // si no se encontró el kanji, respondemos con un error 404
                res.status(404);
                res.json({ message: 'Kanji no encontrado' });
            } else { // si se encontró el kanji, respondemos con un mensaje de éxito
                res.status(200);
                res.json({ message: 'Kanji eliminado correctamente' });
            }
        })
        .catch(err => { // si ocurrió un error, respondemos con un error 500
            res.status(500);
            res.json(err);
        })
};

module.exports.actualizarKanji = async (req, res) => {

    const kanjiId = req.params.id; // obtenemos el ID del kanji a actualizar
    const data = req.body.data;
    const options = { new: true }; // configuramos las opciones para que Mongoose devuelva el kanji actualizado
    console.log(req.body);
    try {
        const kanji = await Kanji.findOneAndUpdate({_id: req.params.id}, data, options)
        res.status(200);
        res.json(kanji);
    } catch (error) {
        res.status(400)
        res.json(error)
    }

}
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
module.exports.update = async (request, response) => {
    try {
        const kanji = await Kanji.findOneAndUpdate({ _id: request.params.id }, request.body, { new: true })
        response.json(kanji);
        response.status(200);
    } catch (error) {
        response.status(400);
        response.json(200);
    }

}

module.exports.getFile = (req,res) => {
    const filepath = "./uploads/" + req.params.filename;
    console.log(filepath);
    let absolutePath = path.resolve(filepath);
    console.log(absolutePath);

    res.sendFile(absolutePath);
}

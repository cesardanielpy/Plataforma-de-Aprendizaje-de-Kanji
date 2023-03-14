const mongoose = require('mongoose');
const KanjiSchema = new mongoose.Schema({
    trazo: { type: String },
    significado: { type: String },
    lecturaKun: { type: String },
    lecturaOn: { type: String },
    palabra1: { type: String },
    hiragana1: { type: String },
    significado1: { type: String },
    palabra2: { type: String },
    hiragana2: { type: String },
    significado2: { type: String },
    url:{type: String }
}, { timestamps: true });
module.exports.Kanji = mongoose.model('Kanji', KanjiSchema);


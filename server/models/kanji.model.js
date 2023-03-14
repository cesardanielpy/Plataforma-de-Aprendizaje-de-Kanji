const mongoose = require('mongoose');
const KanjiSchema = new mongoose.Schema({
    trazo: { type: String,
        required: 'Required'},
    significado: { type: String,
        required: 'Required'},
    lecturaKun: { type: String,
        required: 'Required'},
    lecturaOn: { type: String},
    palabra1: { type: String,
        required: 'Required' },
    hiragana1: { type: String,
        required: 'Required' },
    significado1: { type: String,
        required: 'Required' },
    palabra2: { type: String },
    hiragana2: { type: String },
    significado2: { type: String },
    url:{type: String }
}, { timestamps: true });
module.exports.Kanji = mongoose.model('Kanji', KanjiSchema);


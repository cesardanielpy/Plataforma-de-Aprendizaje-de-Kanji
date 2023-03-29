const KanjiController = require('../controllers/kanji.controller');
const {upload} = require('../config/multer.config'); //Importamos nuestra carpeta de destino

module.exports = app => {
    app.get('/api/kanjiN5', KanjiController.all);
    app.get('/api/kanjiN5/:id', KanjiController.find);
    app.post('/api/kanjiN5', upload.single('file') , KanjiController.crearKanji);
    app.put('/api/kanjiN5/:id',  KanjiController.actualizarKanji);
    app.get('/api/kanjiN5/files/:filename', KanjiController.getFile);
    app.delete('/api/kanjiN5/:id',KanjiController.eliminarKanji);
}

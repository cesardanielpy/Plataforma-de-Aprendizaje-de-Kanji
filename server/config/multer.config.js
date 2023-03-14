const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null,'uploads');
    },
    filename:(req,file,cb) => {
        cb(null, file.originalname);
    }
})

const fileFilter = (req, file, cb) => {
    const allowedFileTypes =['image/gif'];
    if(allowedFileTypes.includes(file.mimetype)) {
        console.log('Archivo Correcto')
        cb(null, true);
    }else{
        console.log('Archivo Incorrecto')
        cb(null,false);
        //cb(new Error('Solo admitimos archivos gif, por favor sube otro archivo!'))
    }
}

module.exports.upload = multer({ storage: storage, fileFilter: fileFilter })
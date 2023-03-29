
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import FormKanji from '../pages/kanjis/FormKanji'

const KanjiAdd = () => {
    const navigate =useNavigate();
    const initialValues = {
        trazo: '',
        significado: '',
        lecturaKun: '',
        lecturaOn: '',
        palabra1: '',
        hiragana1: '',
        significado1: '',
        palabra2: '',
        hiragana2: '',
        significado2: '',
        url: ''
    }
    const [image, setImage] = useState();

    const crearKanji = async (values) => {
        
        const data = { data: values, file: image };
        await axios.post(`http://localhost:8000/api/kanjiN5`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
                console.log(response)
                navigate('/kanji/list')
            }).catch((e) => { console.log(e) })
            

    }

    return (
        <>
            <h2 className='text-center mt-2'>Agregar Kanji</h2>
            <hr />
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-12 col-sm-12 col-md-6'>
                    <FormKanji 
                    initialValues={initialValues}
                    botonTexto="Agregar"
                    funcAction={crearKanji}
                    setImage={setImage}
                    
                    />
                </div>
            </div>
        </>
    )
}

export default KanjiAdd
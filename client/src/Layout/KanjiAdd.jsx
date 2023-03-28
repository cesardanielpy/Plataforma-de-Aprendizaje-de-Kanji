import React from 'react'
import FormKanji from '../pages/kanjis/FormKanji'

const KanjiAdd = () => {
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
    return (
        <>
            <h2 className='text-center mt-2'>Agregar Kanji</h2>
            <hr />
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-12 col-sm-12 col-md-6'>
                    <FormKanji 
                    initialValues={initialValues}
                    botonTexto="Agregar Kanji"

                    />
                </div>
            </div>
        </>
    )
}

export default KanjiAdd
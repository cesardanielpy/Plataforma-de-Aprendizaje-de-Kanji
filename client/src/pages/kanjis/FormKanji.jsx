import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import { } from 'react-router-dom';

const FormKanji = () => {

    const [image, setImage] = useState();

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

    const handleSubmit = async (values, actions) => {
        const data = { data: values, file: image };
        await axios.post(`http://localhost:8000/api/kanjiN5`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((response) => {
            }).catch((e) => { console.log(e) })

        actions.resetForm(initialValues)
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }

    return (
        <>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <h2 className='text-center mt-2'>Añadir un nuevo Kanji</h2>
                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                    >
                        <Form>
                            <input name='url' className='form-control mt-2' type="file" placeholder="Inserte un Gif" onChange={handleImageChange.bind(this)} />
                            <Field name='trazo' className='form-control mt-2' placeholder="Caracter" />
                            <Field name='significado' className='form-control mt-2' placeholder="Significado en español" />
                            <Field name='lecturaKun' className='form-control mt-2' placeholder="Lectura Kunyomi" />
                            <Field name='lecturaOn' className='form-control mt-2' placeholder="Lectura Onyomi" />
                            <Field name='palabra1' className='form-control mt-2' placeholder="Ejemplo de vocabulario 1" />
                            <Field name='hiragana1' className='form-control mt-2 ' placeholder="Hiragana" />
                            <Field name='significado1' className='form-control mt-2' placeholder="Significado en español 1" />
                            <Field name='palabra2' className='form-control mt-2' placeholder="Ejemplo de Vocabulario 2" />
                            <Field name='hiragana2' className='form-control mt-2' placeholder="Hiragana" />
                            <Field name='significado2' className='form-control mt-2' placeholder="Significado en español 2" />
                            <br />
                            <button className='btn btn-primary mt-5 d-grid gap-2 col-4 mx-auto' type='submit' >Añadir Kanji</button>
                        </Form>
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default FormKanji
import React, { useState } from 'react'
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const ErroresDeFormulario = Yup.object().shape({
    trazo: Yup.string()
        .required('Debes completar este campo')
        .min(1, 'Debes ingresar al menos un Kanji')
        .max(1, 'El kanji debe ser individual'),
    significado: Yup.string()
        .required('Debes ingresar el significado en español'),
    lecturaKun: Yup.string()
        .required('Debes ingresar la lectura kunyomi del kanji'),
    palabra1: Yup.string()
        .required('Debes ingresar al menos un ejemplo de vocabulario'),
    hiragana1: Yup.string()
        .required('Debes ingresar la palabra en hiragana'),
    significado1: Yup.string()
        .required('Debes ingresar el significado en español de la palabra'),

})

const FormKanji = ({ initialValues, botonTexto, funcAction, setImage }) => {


    const handleSubmit = (values, actions) => {
        funcAction(values);
    }


    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
    }


    return (
        <>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-4 col-sm-12 col-md-6'>
                    <Formik
                        enableReinitialize={true}
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={ErroresDeFormulario}
                    >
                        {({ errors, touched, isValid, dirty }) => (
                            <Form>
                                <h5>Ingresar Gif </h5>
                                <input name='url' className='form-control mt-2' type="file" placeholder="Inserte un Gif" onChange={handleImageChange.bind(this)} />
                                <h5>Kanji * </h5>
                                <Field name='trazo' className='form-control mt-2' placeholder="Caracter" />
                                {touched.trazo && errors.trazo && <div className='ms-3 mt-1 text-danger'>{errors.trazo}</div>}
                                <h5>Significado en español * </h5>
                                <Field name='significado' className='form-control mt-2' placeholder="Significado en español" />
                                {touched.significado && errors.significado && <div className='ms-3 mt-1 text-danger'>{errors.significado}</div>}
                                <h5>Lectura Kunyomi * </h5>
                                <Field name='lecturaKun' className='form-control mt-2' placeholder="Lectura Kunyomi" />
                                {touched.lecturaKun && errors.lecturaKun && <div className='ms-3 mt-1 text-danger'>{errors.lecturaKun}</div>}
                                <h5>Lectura Onyomi</h5>
                                <Field name='lecturaOn' className='form-control mt-2' placeholder="Lectura Onyomi" />
                                <h5>Ejemplo de Vocabulario 1 * </h5>
                                <Field name='palabra1' className='form-control mt-2' placeholder="Ejemplo de vocabulario 1" />
                                {touched.palabra1 && errors.palabra1 && <div className='ms-3 mt-1 text-danger'>{errors.palabra1}</div>}
                                <h5>Hiragana * </h5>
                                <Field name='hiragana1' className='form-control mt-2 ' placeholder="Hiragana" />
                                {touched.hiragana1 && errors.hiragana1 && <div className='ms-3 mt-1 text-danger'>{errors.hiragana1}</div>}
                                <h5>Significado de Vocabulario 1 * </h5>
                                <Field name='significado1' className='form-control mt-2' placeholder="Significado en español 1" />
                                {touched.significado1 && errors.significado1 && <div className='ms-3 mt-1 text-danger'>{errors.significado1}</div>}
                                <h5>Ejemplo de Vocabulario 2 </h5>
                                <Field name='palabra2' className='form-control mt-2' placeholder="Ejemplo de Vocabulario 2" />
                                <h5>Hiragana</h5>
                                <Field name='hiragana2' className='form-control mt-2' placeholder="Hiragana" />
                                <h5>Ejemplo de Vocabulario 2</h5>
                                <Field name='significado2' className='form-control mt-2 mb-2' placeholder="Significado en español 2" />
                                <p>* Campo Obligatorio</p>
                                <br />
                                <button className='btn btn-primary mt-5 d-grid gap-2 col-4 mx-auto' disabled={!(isValid && dirty)} type='submit' >{botonTexto} Kanji</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default FormKanji
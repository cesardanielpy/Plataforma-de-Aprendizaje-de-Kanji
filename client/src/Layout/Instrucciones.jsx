import React from 'react'
import { Link } from 'react-router-dom'

const Instrucciones = () => {
    return (
        <>
            <div className='row d-flex justify-content-center text-center'>
                <div  className='col-lg-9 col-sm-12 col-md-6'>
                    <h2 className='mt-2'>Instrucciones para la creacion de tarjetas</h2>
                    <p>El formulario utilizado para ingresar la información relacionada con los caracteres japoneses llamados kanjis tiene varios campos y  continuación, se describira el propósito de cada campo:</p>
                    <h2 className='mt-2'>Seleccionar archivo</h2>
                    <p> Este campo es para agregar un archivo de imagen que debe ser un GIF, se sugiere que sea un GIF ya que esto facilita al usuario memorizar el orden de trazos de cada kanji para
                        practicar su escritura. Otro Archivo que no sea de tipo gif no le permitira finalizar correctamente la creacion de la terjeta
                    </p>
                    <h2 className='mt-2'>Trazo</h2>
                    <p>Este campo es obligatorio y se refiere al carácter kanji que se va a ingresar.</p>
                    <h2 className='mt-2'>Significado</h2>
                    <p>Este campo es obligatorio y se refiere al significado en español del carácter kanji.</p>
                    <h2 className='mt-2'>Lectura Kunyomi</h2>
                    <p>Este campo es obligatorio y se refiere a la pronunciación de la palabra en la escritura japonesa conocida como Kunyomi.</p>
                    <h2 className='mt-2'>Lectura Onyomi</h2>
                    <p>Este campo es obligatorio y se refiere a la pronunciación de la palabra en la escritura japonesa conocida como Onyomi.</p>
                    <h3 className='mt-2'>Nota</h3>
                    <p>Kunyomi y Onyomi son los dos tipos de lecturas de los Kanji, que son caracteres chinos que se utilizan en el idioma japonés. Kunyomi es la pronunciación japonesa nativa de un kanji, mientras que Onyomi es la pronunciación china del mismo kanji. Los kanjis pueden tener una o más lecturas kunyomi y/o onyomi, y
                        el uso de cada lectura depende del contexto y de la palabra en la que se utilice.</p>
                    <h2 className='mt-2'>Ejemplo de Vocabulario 1</h2>
                    <p>Este campo es obligatorio y se refiere a una palabra de vocabulario relacionada con el carácter kanji.</p>
                    <h2 className='mt-2'>Hiragana</h2>
                    <p>Este campo es obligatorio y se refiere a la pronunciación de la palabra en el alfabeto japonés conocido como hiragana.</p>
                    <h3 className='mt-2'>Nota</h3>
                    <p>En el contexto del idioma japonés, el Hiragana es un silabario que se utiliza para representar los sonidos de las palabras japonesas. Es el primer sistema de escritura que se enseña en las escuelas japonesas y se utiliza junto con los otros dos sistemas de escritura japoneses, Katakana y Kanji.</p>
                    <h2 className='mt-2'>Significado de Vocabulario 1</h2>
                    <p>Este campo es obligatorio y se refiere al significado en español de la palabra de vocabulario.</p>
                    <h2 className='mt-2'>Ejemplo de Vocabulario 2</h2>
                    <p>Este campo es opcional y se refiere a una segunda palabra de vocabulario relacionada con el carácter kanji.</p>
                    <h2 className='mt-2'>Hiragana</h2>
                    <p>Este campo es opcional y se refiere a la pronunciación de la segunda palabra de vocabulario en el alfabeto japonés conocido como hiragana.</p>
                    <h2 className='mt-2'>Significado de Vocabulario 2</h2>
                    <p>Este campo es opcional y se refiere al significado en español de la segunda palabra de vocabulario.</p>
                    <h2 className='mt-2'>(*) Campo Obligatorio</h2>
                    <p>Este es un pequeño mensaje que indica que los campos marcados con un asterisco son obligatorios.</p>
                    <h3 className='mt-2'>Observacion</h3>
                    <p>Para completar este formulario, un estudiante debe tener conocimientos básicos del idioma japonés, como conocer el alfabeto hiragana y katakana, y tener una comprensión básica de la gramática y vocabulario del idioma. Además, es importante que el estudiante tenga conocimientos básicos sobre la cultura japonesa, ya que algunos campos del formulario requieren una comprensión de los conceptos culturales relacionados con los kanji. En resumen, se necesita un nivel básico de conocimiento del idioma y la cultura japonesa para completar este formulario de manera efectiva.</p>
                    <Link className="btn btn-info mt-2 ms-2" to={'/kanji/list'}>Lista de Kanjis</Link>
                </div>
            </div>
        </>
    )
}

export default Instrucciones
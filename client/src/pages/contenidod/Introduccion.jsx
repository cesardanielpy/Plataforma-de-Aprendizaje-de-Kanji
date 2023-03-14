import React from 'react'
import { Link } from 'react-router-dom'

const Introduccion = () => {
  return (
    <>
    <div className='row d-flex justify-content-center'>
        <div className='col-lg-4 col-sm-12 col-md-6 mt-3'>
            <h1 className='text-center'>Introducción</h1>
            <p>Esta guía le brindará las bases y las herramientas necesarias para que pueda aprender a aprender japonés a través de la inmersión: un método diferente a cualquier otro, que funciona a través del estudio autodidacta, es gratis y eficaz.</p>
            <p>Según <Link to='https://www.youtube.com/watch?v=NiTsduRreug'>Stephen Krashen</Link>, existen dos formas de aprender un lenguaje: aprendizaje y adquisición. El aprendizaje hace referencia al proceso de estudiar un lenguaje de manera formal. Que es, en otras palabras, conocer más del lenguaje: aprender vocabulario o gramática. Por otro lado, la adquisición hace referencia al proceso, muchas veces inconsciente, intuitivo y natural donde entendemos el mensaje como un bebé lo haría: mientras observa a sus padres, a su alrededor y al mundo. Este es un proceso que todos hemos hecho y podemos seguir realizando porque esa habilidad no desaparece cuando se llega a la edad adulta.</p>
            <p>Sea constante y tenga disciplina: perseverancia. El japonés es un lenguaje muy fácil de olvidar en etapas iniciales; no hay que olvidar que después de todo este un lenguaje muy alejado lingüísticamente del español. Haga inmersión todos los días si le es posible, aunque sea un poco. Así también se asegurará de crear un hábito y seguirá avanzando sin siquiera notarlo.</p>
            <Link className="btn btn-info mt-3" to={'/kanji/intro/1'}>Siguiente</Link>
            <p></p>
        </div>
    </div>
    </>
  )
}

export default Introduccion
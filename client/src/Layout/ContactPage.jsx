import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';


const Result = () => {
  return (
    <h4>Su mensaje ha sido enviado con éxito. Pronto nos pondremos en contacto con usted</h4>
  )
}

const ContactPage = (props) => {
  const form = useRef();
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_r2tg02c', form.current, 'JKVflmbsOvKbZozYI')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    setResult(true);
  };
  //hide result
  setTimeout(() => {
    setResult(false);
  }, 3000);
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-lg-4 col-sm-12 col-md-6' >
        <form ref={form} onSubmit={sendEmail} className='email-form'>
          <h1 className='text-center mb-2'>Si encuentras un error en alguna tarjeta, o tienes alguna sugerencia no dudes en contactarnos</h1>
          <div className='form-group'>
            <label htmlFor='fullName'>Nombre Completo</label>
            <input
              className='form-control mt-4'
              type='text'
              name='fullName'
              required
            />
          </div >
          <div className='form-group'>
            <label htmlFor='phone'>Numero de Telefono</label>
            <input
              className='form-control mt-4'
              type='text'
              name='phone'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control mt-4'
              type='text'
              name='email'
              required
            />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Mensaje</label>
            <textarea
              className='form-control'
              name='message'
              required
            ></textarea>
          </div>
          
          <button type='submit' className='d-flex justify-content-center btn btn-primary mt-3 mb-2'>Enviar</button>
          <div className='row'>{result ? <Result /> : null}</div>
        </form>
        <div className='d-flex justify-content-around' >
        <Link className='mt-3 ms-2'><i className="fa-brands fa-facebook fa-2xl fa-bounce"></i></Link> <Link className='mt-3 ms-2'><i className="fa-brands fa-instagram fa-2xl fa-bounce"></i></Link> <Link className='mt-3 ms-2'><i className="fa-brands fa-square-whatsapp fa-2xl fa-bounce"></i></Link>
      </div>
      </div>
    </div>
  )
}

export default ContactPage
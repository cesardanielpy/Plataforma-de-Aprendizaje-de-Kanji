import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';


const Result =()=>{
  return(
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
  setTimeout (() =>{
      setResult(false);
  }, 3000);
  return (
    <div className='row d-flex justify-content-center'>
      <div className='col-lg-4 col-sm-12 col-md-6' >
<form ref={form} onSubmit={sendEmail} className='email-form'>
  <h1 className='text-center'>Envianos un correo</h1>
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
  <button type='submit' className='btn btn-primary mt-3'>Enviar</button>
  <div className='row'>{ result ? <Result/> : null }</div>
</form>
</div>
</div>
  )
}

export default ContactPage
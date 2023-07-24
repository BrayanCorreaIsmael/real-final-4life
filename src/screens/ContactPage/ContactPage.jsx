import React from 'react'
import './ContactPage.css'

const ContactPage = () => {
  return (
    <div>
      <form className="formulario">
        <label htmlFor="nombre">*Nombre:</label>
        <input name="nombre" id="nombre" />
        <label htmlFor="email">*Email:</label>
        <input type="email" id="email" name="email" />
        <label htmlFor="asunto">*Asunto:</label>
        <input type="asunto" id="asunto" name="asunto" />
        <label htmlFor="mensaje">*Message</label>
        <textarea id="mensaje" name="mensaje" rows="4" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default ContactPage
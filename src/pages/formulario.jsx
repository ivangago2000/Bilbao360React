import React from 'react';
import '../css/formulario.css';
import '../css/menu.css';
import Menu from '../components/menu';

function Formulario() {
  return (
    <>
      <Menu />
      <div className="formulario-container">
        <div className="texto-central">
          <h1>Contáctanos</h1>
          <form
            action="https://formsubmit.co/ivan.gago@estudioenpenascal.com"
            method="POST"
          >
            <input type="hidden" name="_captcha" value="false" />

            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="correo"
                placeholder="Tu correo electrónico"
                required
              />
            </div>
            <div className="form-group">
              <input type="text" name="asunto" placeholder="Asunto" required />
            </div>
            <div className="form-group">
              <textarea
                name="mensaje"
                rows="5"
                placeholder="Escribe tu mensaje aquí..."
                required
              ></textarea>
            </div>
            <button type="submit">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Formulario;
import React from 'react';
import '../assets/styles/components/Register.scss';

const Register = () => (
  <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form  className="register__container--form" action="">
        <input type="text" className="input" placeholder="Nombre"/>
        <input type="text" className="input" placeholder="Correo"/>
        <input type="password" className="input" placeholder="Contraseña"/>
        <button className="button">Registrarme</button>
      </form>
      <a href="">Iniciar sesión</a>
    </section>
  </section>
);

export default Register;
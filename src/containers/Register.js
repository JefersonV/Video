import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Register.scss';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import Header from '../components/Header';

const Register = (props) => {

  const [form, setValues] = useState({
    email: '',
    'name': '',
    'password': '',
  })

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,

    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(form)
    // se manda al reducer 
    props.registerRequest(form)
    props.history.push('/');
  }

  return (
    <Fragment >
      <Header isRegister/>
      <section className="register">
        <section className="register__container">
          <h2>Regístrate</h2>
          <form  className="register__container--form" onSubmit={handleSubmit}>
            <input 
              name="Nombre"
              type="text" 
              className="input" 
              placeholder="Nombre"
              onChange={handleInput}
            />
            <input 
              name="email"
              type="text" 
              className="input" 
              placeholder="Correo"
              onChange={handleInput}
            />
            <input 
              name="Contraseña"
              type="password" 
              className="input" 
              placeholder="Contraseña"
              onChange={handleInput}
            />

            <button type="submit" className="button">Registrarme</button>
          </form>
          <Link to="/login">Iniciar sesión</Link>
        </section>
      </section>
    </Fragment>
  )
};

const mapDispatchToProps = {
  registerRequest,
}

export default connect (null, mapDispatchToProps)(Register);
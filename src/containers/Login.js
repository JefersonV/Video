import React, { useState } from 'react';
import googleIcon from '../assets/images/google-icon.png';
import twitterIcon from '../assets/images/twitter-icon.png';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Login.scss';

const Login = () =>  {

	const [form, setValues] = useState({
		email: '',
	})

	const handleInput = (e) => {
		setValues({
			...form,
			[e.target.name]: e.target.value
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(form)
	}

	return ( 
		<section className='login'>
			<section className='login__container'>
				<h2>Inicia sesión</h2>
				<form className='login__container--form' onSubmit={handleSubmit}>
					<input 
						name="email"
						className='input' 
						type='text' 
						placeholder='Correo'
						onChange={handleInput}
					 />
					<input 
						name="password"
						className='input'
						type='password' 
						placeholder='Contraseña' 
						onChange={handleInput}
					/>
					<button className='button'>Iniciar sesión</button>
					<div className='login__container--remember-me'>
						<label>
							<input type='checkbox' id='cbox1' value='first_checkbox' />
							Recuérdame
						</label>
						<a href='/'>Olvidé mi contraseña</a>
					</div>
				</form>
				<section className='login__container--social-media'>
					<div>
						<img src={googleIcon} alt="google-icon" /> Inicia sesión con Google
					</div>
					<div>
						<img src={twitterIcon} /> Inicia sesión con Twitter
					</div>
				</section>
				<p className='login__container--register'>
					No tienes ninguna cuenta <Link to="/register">Regístrate</Link>
				</p>
			</section>
		</section>
	)
}
  

export default Login;
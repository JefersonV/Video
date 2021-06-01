import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import { Link } from 'react-router-dom';
class Header extends React.Component {
	render() {
		return (
		  <header className="header">
				<Link to="/">
			  	<img className="header__img" src={logo} alt="Platzi Video" />
				</Link>

				<div className="header__menu">

					<div className="header__menu--profile">
							<img src={userIcon} alt="" />
						<p>Perfil</p>
					</div>

					<ul>
						<li><a href="#">Cuenta</a></li>
						<li><Link to="/login">Iniciar sesión</Link></li>
					</ul>
				</div>
		  </header>
		)
	}
}

export default Header;
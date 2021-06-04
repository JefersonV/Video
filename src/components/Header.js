import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import classNames from 'classnames'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions';
import gravatar from '../utils/gravatar';

function Header(props) {
	const { user, isLogin, isRegister } = props;
	//Validación
	const hasUser = Object.keys(user).length > 0;
	
		const handleLogout = () => {
			//Le enviamos vacío (a payload) para que modifique el state
			props.logoutRequest({})
		}

		const headerClass = classNames('header', {
			isLogin,
			isRegister,
		})

		return (
		  <header className="header">
				<Link to="/">
			  	<img className="header__img" src={logo} alt="Platzi Video" />
				</Link>

				<div className="header__menu">

					<div className="header__menu--profile">
						{hasUser ? 
							<img src={gravatar(user.email)} alt={user.email} />
							:
							<img src={userIcon} alt="" />
						}
		
						<p>Perfil</p>
					</div>

					<ul>
					{ hasUser ? 
						<li><Link to="/">{user.name}</Link></li> :
						null
					}

					{
						hasUser ? 
						<li>
							<a href="#" onClick={handleLogout}>Cerrar sesión</a>
						</li>
						:
						<li><Link to="/login">Iniciar sesión</Link></li> 

					}
						
					</ul>
				</div>
		  </header>
		)
	}

const mapStateToProps = state => {
	return {
		user: state.user
	};
};

const mapDispatchToProps = {
	logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header); 
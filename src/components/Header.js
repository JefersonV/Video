import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/images/logo-platzi-video-BW2.png';
import userIcon from '../assets/images/user-icon.png';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';

function Header(props) {
	const { user } = props;
	//Validación
	const hasUser = Object.keys(user).length > 0;
	
		const handleLogout = () => {
			
		}

		return (
		  <header className="header">
				<Link to="/">
			  	<img className="header__img" src={logo} alt="Platzi Video" />
				</Link>

				<div className="header__menu">

					<div className="header__menu--profile">
						{hasUser ? 
							<img src={gravatar(user.email)} alt={user.email} />:
							<img src={userIcon} alt="" />
						}
		
						<p>Perfil</p>
					</div>

					<ul>
					{ hasUser ? 
						<li><a href="#">{user.name}</a></li> :
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

export default connect(mapStateToProps, null)(Header); 
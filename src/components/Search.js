import React from 'react';
import '../assets/styles/components/Main.scss';
class Main extends React.Component {
	render () {
		return (
		<section className="main">
			<h2 className="main__title">Qué quieres ver hoy?</h2>
			<input type="text" className="input" placeholder="buscar..."/>
		</section>
		)
	}
}

export default Main;
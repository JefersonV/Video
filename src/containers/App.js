import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Carousel from '../components/Carousel';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

class App extends React.Component {
    render() {
			return (
				<div className="app">
					<Header />
					<Main />
					<Categories title="Mi Lista">
						<Carousel />
					</Categories>
					<Categories title="Tendencias">
						<Carousel />
					</Categories>
					<Categories title="Originales de Platzi Vídeo">
						<Carousel />
					</Categories>
					<Footer />
				</div>
			)
    }
}

export default App;
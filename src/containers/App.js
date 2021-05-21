import React from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import '../assets/styles/App.scss';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
                <Main />
                <h3 className="categories__title">Mi lista</h3>
                <Carousel />
                <Footer />
            </div>
        )
    }
}

export default App;
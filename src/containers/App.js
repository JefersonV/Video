import React from 'react';
import Header from '../components/Header';
import '../assets/styles/App.scss';
class App extends React.Component {
    render() {
        return (
            <div className="app">
                <Header />
            </div>
        )
    }
}

export default App;
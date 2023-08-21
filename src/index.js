import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import NavBar from './components/navbar/index.js'
import HomePage from './views/homepage/index.js'

const appContainer = (
    <div className="appContainer">
        <NavBar />
        <HomePage />
    </div>
)

ReactDOM.render(appContainer, document.getElementById('root'));
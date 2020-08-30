import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import NavigationBar from './NavigationBar/index.js'
import ListContainer from './ListContainer/index.js'

const appContainer = (
    <div className="appContainer">
        <NavigationBar />
        <ListContainer />
    </div>
)

ReactDOM.render(appContainer, document.getElementById('root'));
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import navbar from '../images/Slices/nav_bar.png'
import BackButton from '../images/Slices/Back.png'
import SearchIcon from '../images/Slices/search.png'

export default class NavigationBar extends React.Component {
    render() {
        return (
            <div className="navigationBar" style={{backgroundImage: `url(${navbar})`}}>
            <img className="backButton" src={BackButton} alt="back" 
            style ={{width: '40px',position: 'absolute',left:'30px',top:'20px'}}></img>
            <img className="backButton" src={SearchIcon} alt="search" 
            style ={{width: '40px',position: 'absolute',right:'30px',top:'20px'}}></img>
            <h2>Romantic Comedy</h2>
            </div>
        )
    }
}
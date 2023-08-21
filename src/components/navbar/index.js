import React from 'react';
import './index.css'
import navbar from '../../service/images/nav_bar.png'
import BackButton from '../../service/images/Back.png'
import SearchIcon from '../../service/images/search.png'

export default class NavBar extends React.Component {


    render() {
        return (
            <div className="navigationBar" style={{backgroundImage: `url(${navbar})`}}>
            <img className="backButton" src={BackButton} alt="back" 
            style ={{width: '40px',position: 'absolute',left:'30px',top:'20px'}}></img>
            <img className="searchButton" src={SearchIcon} alt="search" 
            style ={{width: '40px',position: 'absolute',right:'30px',top:'20px'}}></img>
            <h2>Romantic Comedy</h2>
            </div>
        )
    }
}
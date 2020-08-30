import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

export default class ListElement extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            missingImage : false
        }
        this.sourceImage = this.props.posImg
    }

    imageOnerror() {
        this.sourceImage = "placeholder_for_missing_posters.png"
        this.setState({missingImage:true})        
    }
    render() {
        return (
        <div className="listElement">
            <img src={this.sourceImage} alt={this.props.name} onError={() => {this.imageOnerror()}}></img>
            <h3>{this.props.name}</h3>
        </div>        
        )
    }
}
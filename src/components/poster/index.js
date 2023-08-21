import React from 'react';
import './index.css'

export default class Poster extends React.Component {

    constructor(props) {
        super(props)
        this.state ={
            missingImage : false
        }
        this.sourceImage = this.props.posImg
        console.log("Source Image: " , this.sourceImage)
    }

    imageOnerror() {
        console.log("image error")
        this.setState({missingImage:true})        
    }

    render() {
        return (
        <div className="posterContainer">
            <img className="poster" src={this.sourceImage} alt={this.props.name} onError={() => {this.imageOnerror()}}></img>
            <p>{this.props.name}</p>
        </div>        
        )
    }
}
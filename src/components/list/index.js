import React, { Suspense }  from 'react';
import './index.css'

const Poster = React.lazy(() => import('../poster/index.js'));

export default class List extends React.Component{

    constructor(props) {
        super(props);
        this.contentListItems = this.props.contentList
    }

    renderList() {
        return this.props.contentList.map((item, index) => {
            return (
            <Suspense fallback={<img src={require("../../service/images/placeholder_for_missing_posters.png")} alt="missingPoster"></img>}>
            <Poster name={item.name} posImg={require('../../service/images/' + item.poster)} key={index}/>
            </Suspense>
            )
        })  
    }

    render() {
        return(
           <div className="scrollableGridList">
               {this.renderList()}
           </div>
        )
    }
}
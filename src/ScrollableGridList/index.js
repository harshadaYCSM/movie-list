import React, { lazy, Suspense }  from 'react';
const ListElement = React.lazy(() => import('../ListElement/index.js'));

export default class ScrollableGridList extends React.Component{

    constructor(props) {
        super(props);
        // this.contentListItems = this.props.contentList
    }

    renderList() {
        return this.props.contentList.map((item, index) => {
            return (
            <Suspense fallback={<img src="placeholder_for_missing_posters.png"></img>}>
            <ListElement name={item.name} posImg={item["poster-image"]} key={index}/>
            </Suspense>
            )
        })  
    }

    render() {
        return(
           <div className="scrollableGridList">
            <div className="grid grid-cols-3 gap-4" style={{margin:'25px',textAlign:'-webkit-center',color:'white'}}>
               {this.renderList()}
           </div>
           </div>
        )
    }
}
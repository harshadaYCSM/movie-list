import React from 'react';
import './index.css'
import 'whatwg-fetch'
import ScrollableGridList from '../ScrollableGridList/index.js'

export default class ListContainer extends React.Component {

    constructor() {
        super();
        this.state = {pageNo : 1,
            apiUrl : '../API/CONTENTLISTINGPAGE-PAGE',
            contentList : [],
            pageNumber : 1
        };
       
    }
    componentDidMount() {
        this.getPageData();
        window.addEventListener('scroll', () => {
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
               console.log("Bottom of the page. going to next page");
               let newPage = this.state.pageNumber;
               newPage++;
                this.setState({
                    pageNumber: newPage
                });
                console.log("Page Number : " + newPage) 
               this.getOtherPageData(newPage);
               //show loading spinner and make fetch request to api
            }
         });
    }

    componentWillUnmount() {
        window.removeEventListener('scroll')
    }

    async getOtherPageData(pageNo) {
        const urlConst = this.apiUrl + this.pageNo + '.json' //can be used for fetch :(
        let contentListPage
        if(pageNo === 2) {
            contentListPage = await import('../API/CONTENTLISTINGPAGE-PAGE2.json')
        } else if (pageNo === 3) {
            contentListPage = await import('../API/CONTENTLISTINGPAGE-PAGE3.json')
        }
        if(contentListPage) {
            const newList = contentListPage.page["content-items"].content
            this.setState({ contentList: [...this.state.contentList,...newList]}); 
        }
       
    }
    
    async getPageData() {
        const urlConst = this.apiUrl + this.pageNo + '.json' //can be used for fetch :(
        let ContentListPageOne = await import('../API/CONTENTLISTINGPAGE-PAGE1.json')
        this.setState({ contentList: ContentListPageOne.page["content-items"].content});
    }

    render() {
        return (
            <div className="listContainer">
                <ScrollableGridList 
                className="VideoGridList"
                itemPerRow= "3"
                visibleLines="9"
                childrenPerPage="20"
                contentList={this.state.contentList} />
            </div>
        )
    }
}
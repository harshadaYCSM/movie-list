import React from 'react';
import './index.css'
import 'whatwg-fetch'
import List from '../../components/list/index.js'

export default class HomePage extends React.Component {

    constructor() {
        super();
        this.state = {
            apiUrl: '../API/CONTENTLISTINGPAGE-PAGE',
            contentList: [],
            pageNumber: 1,
        };

    }
    componentDidMount() {
        this.getPageData();
        window.addEventListener('scroll', () => this.handleScroll());
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.handleScroll())
    }

    handleScroll() {
        console.log("Handle Scroll Pagenumber : ", this.state.pageNumber)
        if (((window.innerHeight + window.scrollY) >= document.body.offsetHeight) && this.state.pageNumber <= 2) {
            const nextPage = this.state.pageNumber + 1;
    
            // Fetch data for the next page based on the pageNumber state
            console.log("Moving to page number :" , nextPage)
            this.getOtherPageData(nextPage)
                .then(() => {
                    this.setState({ pageNumber: nextPage });
                })
                .catch(error => {
                    console.error('Error fetching page:', error);
                });
        }
    }
    
    

    handleSearch(searchText) {
        let searchList = this.state.contentList.filter((movie) => movie.name.toLowerCase().includes(searchText.toLowerCase()))
        this.setState({ contentList: searchList });
        if (!searchText) {
            this.setState({ pageNumber: 0 });
            this.getPageData();
        }
        //
    }

    async getOtherPageData(pageNo) {
        let contentListPage
        if (pageNo === 2) {
            contentListPage = await import('../../service/API/CONTENTLISTINGPAGE-PAGE2.json')
        } else if (pageNo === 3) {
            contentListPage = await import('../../service/API/CONTENTLISTINGPAGE-PAGE3.json')
        }
        if (contentListPage) {
            const newList = contentListPage.page["content-items"].content
            this.setState({ contentList: [...this.state.contentList, ...newList] });
        }

    }

    async getPageData() {
        let ContentListPageOne = await import('../../service/API/CONTENTLISTINGPAGE-PAGE1.json')
        this.setState({ contentList: ContentListPageOne.page["content-items"].content });
    }

    render() {
        return (
            <div className="homePage">
                <input className='searchBar' placeholder='searchMovie' onChange={(e) => this.handleSearch(e.target.value)}></input>

                <List
                    className="VideoGridList"
                    itemPerRow="3"
                    visibleLines="9"
                    childrenPerPage="20"
                    contentList={this.state.contentList} />
            </div>
        )
    }
}
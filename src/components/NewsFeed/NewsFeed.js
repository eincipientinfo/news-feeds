import React, { Component } from 'react';
import NewsFeedCategories from '../NewsFeedCategories/NewsFeedCategories';
import TradingViewWidget from '../Pages/WatchList/WatchList'
import './NewsFeed.css';
import ArticleModal from "../Modal/Article/ArticleModal"
import Article from "../Article/Article";
import {return_random_array} from "../../Helpers"

export default class NewsFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            filterData: [],
            isModalOpen: false,
            article: '',
            filterInput: '',
            selectedOption: '',
            trendingArticlesList : []
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount() {
        // fetch('https://static.newsfilter.io/landing-page/main-content.json')
        const url = "https://api.newsfilter.io/public/actions?token=vgkjaxk2tiebiudhkjirhnaozaeeoiw4ikdpsrolbeoeadfeph09sjfzsaog5bzi"
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "type": "filterArticles",
                "queryString": "source.id: (seekingAlpha zacks accesswire barrons globenewswire businesswire prNewswire bloomberg reuters cnbc benzinga)"
            }),
        })
        .then((response) => response.json())
        .then((data) => {
            let new_data = data.articles //this.sort(data.articles);
            this.setState({
                data: new_data,
                filterData: new_data
            })
        });

        fetch('https://static.newsfilter.io/landing-page/trending-articles.json')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                trendingArticlesList: data
            })
        }); 
    }
   
    handleChange = (event) => {
        const value = event.target.value.trimLeft();
        event.target.value = event.target.value.trimLeft();
        let filterSelect = [];
        if (this.state.selectedOption !== '') {
            filterSelect = this.state.data.filter(val => val.source.id === this.state.selectedOption.toLowerCase())
        } else {
            filterSelect = this.state.data;
        }
        let filterArr = filterSelect.filter(val => (val.title.toLowerCase().includes(value.toLowerCase()) === true || val.description.toLowerCase().includes(value.toLowerCase()) === true || val.content.toLowerCase().includes(value.toLowerCase()) === true))
        this.setState({
            ...this.state,
            filterInput: value,
            filterData: value === '' ? filterSelect : filterArr //this.sort(filterSelect) : this.sort(filterArr)
        });
    };

    sort(data) {
        let source1 = data.filter(val => val.source.id === 'bloomberg');
        let source2 = data.filter(val => val.source.id === 'reuters');
        let source3 = data.filter(val => val.source.id === 'cnbc');
        let new_data = [];
        for (let index = 0; index < Math.max(source1.length, source2.length, source3.length); index++) {
            if (index < source1.length)
                new_data.push(source1[index])
            if (index < source2.length)
                new_data.push(source2[index])
            if (index < source3.length)
                new_data.push(source3[index])
        }
        return new_data;
    }
    openModal(article) {
        this.setState({
            ...this.state,
            isModalOpen: true,
            article: article
        });
    }

    closeModal() {
       
        this.setState({
            isModalOpen: false,
            article: ''
        });
    }

    toggleOption = (event) => {
        const value = event.target.value;
        this.setState({
            selectedOption: value,
        }, () => {
            let filterSelect = [];
            if (this.state.selectedOption !== '') {
                filterSelect = this.state.data.filter(val => val.source.id === this.state.selectedOption.toLowerCase())
            } else {
                filterSelect = this.state.data;
            }
            let filterArr = filterSelect;
            if (this.state.filterInput !== '') {
                filterArr = filterSelect.filter(val => (val.title.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true || val.description.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true || val.content.toLowerCase().includes(this.state.filterInput.toLowerCase()) === true))
            }
            this.setState({
                ...this.state,
                filterData: filterArr //this.sort(filterArr)
            });
        });
    };

    render() {

        const { data, filterData, trendingArticlesList} = this.state;

        let checkData = {};
        let result = [];

        for (let i = 0; i < data.length - 1; i++) {
            let name = data[i].source.name;

            if (!(name in checkData)) {
                checkData[name] = 1;
                result.push(name);
            }
        }
        let articleLink = "https://api.newsfilter.io/articles/"; 
        let apiKey = "vgkjaxk2tiebiudhkjirhnaozaeeoiw4ikdpsrolbeoeadfeph09sjfzsaog5bzi";
        return (
            <div className="main_content">
                <div className="main_content_inner">
                    <div className="heading">
                        <TradingViewWidget />
                        <NewsFeedCategories />
                        <div className="filter">
                            {/* <div className="head_search">
                                <div className="head_search_cont">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="search"
                                    onChange={this.handleChange}
                                    value={this.state.filterInput}
                                    id="search"
                                    placeholder="Search"
                                    autoComplete="off"
                                />
                                <select
                                    id="source"
                                    value={this.state.selectedOption}
                                    onChange={this.toggleOption}
                                    className="news_source"
                                >
                                    <option value="">Select Source</option>
                                    {result && result.length > 0
                                    ? result.map((element, index) => {
                                        return (
                                        <option key={`source_${index}`} value={element.toLowerCase()}>
                                            {element}
                                        </option>
                                        );
                                    })
                                    : null}
                                </select>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    
                     {filterData.map((dataContent, index) =>{
                         if((index+1)%4===0){
                            return (
                                <div  key={index}>
                                    <Article 
                                        article={dataContent} 
                                        openModal={this.openModal}
                                        type="news_feed"
                                    />
                                    <Article 
                                        article={return_random_array(trendingArticlesList)} 
                                        openModal={this.openModal}
                                        type="trending_article"

                                    />
                                </div>
                             )
                         }
                            return (
                                <Article 
                                    article={dataContent} 
                                    openModal={this.openModal}
                                    key={index}
                                    type="news_feed"
                                />
                            )
                     })
                    }
                {/* on clicking new article/read more button, open this modal with that news article*/}
                    <ArticleModal 
                    isModalOpen={this.state.isModalOpen}
                    closeModal={this.closeModal}
                    article = {this.state.article} />
                </div>
            </div>

        )
    }
}

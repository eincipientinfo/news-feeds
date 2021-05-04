import React, { Component } from 'react';
import './TrendingArticles.css'
import ArticleModal from "../Modal/Article/ArticleModal"
import {truncate_string} from "../../Helpers";

export default class TrendingArticles extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            article : ""
        } 
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
    componentDidMount(){
        fetch('https://static.newsfilter.io/landing-page/trending-articles.json')
        .then((response) => response.json())
        .then((data) => {
            this.setState({
                data: data
            })
        }); 
    }

    //open modal to show clicked  article
    openModal(article) {
        this.setState({
            ...this.state,
            isModalOpen: true,
            article: article
        });
    }

    //close modal and update it's related state
    closeModal() {
        this.setState({
            isModalOpen: false,
            article: ''
        });
    }

    render() {
        const { data } = this.state;
        return (
            <div className="uk-card-default rounded mb-4">
                {data.map((dataContent, index)=> (
                    <ul key={index}  className="uk-child-width-expand uk-tab">
                    <li className="trending-list-items">
                        <a onClick={() => this.openModal(dataContent)} className="list-links">
                            {truncate_string(dataContent.title,30)}
                        </a>
                    </li>
                    </ul> 
                ))
                }
            {/* on clicking article, open this modal with that trending news */}
            <ArticleModal 
                isModalOpen={this.state.isModalOpen}
                closeModal={this.closeModal}
                article = {this.state.article} />

            </div>
        )
    }
}



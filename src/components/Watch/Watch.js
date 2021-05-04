import React, { Component } from 'react';
import TrendingArticles from '../TrendingArticles/TrendingArticles';
import './Watch.css'

export default class Watch extends Component {
    render() {
        return (
            <div className="main_content_trending">
                <div className="main_content_inner">
                <div className="uk-card-default rounded mb-4">
                        <ul className="uk-child-width-expand uk-tab" uk-switcher="animation: uk-animation-fade">
                            <li><a href="#">Trending Articles</a></li>
                        </ul>
                </div>
                <TrendingArticles/>
            </div>
        </div>
        )
    }
}

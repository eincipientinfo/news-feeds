import React, { Component } from 'react'
import Moment from 'react-moment';
import {truncate_string} from "../../Helpers";
export default class Article extends Component {
    render() {
        let article = this.props.article;
        return (
           <div className={"uk-grid-large " + this.props.type} >
                <div className="uk-width-expand@m uk-first-column">
                    <div>
                        
                    <a onClick={() => this.props.openModal(article)} className="blog-post" rel="noopener noreferrer">
                            {article.imageUrl && article.imageUrl.length > 0 && <div className="blog-post-thumbnail">
                                <div className="blog-post-thumbnail-inner">
                                    <img src={article.imageUrl} alt={article.title} />
                                </div>
                            </div>}
                            <div className="blog-post-content">
                                <div className="blog-post-content-info">
                                    <span className="blog-post-info-tag button soft-primary">{article.source.name}</span>

                                    <span className={"blog-post-info-tag button soft-primary "+ this.props.type}><b>{this.props.type}</b></span>

                                    <span className="blog-post-info-date">
                                        <Moment format="LLL" withTitle>
                                            {article.publishedAt}
                                        </Moment>
                                    </span>
                                </div>
                                <h3>{article.title}</h3>
                                <p>{truncate_string(article.description,145)}</p>
                                <a onClick={() => this.props.openModal(article)} className="button primary circle" rel="noopener noreferrer">Read More
                                </a> 
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

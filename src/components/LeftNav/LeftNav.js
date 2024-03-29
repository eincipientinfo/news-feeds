import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LeftNav extends Component {
    render() {
        return (
            <div id="wrapper">
                <div className="main_sidebar">
                    <div className="side-overlay" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible"></div>
                    <div className="sidebar-header">
                        <span className="btn-close" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible"></span>
                    </div>
                    <div className="sidebar">
                        <div className="sidebar_innr" data-simplebar>
                            <div className="sections">
                                <ul>
                                    <li>
                                        <a href="/"> <img src="assets/images/icons/news.png" alt=""/>
                                            <span> Feed </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/watch"> <img src="assets/images/icons/list.png" alt=""/>
                                            <span> Watch </span>
                                        </a>
                                    </li>
                                    {/* <li>
                                        <a href="/watchlist"> <img src="assets/images/icons/list.png" alt=""/>
                                            <span> WatchList </span>
                                        </a>
                                    </li> */}
                                    {/* <li>
                                        <a href="#"> <img src="assets/images/icons/info.png" alt=""/>
                                            <span> Morning Briefs </span>
                                        </a>
                                    </li> */}
                                    <li>
                                        <a href="/join"> <img src="assets/images/icons/chat_icon.png" alt=""/>
                                            <span> Chat </span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#"> <img src="assets/images/icons/questions.png" alt=""/>
                                            <span> Questions </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

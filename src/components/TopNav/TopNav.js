import React, { Component } from 'react'
import Notifications from '../Notifications/Notifications';

export default class TopNav extends Component {
    render() {
        return (
            <div id="main_header">
                <header>
                    <div className="header-innr">
                        <div className="header-btn-traiger" uk-toggle="target: #wrapper ; cls: collapse-sidebar mobile-visible">
                            <span></span></div>
                        <div className="head_search">
                            <div className="head_search_cont">
                                <input type="text" className="form-control"
                                    placeholder="Search for Stocks , Latest News and more.." autoComplete="off"/>
                                <i className="s_icon uil-search-alt"></i>
                            </div>

                            <div uk-dropdown="pos: top;mode:click;animation: uk-animation-slide-bottom-small"
                                className="dropdown-search">
                                <ul className="dropdown-search-list">
                                    <li className="list-title"> Recent Searches </li>
                                    <li> <a href="#"> Apple</a> </li>
                                    <li> <a href="#"> Microsoft</a> </li>
                                    <li> <a href="#"> Teslsa </a> </li>
                                    <li className="menu-divider"></li>
                                    <li className="list-footer"> <a href="your-history.html"> Searches History </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <Notifications/>
                    </div>
                </header>
             </div>
        )
    }
}

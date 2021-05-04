import React, { Component } from 'react';

export default class LiveTickerFeed extends Component {
    componentDidMount() {
        // const script = document.createElement("script");
        // script.src = "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        // script.async = true;
        // document.body.appendChild(script);
    }
    render() {
        return (
                 <div className="uk-width-1-3@s uk-float-right">
                        <div uk-sticky="offset:86;media: @m ; bottom:true">
                        {/* <div className="uk-card-default rounded mb-4">
                                <ul className="uk-child-width-expand uk-tab" uk-switcher="animation: uk-animation-fade">
                                    <li>Live Stock Price</li>
                                </ul>

                            <ul className="uk-switcher">
                                <h1>eyaskldjaskldjaskl</h1>
                                <li></li>
                            </ul>
                     </div> */}
                     </div>
                     
            </div>
        )
    }
}

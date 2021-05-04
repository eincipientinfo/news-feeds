import React, { Component } from 'react';
import './Premium.css';

export default class Premium extends Component {
    render() {
        return (
           <div className="wrap mainPricing">
			<h1></h1>
			<div className="pricing-grids">
				<div className="pricing-grid">
					<div className="price-value">
						<h2>Premium</h2>
						<h5>Great for small business</h5>
					</div>
							<div className="price-bg">
								<p className="price-label-1">$<span>12</span>monthly</p>
							<ul className="count">
								<li><img src="/assets/images/images/1.png"/>No Ads</li>
								<li><img src="/assets/images/images/2.png"/>Advanced Options</li>
								<li><img src="/assets/images/images/3.png"/>200GB Storage</li>
								<li><img src="/assets/images/images/4.png"/>3GB BandWidth</li>
							</ul>
							<p className="bottom"><ul className="buy-now">
									<li className="tag-now-1"><a className="popup-with-zoom-anim" >Buy Now</a></li>
									<div className="clear"> </div>
								</ul>
                            </p>
							</div>
						</div>
						<div className="pricing-grid">
							<div className="price-value two">
								<h3>Plus</h3>
								<h5>Great for small business</h5>
							</div>
							<div className="price-bg">
								<p className="price-label-2">$<span>9</span><i>79</i>monthly</p>
							<ul className="count">
								<li><img src="/assets/images/images/1.png"/>No Ads</li>
								<li><img src="/assets/images/images/2.png"/>Advanced Options</li>
								<li><img src="/assets/images/images/3.png"/>200GB Storage</li>
								<li><img src="/assets/images/images/4.png"/>3GB BandWidth</li>
							</ul>
							<p className="bottom"><ul className="buy-now">
									<li className="tag-now-2"><a className="popup-with-zoom-anim" >Buy Now</a></li>
									<div className="clear"> </div>
								</ul>
                            </p>
							</div>
						</div>
						<div className="pricing-grid">
							<div className="price-value three">
								<h4>Basic</h4>
								<h5>Great for small business</h5>
							</div>
							<div className="price-bg">
								<p className="price-label-3">$<span>5</span>monthly</p>
							<ul className="count">
								<li><img src="/assets/images/images/1.png"/>No Ads</li>
								<li><img src="/assets/images/images/2.png"/>Advanced Options</li>
								<li><img src="/assets/images/images/3.png"/>200GB Storage</li>
								<li><img src="/assets/images/images/4.png"/>3GB BandWidth</li>
							</ul>
                            <p className="bottom">
                                <ul className="buy-now">
									<li className="tag-now-1"><a className="popup-with-zoom-anim" >Buy Now</a></li>
								</ul>
                            </p>
							</div>
						</div>
			    </div>
	        </div>
        )
    }
}

import React, { Component } from 'react';
import Slider from 'react-slick';
import { Config } from "../../config.js";

class BottomBanners extends Component {
	constructor() {
		super();
		this.state = {
			banners: []
		}
	}
	componentDidMount() {
		/** Get only top banners **/
		fetch(`${Config.apiUrl}/wp-json/wp/v2/banner?position=15&order=asc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			banners: res
	    		})
	    	})
	}
	renderBottomBanner() {
		return this.state.banners.map((banner,index) => (
			<li className="item" key={`banner-${banner.id}`}>
				<a href={banner.acf.link} title={banner.title.rendered} target="_blank">
					{/* <img src={banner.acf.image} alt={banner.title.rendered} /> */}
					<span class="bottom-banner-placeholder"></span>
				</a>
            </li>
		))
	}
	render() {
		var slickSettings = {
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true
		}
		return (
			<div className="col-sm-12">
				<section className="carousel-wrap mar-top-md"></section>
	            <ul className="carousel">
	            	<Slider {...slickSettings}>
						{this.renderBottomBanner()}
					</Slider>
	            </ul>
	        </div>
            
		)
	}

}

export default BottomBanners;
import React, { Component } from 'react';
import Slider from 'react-slick'

class TopBanners extends Component {
	constructor() {
		super();
		this.state = {
			banners: []
		}
	}
	componentDidMount() {
		/** Get only top banners **/
		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/banner?position=14&order=asc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			banners: res
	    		})
	    	})
	}
	renderTopBanner() {
		return this.state.banners.map((banner,index) => (
			<a href={banner.acf.link} title={banner.title.rendered} target="_blank" key={`banner-${index}`}>
				<img src={banner.acf.image} alt={banner.title.rendered} />
			</a>
		))
	}
	render() {
		var slickSettings = {
			autoplay: true,
	      	infinite: true,
	      	slidesToShow: 1,
	      	slidesToScroll: 1,
	      	dots: true,
	      	autoplaySpeed: 2500
		}
		return (
			<div className="wrapper pad-top-min pad-bot-md" id="top-banner">
				<div className="inner-container">
	          		<div className="row">
	            		<div className="col-sm-12">
          					<section className="banner-wrap">
								<Slider {...slickSettings}>
									{this.renderTopBanner()}
								</Slider>
							</section>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default TopBanners;
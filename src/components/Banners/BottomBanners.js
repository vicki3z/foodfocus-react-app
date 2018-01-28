import React, { Component } from 'react';
import Slider from 'react-slick';

class BottomBanners extends Component {
	constructor() {
		super();
		this.state = {
			banners: []
		}
	}
	componentDidMount() {
		/** Get only top banners **/
		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/banner?position=15&order=asc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			banners: res
	    		})
	    		console.log(this.state.banners);
	    	})
	}
	renderBottomBanner() {
		return this.state.banners.map((banner,index) => (
			<li className="item">
				<a href={banner.acf.link} title={banner.title.rendered} target="_blank">
					<img src={banner.acf.image} alt={banner.title.rendered} />
				</a>
            </li>
		))
	}
	render() {
		var slickSettings = {
			autoplay: true,
	        mobileFirst: true,
	        variableWidth: true,
	        slidesToShow: 4,
	        slidesToScroll: 1,
	        responsive: [{
	            breakpoint: 768,
	            settings: {
	            	infinite: true,
	                slidesToShow: 4,
	                slidesToScroll: 1,
	                dots: false
	            }
	        },
	        {
	            breakpoint: 480,
	            settings: {
	              	infinite: true,
	              	slidesToShow: 2,
	              	slidesToScroll: 1,
	              	dots: false
	            }
	        }]
		}
		return (
			<div class="col-sm-12">
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
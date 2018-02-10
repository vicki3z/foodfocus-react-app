import React, { Component } from 'react';
import { Config } from "../../config.js";
import Slider from 'react-slick';

class PartnerList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
          partnerList: []
	    }
  	}
  	componentDidMount() {
  		/* get page info */
      fetch(`${Config.apiUrl}/wp-json/wp/v2/media_partners?order=asc&per_page=30`)
        .then(res => res.json())
        .then(res => {
          this.setState({partnerList: res})
        })
  	}

  	render() {
      var partnerList = this.state.partnerList.map((media) => (
        <li className="item" key={`banner-${media.id}`}>
          <a href={media.acf.link} title={media.title.rendered} target="_blank">
            <img src={media.acf.image} alt={media.title.rendered} />
          </a>
        </li>
      ))
      var slickSettings = {
        autoplay: true,
        infinite: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        responsive: [{
          breakpoint: 1024,
          settings: {
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: false
          }
        },
        {
          breakpoint: 768,
          settings: {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
          }
        },
        {
          breakpoint: 480,
          settings: {
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false
          }
        }]
      }
  		return (
        <section className="media-carousel-wrap">
          <ul className="media-carousel">
            <Slider {...slickSettings}>
              {partnerList}
            </Slider>
          </ul>
        </section>
  		)
  	}

}

export default PartnerList;
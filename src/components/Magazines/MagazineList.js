import React, { Component } from 'react';
import MagazineItem from './MagazineItem.js'
import { Config } from "../../config.js";
import { Helmet } from "react-helmet";

class MagazineList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	magazineList: [],
	      	latestMagazine: {}
	    }
  	}
  	componentDidMount() {
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/magazines?filter[taxonomy]=magazine_type&filter[term]=${this.props.magazineType}&per_page=100`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			latestMagazine: res.shift()
	    		})
	    		this.setState({
	    			magazineList: res
	    		})
	    	})
  	}
  	render() {
      var title = "";
      var description = "";

      if(this.props.magazineType == "fft"){
        title = "Food Focus Thailand Magazine";
        description = "Food Focus Thailand Magazine is the monthly trade magazine, which successfully acts as a forum between Food & Beverage producers and suppliers."
      }else{
        title = "Special Supplement";
        description = "Special Supplement is the occasionally publication that comes with the seminar, which focusing on each sectors of Food & Beverage industry."
      }
  		let magazineList;

  		if(this.state.magazineList.length > 0){
  			magazineList = this.state.magazineList.map((magazine,index) => (
  				<MagazineItem magazine={magazine} key={`${this.props.magazineType}-${magazine.id}`} />
  			))
  		}else{
  			return null;
  		}
  		return (
  			<div className="inner-container">
          <Helmet>
            <meta charset="UTF-8" />
            <title>{title} - Food Focus Thailand | Be Media Focus</title>
            <meta name="Description" content={description} />
            <meta property="og:title" content={`Magazines - ${title}`} />
            <meta property="og:description" content={description} />
            <meta property="og:url" content="http://www.foodfocusthailand.com/magazines" />
            <meta property="og:locale" content="th_TH" />
            <meta propert="og:type" content="website" />
            <meta propert="og:site_name" content="Food Focus Thailand" />
            {this.state.magazineList[0] != null &&
              <meta property="og:image" content={this.state.magazineList[0].acf.image} />
            }
          </Helmet>
                <div className="row">
                	<MagazineItem magazine={this.state.latestMagazine} key={`${this.props.magazineType}-${this.state.latestMagazine.id}`} />
                </div>
				<div className="row">
					{magazineList}
				</div>
            </div>
  		)
  	}

}

export default MagazineList;
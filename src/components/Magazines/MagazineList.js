import React, { Component } from 'react';
import MagazineItem from './MagazineItem.js'
import { Config } from "../../config.js";

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
	    		console.log(this.state.latestMagazine);
	    		console.log(this.state.magazineList);
	    	})
  	}
  	render() {
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
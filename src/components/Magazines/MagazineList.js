import React, { Component } from 'react';

class MagazineList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	magazineList: []
	    }
  	}
  	componentDidMount() {
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/magazines?filter[taxonomy]=magazine_type&filter[term]=${this.props.magazineType}`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			magazineList: res
	    		})
	    		console.log(this.state.magazineList)
	    	})
  	}
  	render() {
  		return (
  			<div className="inner-container">
                <div className="row">
                </div>
            </div>
  		)
  	}

}

export default MagazineList;
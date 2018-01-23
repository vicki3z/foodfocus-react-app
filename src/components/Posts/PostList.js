import React, { Component } from 'react';

class PostList extends Component {
	constructor() {
	    super();
	    this.state = {
	      	postList: []
	    }
  	}
  	componentDidMount() {
	    fetch(`http://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			postList: res
	    		})
	    		console.log(this.state.postList);
	    	})
  	}
  	render() {
  		return (
  			<div className="row">
		        <div className="col-md-1 hidden-xs hidden-sm"></div>
                <div className="col-md-8 col-sm-12">
                	<h3 className="sub-title-bg txt-white">WHAT'S IN</h3>
                </div>
                <div className="col-md-3 col-xs-12">
                	<div className="col-sm-12">
                    	<h2 className="title">Other Articles</h2>
                	</div>
                </div>
		    </div>	
  		)
  	}

}

export default PostList;
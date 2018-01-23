import React, { Component } from 'react';

class PostDetail extends Component {
	constructor() {
	    super();
	    this.state = {
	      	postInfo: {},
	      	postTitle: "",
	      	postContent: ""
	    }
  	}
  	componentDidMount() {
	    fetch(`http://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?slug=${this.props.match.params.slug}`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			postInfo: res.shift()
	    		})
	    		this.setState({
	    			postTitle: this.state.postInfo.title.rendered
	    		})
	    		this.setState({
	    			postContent: this.state.postInfo.content.rendered
	    		})
	    		console.log(this.state.postInfo.content.rendered);
	    	})
  	}
  	render() {
  		return (
  			<div className="row">
		        <div className="col-md-1 hidden-xs hidden-sm"></div>
                <div className="col-md-8 col-sm-12">
                	<h3 className="sub-title-bg txt-white">WHAT'S IN</h3>
                	<div className="content-header mar-top">
	                    <div><span className="title light txt-black">{this.state.postTitle}</span></div>
	                </div>
	              	<div
	                	className="content-body"
	                		dangerouslySetInnerHTML={{
	                    		__html: this.state.postContent
	                	}}
	              	/>
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

export default PostDetail;
import React, { Component } from 'react';

class PostDetail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postInfo: {},
	      	postTitle: "",
	      	postContent: "",
	      	postType: "WHAT'S IN",
	      	postTypeSlug: ""
	    }
  	}
  	setPostType() {
  		/** Set Post Type From Slug **/
  		if(this.props.match.path.includes("news")){
	    	this.setState({postType: "NEWS"});
	    } else if (this.props.match.path.includes("ushare")){
	    	this.setState({postType: "U SHARE V CARE"});
	    }
  	}
  	setPostTypeSlug() {
  		var slugSplit = this.props.match.path.split("/");
  		this.setState({postTypeSlug: slugSplit[1]});
  	}
  	componentDidMount() {
  		this.setPostType();
  		this.setPostTypeSlug();
  		
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?slug=${this.props.match.params.slug}`)
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
	    		
	    	})
  	}
  	render() {
  		return (
  			<div className="row">
		        <div className="col-md-1 hidden-xs hidden-sm"></div>
                <div className="col-md-8 col-sm-12">
                	<h3 className="sub-title-bg txt-white">
                		<a href={`/${this.state.postTypeSlug}`}>
                			{this.state.postType}
                		</a>
                	</h3>
                	<div className="content-header mar-top">
	                    <div>
	                    	<span className="title light txt-black" 
	                    		dangerouslySetInnerHTML={{
	                    			__html: this.state.postTitle
	                    		}} />
	                    </div>
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
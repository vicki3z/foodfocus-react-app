import React, { Component } from 'react';
import PostItem from '../Posts/PostItem.js';

class PostList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postList: [],
	      	postType: "",
	      	postTypeSlug: ""
	    }

  	}
  	setPostType() {
  		/** Set Post Type From Slug **/
  		var type = "What's In";
  		if(this.props.match.path.includes("news")){
  			type = "News";
	    } else if (this.props.match.path.includes("ushare")){
	    	type = "ushare";
	    }
	    this.setState({postType: type});
  	}
  	setPostTypeSlug() {
  		var slugSplit = this.props.match.path.split("/");
  		this.setState({postTypeSlug: slugSplit[1]});
  	}
  	componentWillMount(){
  		this.setPostType();
	    this.setPostTypeSlug();
  	}
  	componentDidMount() {
  		
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?filter[category_name]=${this.state.postType}`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			postList: res
	    		})
	    	})
  	}
  	renderPostItem() {
  		return this.state.postList.map((post,index)=>(
  				<PostItem post={post} key={`post-${index}`} slug={this.state.postTypeSlug} />
  			));
  	}
  	render() {
  		return (
  			<div className="row">
  				<div className="col-md-10 col-sm-12">
                    <div className="content-header mar-bot">
                    	<h3 className="title light txt-black">{this.state.postType.toUpperCase()}</h3>
                    </div>
                    {this.renderPostItem()}
                </div>
            </div>
  		)
  	}

}

export default PostList;
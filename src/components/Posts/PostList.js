import React, { Component } from 'react';
import PostItem from '../Posts/PostItem.js';
import HomeMainPost from '../Posts/HomeMainPost.js';
import { Config } from "../../config.js";

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
  		
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?filter[category_name]=${this.state.postType}&per_page=100`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			postList: res
	    		})
	    	})
  	}
  	renderPostItem() {
  		return this.state.postList.map((post,index)=>(
          <HomeMainPost slug={this.state.postTypeSlug} post={post} key={`post-${post.id}`} />
  			));
  	}
  	render() {
  		return (
  			<div className="row">
  				<div className="col-md-12 col-sm-12">
              <div className="content-header mar-bot">
              	<h3 className="title light txt-black">{this.state.postType.toUpperCase()}</h3>
              </div>
              <div className="row list">
                {this.renderPostItem()}
              </div>
          </div>
        </div>
  		)
  	}

}

export default PostList;
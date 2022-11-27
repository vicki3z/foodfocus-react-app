import React, { Component } from 'react';
import SidePostItem from '../Posts/SidePostItem.js'
import { Config } from "../../config.js";
import { Helmet } from "react-helmet";

class PostDetail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postInfo: {},
	      	postTitle: "",
	      	postContent: "",
	      	postType: "WHAT'S IN",
	      	postTypeSlug: "",
	      	postCategoryName: "What's In",
	      	otherArticles: []
	    }
  	}
  	setPostType() {
  		/** Set Post Type From Slug **/
  		if(this.props.match.path.includes("news")){
	    	this.setState({postType: "NEWS"});
	    	this.setState({postCategoryName: "News"});
	    } else if (this.props.match.path.includes("ushare")){
	    	this.setState({postType: "ACTIVITY"});
	    	this.setState({postCategoryName: "ushare"});
	    }
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
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&slug=${this.props.match.params.slug}`)
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

	    //Get other posts
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?filter[category_name]=${this.state.postCategoryName}&per_page=3`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			otherArticles: res
	    		})
	    		
	    	})
  	}
  	renderOtherArticles() {
  		if(this.state.otherArticles.length > 0){
  			return this.state.otherArticles.map((post, index) =>(
  				<SidePostItem key={`${this.state.postTypeSlug}-${post.id}`} post={post} postTypeSlug={this.state.postTypeSlug} />
  			))
  		}else{
  			return null;
  		}
  	}
  	render() {
  		return (
  			<div className="row">
  				<Helmet>
		            <meta charset="UTF-8" />
		            <title>{this.state.postTitle} - {this.state.postType} - Food Focus Thailand | Be Media Focus</title>
		            <meta property="og:title" content={`${this.state.postType} - ${this.state.postTitle}`} />
		            {this.state.postInfo.acf != null &&
						<meta name="Description" content={this.state.postInfo.acf.summary} />
		            }
		            {this.state.postInfo.acf != null &&
						<meta property="og:description" content={this.state.postInfo.acf.summary} />
		            }
		            <meta property="og:url" content={`http://www.foodfocusthailand.com/${this.state.postTypeSlug}/${this.props.match.params.slug}`} />
		            <meta property="og:locale" content="th_TH" />
		            <meta propert="og:type" content="website" />
		            <meta propert="og:site_name" content="Food Focus Thailand" />
		            {this.state.postInfo.better_featured_image != null &&
		              <meta property="og:image" content={this.state.postInfo.better_featured_image.source_url} />
		              
		            }
	          	</Helmet>
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
                <div className="col-md-3 col-xs-12" id="side-articles">
                	<div className="col-sm-12">
                    	<h2 className="title">Other Articles</h2>
                    	{this.renderOtherArticles()}
                    	<div className="col-sm-12 mar-top" id="see-all">
                    		<a href={`/${this.state.postTypeSlug}`}>
                    			<h3 className="sub-title-bg txt-white col-md-6">See All</h3>
                    		</a>
                    	</div>
                	</div>
                </div>
		    </div>	
  		)
  	}

}

export default PostDetail;
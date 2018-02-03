import React, { Component } from 'react';
import SidePostItem from '../Posts/SidePostItem.js'
import { Config } from "../../config.js";

class RoadmapDetail extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postInfo: {},
	      	postTitle: "",
	      	postDate: "",
	      	postContent: "",
	      	roadMapType: "",
	      	roadMapSlug: "",
	      	otherArticles: []
	    }
  	}
  	setRoadmapType() {
  		/** Set Post Type From Slug **/
  		var type = "";
  		if(this.props.match.path.includes("roadmaps")){
	    	type = "roadmap";
	    } else if (this.props.match.path.includes("roadshows")){
	    	type = "roadshow";
	    } else {
	    	type = "seminar";
	    }

	    this.setState({roadMapType: type});
  	}
  	setRoadmapSlug() {
  		var slugSplit = this.props.match.path.split("/");
  		this.setState({postTypeSlug: slugSplit[1]});
  	}
  	componentWillMount(){
  		this.setRoadmapType();
  		this.setRoadmapSlug();
  	}
  	componentDidMount() {
  		
  		
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/${this.state.roadMapType}?slug=${this.props.match.params.slug}`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			postInfo: res.shift()
	    		})
	    		this.setState({
	    			postTitle: this.state.postInfo.title.rendered
	    		})
	    		this.setState({
	    			postDate: this.state.postInfo.acf.date
	    		})
	    		this.setState({
	    			postContent: this.state.postInfo.content.rendered
	    		})
	    		
	    	})

	    //Get other posts
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/${this.state.roadMapType}?per_page=3`)
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
  			<section className="content pad-top-lg pad-bot-lg">
  				<div className="inner-container">
		  			<div className="row">
				        <div className="col-md-1 hidden-xs hidden-sm"></div>
		                <div className="col-md-8 col-sm-12">
		                	<h3 className="sub-title-bg txt-white">{this.state.roadMapType.toUpperCase()}</h3>
		                	<div className="content-header mar-top">
			                    <h1 className="title light txt-black"
			                    	dangerouslySetInnerHTML={{__html: this.state.postTitle}} />
			                    <span className="title-3 light txt-black">{this.state.postDate}</span>
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
		                    	<h2 className="title">Other Events</h2>
		                    	{this.renderOtherArticles()}
		                    	<div className="col-sm-12 mar-top" id="see-all">
		                    		<a href={`/${this.state.postTypeSlug}`}>
		                    			<h3 className="sub-title-bg txt-white col-md-6">See All</h3>
		                    		</a>
		                    	</div>
		                	</div>
		                </div>
				    </div>
				</div>
			</section>	
  		)
  	}

}

export default RoadmapDetail;
import React, { Component } from 'react';
import { Helmet } from "react-helmet";
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
				otherArticles: [],
				pageMetaTitle: "",
				pageMetaDescription: "",
				pageMetaUrl: ""
	    }
  	}
  	setRoadmapType() {
  		/** Set Post Type From Slug **/
  		var type = "";
			var metaTitle = "";
			var metaDescription = "";
			var metaUrl = "";
  		if(this.props.match.path.includes("roadmaps")){
	    	type = "roadmap";
				metaTitle = "Roadmaps - Food Focus Thailand | Be Media Focus";
				metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Food Focus Thailand Roadmap is the edutainment seminar which broaden the knowledge in Food & Beverage Industry. Let’s inspire your innovation thoughts and share the valuable experience among technology users and technology providers.";
				metaUrl = "https://www.foodfocusthailand.com/roadmaps";
	    } else if (this.props.match.path.includes("roadshows")){
	    	type = "roadshow";
				metaTitle = "Roadshows - Food Focus Thailand | Be Media Focus";
				metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Being a part of the sustainable success of Thai Food & Beverage Industry, Food Focus Thailand has organized “Food Focus Thailand Roadshow” to provide knowledge to Food & Beverage entrepreneurs located in major cities in Thailand.";
				metaUrl = "https://www.foodfocusthailand.com/roadshows";
	    } else {
	    	type = "seminar";
				metaTitle = "Seminars & Conferences - Food Focus Thailand | Be Media Focus";
				metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, with the expertise in organizing Food Focus Thailand Roadmap, we also organized seminar & conferences that definitely meet the partners’ needs.";
				metaUrl = "https://www.foodfocusthailand.com/seminars";
	    }

	    this.setState({roadMapType: type});
			this.setState({pageMetaTitle: metaTitle});
			this.setState({pageMetaDescription: metaDescription});
			this.setState({pageMetaUrl: metaUrl});
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
  		
  		
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/${this.state.roadMapType}?${Config.acfFormat}&slug=${this.props.match.params.slug}`)
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
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/${this.state.roadMapType}?${Config.acfFormat}&per_page=3`)
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
				<>
					<Helmet>
						<meta charset="UTF-8" />
						<title>{this.state.postTitle} - {this.state.pageMetaTitle}</title>
						<meta property="og:title" content={`${this.state.postTitle} - ${this.state.pageMetaTitle}`} />
						<meta name="Description" content={this.state.pageMetaDescription} />
						<meta property="og:description" content={this.state.pageMetaDescription} />
						<meta property="og:url" content={`${this.state.pageMetaUrl}/${this.props.match.params.slug}`} />
						<meta property="og:locale" content="th_TH" />
						<meta propert="og:type" content="website" />
						<meta propert="og:site_name" content="Food Focus Thailand" />
					</Helmet>
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
				</>
  		)
  	}

}

export default RoadmapDetail;
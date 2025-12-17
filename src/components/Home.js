import React, { Component } from 'react';
import PostHighlight from './Posts/PostHighlight.js';
import HomeMainPost from './Posts/HomeMainPost.js';
import HomePostItem from './Posts/HomePostItem.js';
import BottomBanners from './Banners/BottomBanners.js';
import Subscribe from './Subscribe.js';
import '../assets/styles/home.css';
import '../assets/styles/banner.css';
import { Config } from "../config.js";
import { Helmet } from "react-helmet";
import Advertisement from './Banners/Advertisement';

class Home extends Component {
	constructor(){
		super()
		this.state = {
			siteInfo: {
				welcome: "WELCOME TO FOOD FOCUS THAILAND MAGAZINE",
				intro1: "FOOD FOCUS THAILAND MAGAZINE",
				intro2: "THE NO.1 INDUSTRY-FOCUSED MAGAZINE FOR FOOD & BEVERAGE PROFESSIONALS"
			},
			magazine: null,
			mainArticles: [],
			highlightStory: {},
			newsArticles: [],
			ushareArticles: [],
			eventsArticles: [],
			advertisement: []
		}
	}

	componentDidMount() {
		var type = "What's In";
		fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&filter[category_name]=Homepage&order=asc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			mainArticles: res
	    		})
	    		this.setState({
	    			highlightStory: this.state.mainArticles.shift()
	    		})
	    	})

	    /** Get 4 latest news **/
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&filter[category_name]=News&per_page=4`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			newsArticles: res
	    		})
	    	})

	    /** Get 4 latest Ushare **/
	    var type = "U Share";
		fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&filter[category_name]=ushare&per_page=4`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			ushareArticles: res
	    		})
	    		
	    	})

		fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&filter[category_name]=advertisement&order=asc&per_page=3`)
				.then(res => res.json())
				.then(res => {

					this.setState({
	    			advertisement: res
	    		})
					
				})

	   	/** Get Roadmap, Roadshow, Seminar **/
	   	fetch(`${Config.apiUrl}/wp-json/wp/v2/roadmap?${Config.acfFormat}&filter[meta_key]=homepage&filter[meta_value]=true&per_page=2`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			eventsArticles: res
	    		})
	    		
	    		fetch(`${Config.apiUrl}/wp-json/wp/v2/roadshow?${Config.acfFormat}&filter[meta_key]=homepage&filter[meta_value]=true&per_page=2`)
			    	.then(res => res.json())
			    	.then(res => {
			    		this.setState({
			    			eventsArticles: this.state.eventsArticles.concat(res)
			    		})

			    		fetch(`${Config.apiUrl}/wp-json/wp/v2/seminar?${Config.acfFormat}&filter[meta_key]=homepage&filter[meta_value]=true&per_page=2`)
					    	.then(res => res.json())
					    	.then(res => {
					    		this.setState({
					    			eventsArticles: this.state.eventsArticles.concat(res)
					    		})
					    		
					    	})
			    		
			    	})
	    	})

	    /** Get Latest FFT Magazine **/
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/magazines?${Config.acfFormat}&filter[taxonomy]=magazine_type&filter[term]=fft&per_page=1`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			magazine: res.shift()
	    		})
	    		
	    	})
	}

	renderHeader(){
		if(this.state.magazine != null){
			return(
				<div className="middle-block">
					<div className="book-img">
						<a href={this.state.magazine.acf.link} title={`No. ${this.state.magazine.acf.magazine_no}`} target="_blank">
							<img src={this.state.magazine.acf.image} alt={`Food Focus Thailand Magazine No. ${this.state.magazine.acf.magazine_no}`} />
						</a>
					</div>
					<div className="desc">
						<h3 className="sub-title sub-title-bg txt-white">{this.state.siteInfo.welcome}</h3>
						<h2 className="intro txt-white mar-top">{this.state.siteInfo.intro1}</h2>
						<p className="content txt-white mar-top-xs">{this.state.siteInfo.intro2}</p>
						<div className="latest-issue">
							<div className="latest-issue-color mar-top"></div>
	            			<div className="latest-issue-content mar-top">
	            				<p className="sub-title txt-white">LATEST ISSUE</p>
	            				<p className="sub-title-2 txt-white">{this.state.magazine.title.rendered.toUpperCase()}</p>
	            			</div>
						</div>
						<Subscribe />
					</div>
				</div>
			)
		}else{
			return null
		}
	}

	render() {
		let postHighlight;
		if(this.state.highlightStory.title !== undefined){
			postHighlight = <PostHighlight slug="whats-in" post={this.state.highlightStory} />
		}else{
			postHighlight = null;
		}

		let mainArticles;
		if(this.state.mainArticles.length > 0){
			mainArticles = this.state.mainArticles.map((post,index) => (
				<HomeMainPost slug="whats-in" post={post} key={`whats-in-${index}`} />
			))
		}else{
			mainArticles = null
		}

		let newsArticles;
		if(this.state.newsArticles.length > 0){
			newsArticles = this.state.newsArticles.map((post,index) => (
				<HomePostItem slug="news" post={post} key={`news-${post.id}`} index={index} />
			))
		}else{
			newsArticles = null;
		}

		let ushareArticles;
		if(this.state.ushareArticles.length > 0){
			ushareArticles = this.state.ushareArticles.map((post,index) => (
				<HomePostItem slug="ushare" post={post} key={`ushare-${post.id}`} index={index} />
			))
		}else{
			ushareArticles = null;
		}

		let eventsArticles;
		if(this.state.eventsArticles.length > 0){
			eventsArticles = this.state.eventsArticles.map((post,index) => (
				<HomePostItem slug={`${post.type}s`} post={post} key={`event-${post.id}`} index={index} />
			))
		}else{
			eventsArticles = null;
		}

		let advertisements;
		if(this.state.advertisement.length > 0) {
			advertisements = this.state.advertisement.map((ad, index) => (
				<Advertisement
					key={`ad-${index}`}
					link={ad.link}
					media={{
						src: ad.better_featured_image.source_url,
						width: ad.better_featured_image.media_details.width,
						height: ad.better_featured_image.media_details.height
					}}
				/>
			))
		}
		return(
			<div>
				<Helmet>
					<meta charset="UTF-8" />
					<title>Food Focus Thailand | Be Media Focus</title>
					<meta name="Description" content="Discover more about the no. 1 leading industry-focused magazine for food & beverage from Food Focus Thailand" />
					<meta property="og:title" content="Food Focus Thailand | Be Media Focus" />
					<meta property="og:description" content="Discover more about the no. 1 leading industry-focused magazine for food & beverage from Food Focus Thailand" />
					<meta property="og:url" content="https://www.foodfocusthailand.com/index.html" />
					<meta property="og:locale" content="th_TH" />
					<meta propert="og:type" content="website" />
					<meta propert="og:site_name" content="Food Focus Thailand" />
					{this.state.magazine != null &&
						<meta property="og:image" content={this.state.magazine.acf.image} />
						
					}
					
				</Helmet>
				<section className="banner-wrap">
					<section className="item">
						<div className="thumb"></div>
						<div className="caption">
							<div className="inner-container">
								{this.renderHeader()}
							</div>
						</div>
					</section>
				</section>
				<div className="wrapper pad-top-lg pad-bot-lg" id="main-articles-wrapper">
					<div className="inner-container">
            			<div className="row">
              				<div className="col-sm-12">
                				<h2 className="title light">WHAT'S IN</h2>
              				</div>
              				<div className="col-sm-12 col-md-8 mar-top">
              					{postHighlight}
              				</div>
              				{mainArticles}
						</div>
						<div className="row mar-top" id="see-all">
							<div className="col-md-offset-10 col-md-2">
	      						<a href="/whats-in">
	      							<h3 className="sub-title-bg txt-white" id="highlight-see-all">See All</h3>
	      						</a>
	      					</div>
      					</div>
					</div>
				</div>
				<div className="wrapper pad-top-md" id="advertisement">
					<div className="inner-container">
						<div className="row">
							{advertisements}
						</div>
					</div>
				</div>
				<div className="wrapper pad-bot-lg pad-top-lg" id="other-articles-wrapper">
					<div className="inner-container">
            			<div className="row">
              				<div className="col-sm-12">
                				<h2 className="title light">NEWS & ACTIVITIES</h2>
              				</div>
              				<div className="col-sm-6 col-md-4 mar-top">
              					<ul className="list-primary">
              						{newsArticles}
              					</ul>
              					<div className="mar-top" id="see-all">
              						<a href="/news">
              							<h3 className="sub-title-bg txt-white col-md-3 col-sm-3">See All</h3>
              						</a>
              					</div>
              				</div>
              				<div className="col-sm-6 col-md-4 mar-top">
              					<ul className="list-primary">
              						{eventsArticles}
              					</ul>
              				</div>
              				<div className="col-sm-6 col-md-4 mar-top">
              					<ul className="list-primary">
              						{ushareArticles}
              					</ul>
              					<div className="mar-top" id="see-all">
              						<a href="/ushare">
              							<h3 className="sub-title-bg txt-white col-md-3 col-sm-3">See All</h3>
              						</a>
              					</div>
              				</div>
              				<BottomBanners />
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
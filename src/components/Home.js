import React, { Component } from 'react';
import PostHighlight from './Posts/PostHighlight.js';
import '../assets/styles/home.css';

class Home extends Component {
	constructor(){
		super()
		this.state = {
			siteInfo: {
				welcome: "WELCOME TO FOOD FOCUS THAILAND MAGAZINE",
				intro1: "FOOD FOCUS THAILAND MAGAZINE",
				intro2: "THE NO.1 INDUSTRY-FOCUSED MAGAZINE FOR FOOD & BEVERAGE PROFESSIONALS"
			},
			magazine: {
				issueMonth: "January 2018",
				issueNo: "142",
				image: "http://foodfocusthailand.com/images/upload/Food_Jan_142.jpg",
				url: "http://www.foodfocusthailand.com/click.php?id=ebook-142"
			},
			mainArticles: [],
			highlightStory: {}
		}
	}

	componentDidMount() {
		var type = "What's In";
		fetch(`http://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?filter[category_name]=Homepage&order=asc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			mainArticles: res
	    		})
	    		this.setState({
	    			highlightStory: this.state.mainArticles.shift()
	    		})
	    		console.log(this.state.highlightStory);
	    		console.log(this.state.mainArticles);
	    	})
	}

	render() {
		let postHighlight;
		if(this.state.highlightStory.title !== undefined){
			postHighlight = <PostHighlight slug="whats-in" post={this.state.highlightStory} />
		}else{
			postHighlight = null;
		}
		return(
			<div>
				<section className="banner-wrap">
					<section className="item">
						<div className="thumb"></div>
						<div className="caption">
							<div className="inner-container">
								<div className="middle-block">
									<div className="book-img">
										<a href={this.state.magazine.url} title={`No. ${this.state.magazine.issueNo}`} target="_blank">
											<img src={this.state.magazine.image} alt={`Food Focus Thailand Magazine No. ${this.state.magazine.issueNo}`} />
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
	                            				<p className="sub-title-2 txt-white">{this.state.magazine.issueMonth.toUpperCase()}</p>
	                            			</div>
										</div>
										<div className="mar-top">
											<form className="subscribe-form">
                              					<input type="email" placeholder="Email" name="emailInput" className="form-control" />
                              					<div className="subscribe">
                              						<a className="txt-mediumer subscribe-btn">SUBSCRIBE TO NEWSLETTER</a>
                              					</div>
                            				</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</section>
				<div className="wrapper pad-top-lg pad-bot-lg" id="articles-wrapper">
					<div className="inner-container">
            			<div className="row">
              				<div className="col-sm-12">
                				<h2 className="title light">WHAT'S IN</h2>
              				</div>
              				<div className="col-sm-12 col-md-8 mar-top">
              					{postHighlight}
              				</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home;
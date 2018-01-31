import React, { Component } from 'react';
import PostHighlight from './Posts/PostHighlight.js';
import HomeMainPost from './Posts/HomeMainPost.js';
import HomePostItem from './Posts/HomePostItem.js';
import BottomBanners from './Banners/BottomBanners.js';
import Subscribe from './Subscribe.js';
import '../assets/styles/home.css';
import '../assets/styles/banner.css';

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
				issueMonth: "February 2018",
				issueNo: "143",
				image: "http://foodfocusthailand.com/images/upload/feb_143.jpg",
				url: "http://www.foodfocusthailand.com/click.php?id=ebook-143"
			},
			mainArticles: [],
			highlightStory: {},
			newsArticles: [],
			ushareArticles: []
		}
	}

	componentDidMount() {
		var type = "What's In";
		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?filter[category_name]=Homepage&order=asc`)
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
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?filter[category_name]=News&per_page=4`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			newsArticles: res
	    		})
	    		console.log(this.state.newsArticles);
	    	})

	    /** Get 4 latest Ushare **/
	    var type = "U Share";
		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?filter[category_name]=ushare&per_page=4`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			ushareArticles: res
	    		})
	    		
	    	})
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
				<HomePostItem slug="news" post={post} key={`news-${index}`} index={index} />
			))
		}else{
			newsArticles = null;
		}

		let ushareArticles;
		if(this.state.ushareArticles.length > 0){
			ushareArticles = this.state.ushareArticles.map((post,index) => (
				<HomePostItem slug="ushare" post={post} key={`news-${index}`} index={index} />
			))
		}else{
			ushareArticles = null;
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
										<Subscribe />
									</div>
								</div>
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
					</div>
				</div>
				<div className="wrapper pad-bot-lg pad-top-lg" id="other-articles-wrapper">
					<div className="inner-container">
            			<div className="row">
              				<div className="col-sm-12">
                				<h2 className="title light">NEWS & ACTIVITIES</h2>
              				</div>
              				<div class="col-sm-6 col-md-4 mar-top">
              					<ul class="list-primary">
              						{newsArticles}
              					</ul>
              					<div className="mar-top">
              						<a href="/news" className="txt-black title-3-thumb">ดูข่าวอื่นๆ ></a>
              					</div>
              				</div>
              				<div class="col-sm-6 col-md-4 mar-top">
              					<ul class="list-primary">
              						<li>
              							<a href="http://www.foodfocusthailand.com/roadmap/2018/functional_mar.html" title="FFT Roadmap #42" target="_blank">
              								<img src="https://www.foodfocusthailand.com/images/upload/Functional_42.jpg" alt="FFT Roadmap #42" />
              								<span class="title-3-thumb">See you in FFT Roadmap #42: Functional F&B Edition เปิดรับลงทะเบียนแล้ววันนี้!</span>
              								
              							</a>
              						</li>
              						<li>
              							<a href="http://www.foodfocusthailand.com/roadshow/2018/korat_feb.html" title="Food Safety Roadshow #1" target="_blank">
              								<span class="title-3-thumb">Food Safety Roadshow #1: วันศุกร์ที่ 9 กุมภาพันธ์ 2561 โรงแรมสีมาธานี จังหวัดนครราชสีมา</span>
              							</a>
              						</li>
              					</ul>
              				</div>
              				<div class="col-sm-6 col-md-4 mar-top">
              					<ul class="list-primary">
              						{ushareArticles}
              					</ul>
              					<div className="mar-top">
              						<a href="/ushare" className="txt-black title-3-thumb">ดูประกาศอื่นๆ ></a>
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
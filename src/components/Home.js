import React, { Component } from 'react';
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
			}
		}
	}

	render() {
		return(
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
                            				<p class="sub-title txt-white">LATEST ISSUE</p>
                            				<p class="sub-title-2 txt-white">{this.state.magazine.issueMonth.toUpperCase()}</p>
                            			</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</section>
		)
	}
}

export default Home;
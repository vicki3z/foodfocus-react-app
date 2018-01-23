import React, { Component } from 'react';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			menus: [
				{
					id: 1,
					name: "Home",
					url: "/",
					submenu: []
				},
				{
					id: 2,
					name: "About Us",
					url: "/about-us",
					submenu: [
						{
							id: 3,
							name: "Advertiser",
							url: "/about-us#advertiser"
						},
						{
							id: 4,
							name: "Board of Consultants/Endorsements",
							url: "/about-us#board"
						}
					]
				},
				{
					id: 5,
					name: "Magazine",
					url: "/magazines",
					submenu: [
						{
							id: 6,
							name: "Food Focus Thailand Magazines",
							url: "/magazines#foodfocus"
						},
						{
							id: 7,
							name: "Special Supplements",
							url: "/magazines#specialsup"
						}
					]
				},
				{
					id: 8,
					name: "Events",
					url: "/events",
					submenu: [
						{
							id: 9,
							name: "Roadmap",
							url: "/roadmaps"
						},
						{
							id: 10,
							name: "Roadshow",
							url: "/roadshows"
						},
						{
							id: 11,
							name: "Seminar & Conference",
							url: "/seminars"
						},
						{
							id: 12,
							name: "Exhibitions",
							url: "/events"
						}
					]
				},
				{
					id: 13,
					name: "Services",
					url: "/services",
					submenu: [
						{
							id: 14,
							name: "Contract Publication",
							url: "/services"
						},
						{
							id: 15,
							name: "Anniversary & Annual Report",
							url: "/services"
						},
						{
							id: 16,
							name: "Company Profile & Product Catalogue",
							url: "/services"
						},
						{
							id: 17,
							name: "Event Organizer",
							url: "/services"
						}
					]
				},
				{
					id: 18,
					name: "Contact Us",
					url: "/contact-us",
					submenu: []
				},
			]
		}
	}

	renderSubMenuItem(submenus){
		return submenus.map((menu,index) => (
			<li>
				<a href={menu.url} title={menu.name}>
					<span className="visual-img">
						<img src="http://www.foodfocusthailand.com/images/icons/advertisers.png" alt={menu.name} />
					</span>
					<span className="text txt-black">{menu.name}</span>
				</a>
			</li>
		))
	}

	renderMenuItem() {
		return this.state.menus.map((menu,index) => (
			<li className={menu.submenu.length > 0 ? "has-sub" : ""}>
				<a href={menu.url} title={menu.name}>{menu.name}</a>
				{menu.submenu.length > 0 &&
					<div className="mega-menu">
						<div className="menu-wrap white">
							<div className="inner-menu">
	                          	<div className="level-1 life-stage">
	                            	<ul>
	                            		{this.renderSubMenuItem(menu.submenu)}
	                            	</ul>
	                            </div>
	                        </div>
	                    </div>
					</div>
				}
			</li>
		))
	}

	render() {
		return (
			<header id="header">
		        <div className="inner-header">
		          	<div className="content">
		            	<div className="hamburger-box hidden-md-up">
		              		<div className="hamburger-inner"></div>
		            	</div>
		            	<a href="/" title="" target="_blank" className="logo hidden-xs hidden-sm">
		            		<img src="http://www.foodfocusthailand.com/images/logo.png" alt="" />
		            	</a>
		            	<a href="http://www.foodfocusthailand.com/index.html" title="" target="_blank" className="logo hidden-md-up">
		            		<img src="http://www.foodfocusthailand.com/images/logo.png" alt="" />
		            	</a>
		            	<div className="right-header">
              				<section className="search-block small hidden-xs hidden-sm">
                				<form action="#" method="get" name="search-form" id="search-form">
                					<a href="#" target="_blank">
                						<img src="http://www.foodfocusthailand.com/images/icons/ic-search.svg" alt="undefined" />
                					</a>
		                  			<div className="search-input">
		                          		<input type="text" name="search-input" id="search-input" placeholder="Coming Soon..." />
		                  			</div>
	                			</form>
              				</section>
              				<nav className="global-nav hidden-xs hidden-sm">
                				<ul>
                					{this.renderMenuItem()}
                				</ul>
                			</nav>
		            	</div>
		            </div>
		        </div>
		    </header>
		)
	}

}

export default Header;
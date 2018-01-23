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
							url: "/about-us#advertiser",
							icon: "http://www.foodfocusthailand.com/images/icons/advertisers.png"
						},
						{
							id: 4,
							name: "Board of Consultants/Endorsements",
							url: "/about-us#board",
							icon: "http://www.foodfocusthailand.com/images/icons/board.png"
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
							url: "/magazines#foodfocus",
							icon: "http://www.foodfocusthailand.com/images/icons/fft_magazine.png"
						},
						{
							id: 7,
							name: "Special Supplements",
							url: "/magazines#specialsup",
							icon: "http://www.foodfocusthailand.com/images/icons/fft_supplement.png"
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
							url: "/roadmaps",
							icon: "http://www.foodfocusthailand.com/images/icons/roadmap.png"
						},
						{
							id: 10,
							name: "Roadshow",
							url: "/roadshows",
							icon: "http://www.foodfocusthailand.com/images/icons/roadshow.png"
						},
						{
							id: 11,
							name: "Seminar & Conference",
							url: "/seminars",
							icon: "http://www.foodfocusthailand.com/images/icons/seminar.png"
						},
						{
							id: 12,
							name: "Exhibitions",
							url: "/events",
							icon: "http://www.foodfocusthailand.com/images/icons/exhibition.png"
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
							url: "/services",
							icon: "http://www.foodfocusthailand.com/images/icons/contract_pub.png"
						},
						{
							id: 15,
							name: "Anniversary & Annual Report",
							url: "/services",
							icon: "http://www.foodfocusthailand.com/images/icons/annual_report.png"
						},
						{
							id: 16,
							name: "Company Profile & Product Catalogue",
							url: "/services",
							icon: "http://www.foodfocusthailand.com/images/icons/profile_catalog.png"
						},
						{
							id: 17,
							name: "Event Organizer",
							url: "/services",
							icon: "http://www.foodfocusthailand.com/images/icons/event_org.png"
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
						<img src={menu.icon} alt={menu.name} />
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

	renderMobileMenu() {
		return this.state.menus.map((menu,index) => (
			<div className="collapse-item">
				<h3 className="collapse-header no-content">
					<a href={menu.url} title={menu.name}>
						{menu.name}
					</a>
				</h3>
			</div>
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

        		<div className="mega-menu-mobile hidden-md-up">
        			<div className="outer-menu">
        				{this.renderMobileMenu()}
        			</div>
        		</div>
		    </header>
		)
	}

}

export default Header;
import React, { Component } from "react";
import SearchComponent from "./SearchComponent.js";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menus: [
        {
          id: 1,
          name: "Home",
          url: "/index.html",
          submenu: []
        },
        {
          id: 2,
          name: "About Us",
          url: "/about-us.html",
          submenu: [
            {
              id: 3,
              name: "Advertiser",
              url: "/about-us.html#advertiser",
              icon:
                "https://www.foodfocusthailand.com/images/icons/advertisers.png"
            },
            {
              id: 4,
              name: "Board of Consultants/Endorsements",
              url: "/about-us.html#board",
              icon: "https://www.foodfocusthailand.com/images/icons/board.png"
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
              url: "/magazines/fft",
              icon:
                "https://www.foodfocusthailand.com/images/icons/fft_magazine.png"
            },
            {
              id: 7,
              name: "Special Supplements",
              url: "/magazines/supplement",
              icon:
                "https://www.foodfocusthailand.com/images/icons/fft_supplement.png"
            }
          ]
        },
        {
          id: 8,
          name: "Events",
          url: "/event-exhibition",
          submenu: [
            {
              id: 9,
              name: "Roadmap",
              url: "/roadmaps",
              icon: "https://www.foodfocusthailand.com/images/icons/roadmap.png"
            },
            {
              id: 10,
              name: "Roadshow",
              url: "/roadshows",
              icon:
                "https://www.foodfocusthailand.com/images/icons/roadshow.png"
            },
            {
              id: 11,
              name: "Seminar & Conference",
              url: "/seminars",
              icon: "https://www.foodfocusthailand.com/images/icons/seminar.png"
            },
            {
              id: 12,
              name: "Exhibitions",
              url: "/event-exhibition",
              icon:
                "https://www.foodfocusthailand.com/images/icons/exhibition.png"
            }
          ]
        },
        {
          id: 13,
          name: "Services",
          url: "/services.html",
          submenu: [
            {
              id: 14,
              name: "Contract Publication",
              url: "/services.html#publication",
              icon:
                "https://www.foodfocusthailand.com/images/icons/contract_pub.png"
            },
            {
              id: 15,
              name: "Anniversary & Annual Report",
              url: "/services.html#annual-report",
              icon:
                "https://www.foodfocusthailand.com/images/icons/annual_report.png"
            },
            {
              id: 16,
              name: "Company Profile & Product Catalogue",
              url: "/services.html#catalog",
              icon:
                "https://www.foodfocusthailand.com/images/icons/profile_catalog.png"
            },
            {
              id: 17,
              name: "Event Organizer",
              url: "/services.html#event",
              icon:
                "https://www.foodfocusthailand.com/images/icons/event_org.png"
            }
          ]
        },
        {
          id: 18,
          name: "Contact Us",
          url: "/contact-us.html",
          submenu: []
        }
      ]
    };
  }

  renderSubMenuItem(submenus) {
    return submenus.map((menu, index) => (
      <li key={`sub-menu-${menu.id}`}>
        <a href={menu.url} title={menu.name}>
          <span className="visual-img">
            <img src={menu.icon} alt={menu.name} />
          </span>
          <span className="text txt-black">{menu.name}</span>
        </a>
      </li>
    ));
  }

  renderMenuItem() {
    return this.state.menus.map((menu, index) => (
      <li
        key={`menu-${menu.id}`}
        className={menu.submenu.length > 0 ? "has-sub" : ""}
      >
        <a href={menu.url} title={menu.name}>
          {menu.name}
        </a>
        {menu.submenu.length > 0 && (
          <div className="mega-menu">
            <div className="menu-wrap white">
              <div className="inner-menu">
                <div className="level-1 life-stage">
                  <ul>{this.renderSubMenuItem(menu.submenu)}</ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </li>
    ));
  }

  renderMobileMenu() {
    return this.state.menus.map((menu, index) => (
      <div className="collapse-item" key={`menu-${menu.id}`}>
        <h3
          className={
            menu.submenu.length > 0
              ? "collapse-header"
              : "collapse-header no-content"
          }
        >
          <a href={menu.url} title={menu.name}>
            {menu.name}
          </a>
        </h3>
        {menu.submenu.length > 0 && (
          <div className="collapse-inner">
            <div className="mega-menu">
              <div className="inner-menu">
                <div className="level-1">
                  <ul>
                    {menu.submenu.map((sub, index) => (
                      <li key={`sub-menu-${sub.id}`}>
                        <a
                          href={sub.url}
                          title={sub.name}
                          className="level-1-title"
                        >
                          {sub.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    ));
  }

  render() {
    return (
      <header id="header">
        <div className="inner-header">
          <div className="content">
            <a href="/index.html" title="" className="logo hidden-xs hidden-sm">
              <img
                src="https://www.foodfocusthailand.com/images/logo.png"
                alt=""
              />
            </a>
            <a
              href="https://www.foodfocusthailand.com/index.html"
              title=""
              target="_blank"
              rel="noopener noreferrer"
              className="logo hidden-md-up"
            >
              <img
                src="https://www.foodfocusthailand.com/images/logo.png"
                alt=""
              />
            </a>
            <div className="right-header">
              <section className="search-block small hidden-xs hidden-sm">
                <SearchComponent />
              </section>
              <nav className="global-nav hidden-xs hidden-sm">
                <ul>{this.renderMenuItem()}</ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="inner-header hidden-md-up">
          <div className="content">
            <div className="hamburger-box hidden-md-up">
              <div className="hamburger-inner" />
            </div>
            <div className="hidden-md-up">
              <section className="search-block small">
                <SearchComponent />
              </section>
            </div>
          </div>
        </div>

        <div className="mega-menu-mobile hidden-md-up">
          <div className="outer-menu">{this.renderMobileMenu()}</div>
        </div>
      </header>
    );
  }
}

export default Header;

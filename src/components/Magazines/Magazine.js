import React, { Component } from "react";
import MagazineList from "./MagazineList.js";
import { Config } from "../../config.js";
import '../../assets/styles/magazine.css';


class Magazine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageContent: "",
      pageTitle: "",
      magazineActive: "fft"
    };
    this.setActive = this.setActive.bind(this);
  }
  componentWillMount() {
    this.setActiveFromSlug();
  }
  componentDidMount() {
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/pages?slug=food-focus-thailand-magazine`
    )
      .then(res => res.json())
      .then(res => {
        var pageInfo = res.shift();
        this.setState({
          pageContent: pageInfo.content.rendered
        });
        this.setState({
          pageTitle: pageInfo.title.rendered
        });
      });
  }
  setActive(active) {
    this.setState({
      magazineActive: active
    });
  }
  setActiveFromSlug() {
    if (this.props.match.params.slug === "supplement") {
      this.setState({
        magazineActive: "supplement"
      });
    } else {
      this.setState({
        magazineActive: "fft"
      });
    }
    window.history.pushState("object or string", "Title", "/magazines/");
  }
  render() {
    return (
      <div>
        <section className="banner-wrap">
          <section className="item medium">
            <div className="thumb" />
            <div className="caption">
              <div className="inner-container">
                <div className="middle-block">
                  <h2
                    className="intro txt-white"
                    dangerouslySetInnerHTML={{
                      __html: this.state.pageTitle
                    }}
                  />
                  <div
                    className="content txt-white"
                    dangerouslySetInnerHTML={{
                      __html: this.state.pageContent
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </section>
        <section data-tab className="services-tab pad-top-lg magazine">
          <div data-tab-header className="row-centered narrow">
            <a
              href="#foodfocus"
              onClick={() => this.setActive("fft")}
              title=""
              target="_blank"
              className={
                this.state.magazineActive === "fft" ? "col active" : "col"
              }
            >
              <img
                src="https://www.foodfocusthailand.com/images/icons/logo_foodfocus.png"
                alt="FFT Magazine"
              />
            </a>
            <a
              href="#specialsup"
              onClick={() => this.setActive("supplement")}
              title=""
              target="_blank"
              className={
                this.state.magazineActive === "supplement"
                  ? "col active"
                  : "col"
              }
            >
              <img
                src="https://www.foodfocusthailand.com/images/icons/logo_suplement.png"
                alt="Supplement"
              />
            </a>
          </div>
          <div className="row-centered narrow">
            <h2 className="title-primary-thumb mar-bot-md mar-top-md">
              SUBSCRIBE FOR FREE{" "}
              <span>
                <a
                  href="https://goo.gl/forms/oP25aDCXWbNASbXh2"
                  title="CLICK HERE"
                  className="txt-black subscribe"
                >
                  CLICK HERE
                </a>
              </span>
            </h2>
          </div>
          <section data-tab-content className="magazine-tab-content pad-bot-lg">
            <div
              id="foodfocus"
              className={
                this.state.magazineActive === "fft" ? "inner active" : "inner"
              }
            >
              <MagazineList magazineType="fft" />
            </div>
            <div
              id="specialsup"
              className={
                this.state.magazineActive === "supplement"
                  ? "inner active"
                  : "inner"
              }
            >
              <MagazineList magazineType="supplement" />
            </div>
          </section>
        </section>
      </div>
    );
  }
}

export default Magazine;

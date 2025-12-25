import React, { Component } from "react";
import { Helmet } from "react-helmet";
import RoadmapList from "./RoadmapList.js";
import { Config } from "../../config.js";

class RoadmapListWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roadMapType: "",
      roadMapSlug: "",
      pageTitle: null,
      pageContent: null,
      eventYears: [],
      yearActive: null,
      pageInfoSlug: "",
      pageMetaTitle: "",
      pageMetaDescription: "",
      pageMetaUrl: ""
    };
    this.setYearActive = this.setYearActive.bind(this);
  }
  setRoadmapType() {
    /** Set Post Type From Slug **/
    var type = "";
    var infoSlug = "";
    var metaTitle = "";
    var metaDescription = "";
    var metaUrl = "";
    if (this.props.match.path.includes("roadmaps")) {
      type = "roadmap";
      infoSlug = "food-focus-thailand-roadmap";
      metaTitle = "Roadmaps - Food Focus Thailand | Be Media Focus";
      metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Food Focus Thailand Roadmap is the edutainment seminar which broaden the knowledge in Food & Beverage Industry. Let’s inspire your innovation thoughts and share the valuable experience among technology users and technology providers.";
      metaUrl = "https://www.foodfocusthailand.com/roadmaps";
    } else if (this.props.match.path.includes("roadshows")) {
      type = "roadshow";
      infoSlug = "food-focus-thailand-roadshow";
      metaTitle = "Roadshows - Food Focus Thailand | Be Media Focus";
      metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Being a part of the sustainable success of Thai Food & Beverage Industry, Food Focus Thailand has organized “Food Focus Thailand Roadshow” to provide knowledge to Food & Beverage entrepreneurs located in major cities in Thailand.";
      metaUrl = "https://www.foodfocusthailand.com/roadshows";
    } else {
      type = "seminar";
      infoSlug = "seminars-conferences";
      metaTitle = "Seminars & Conferences - Food Focus Thailand | Be Media Focus";
      metaDescription = "Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, with the expertise in organizing Food Focus Thailand Roadmap, we also organized seminar & conferences that definitely meet the partners’ needs.";
      metaUrl = "https://www.foodfocusthailand.com/seminars";
    }

    this.setState({ roadMapType: type });
    this.setState({ pageInfoSlug: infoSlug });
    this.setState({ pageMetaTitle: metaTitle });
    this.setState({ pageMetaDescription: metaDescription });
    this.setState({ pageMetaUrl: metaUrl });
  }
  setRoadmapSlug() {
    var slugSplit = this.props.match.path.split("/");
    this.setState({ roadMapSlug: slugSplit[1] });
  }
  componentWillMount() {
    this.setRoadmapType();
    this.setRoadmapSlug();
  }
  componentDidMount() {
    /* get page info */
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/pages?${Config.acfFormat}&slug=${this.state.pageInfoSlug}`
    )
      .then(res => res.json())
      .then(res => {
        var pageInfo = res.shift();
        this.setState({
          pageTitle: pageInfo.title.rendered
        });
        this.setState({
          pageContent: pageInfo.content.rendered
        });
      });

    /* get all event_year */
    fetch(`${Config.apiUrl}/wp-json/wp/v2/event_year?order=desc`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          eventYears: res
        });

        this.setState({
          yearActive: this.state.eventYears[0].id
        });
      });
  }
  setYearActive(yearId) {
    this.setState({
      yearActive: yearId
    });
  }
  renderEventYears() {
    if (this.state.eventYears.length > 0) {
      return this.state.eventYears.map((year, index) => (
        <a
          href={"#" + year.name}
          title=""
          onClick={() => {
            this.setYearActive();
          }}
          className={
            "col " + (year.id === this.state.yearActive ? "active" : "")
          }
        >
          <h3 className="title-primary light">{year.name}</h3>
        </a>
      ));
    } else {
      return null;
    }
  }
  renderRoadMapList() {
    if (this.state.eventYears.length > 0) {
      return this.state.eventYears.map((year, index) => (
        <RoadmapList
          key={`event-year-${year.name}`}
          year={year}
          yearActive={this.state.yearActive}
          index={index}
          roadMapSlug={this.state.roadMapSlug}
          roadMapType={this.state.roadMapType}
        />
      ));
    } else {
      return null;
    }
  }
  render() {
    return (
      <div>
        <Helmet>
          <meta charset="UTF-8" />
          <title>{this.state.pageMetaTitle}</title>
          <meta property="og:title" content={this.state.pageMetaTitle} />
          <meta name="Description" content={this.state.pageMetaDescription} />
          <meta property="og:description" content={this.state.pageMetaDescription} />
          <meta property="og:url" content={this.state.pageMetaUrl} />
          <meta property="og:locale" content="th_TH" />
          <meta propert="og:type" content="website" />
          <meta propert="og:site_name" content="Food Focus Thailand" />
        </Helmet>
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
        <div className="wrapper pad-bot-lg">
          <div className="inner-container">
            <div className="row-centered">
              <div className="col-sm-12">
                <section data-tab className="default-tab">
                  <div data-tab-header className="row">
                    {this.renderEventYears()}
                  </div>
                  <section data-tab-content>{this.renderRoadMapList()}</section>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RoadmapListWrapper;

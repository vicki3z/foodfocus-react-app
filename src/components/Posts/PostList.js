import React, { Component } from "react";
import HomeMainPost from "../Posts/HomeMainPost.js";
import ListNavigation from "../Posts/ListNavigation.js";
import { Config } from "../../config.js";
import { Helmet } from "react-helmet";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: [],
      postType: "",
      postTypeSlug: "",
      totalPages: 0,
      currentPage: 1
    };
  }
  setPostType() {
    /** Set Post Type From Slug **/
    var type = "What's In";
    if (this.props.match.path.includes("news")) {
      type = "News";
    } else if (this.props.match.path.includes("ushare")) {
      type = "ushare";
    }
    this.setState({ postType: type });
  }
  setPostTypeSlug() {
    var slugSplit = this.props.match.path.split("/");
    this.setState({ postTypeSlug: slugSplit[1] });
  }
  setCurrentPage() {
    let queryString = this.props.location.search;
    if (queryString !== "") {
      let page = queryString.split("?page=");
      page = parseInt(page[1]);
      this.setState({
        currentPage: page
      });
    }
  }
  componentWillMount() {
    this.setPostType();
    this.setPostTypeSlug();
    this.setCurrentPage();
  }
  componentDidMount() {
    fetch(
      `${Config.apiUrl}/wp-json/wp/v2/posts?${Config.acfFormat}&filter[category_name]=${
        this.state.postType
      }&per_page=12&page=${this.state.currentPage}`
    )
      .then(res => {
        this.setState({
          totalPages: res.headers.get("x-wp-totalpages")
        });

        return res.json();
      })
      .then(res => {
        this.setState({
          postList: res
        });
      });
  }
  renderPostItem() {
    return this.state.postList.map(post => (
      <HomeMainPost
        slug={this.state.postTypeSlug}
        post={post}
        key={`post-${post.id}`}
      />
    ));
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="content-header mar-bot">
            <h3 className="title light txt-black">
              {this.state.postType === "ushare"
                ? "ACTIVITIES"
                : this.state.postType.toUpperCase()}
            </h3>
          </div>
          <div className="row list">{this.renderPostItem()}</div>
          {this.state.totalPages !== 0 && (
            <ListNavigation
              currentPage={this.state.currentPage}
              totalPages={this.state.totalPages}
              location={this.props.location.pathname}
            />
          )}
        </div>
      </div>
    );
  }
}

export default PostList;

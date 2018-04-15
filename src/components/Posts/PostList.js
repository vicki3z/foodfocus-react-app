import React, { Component } from 'react';
import HomeMainPost from '../Posts/HomeMainPost.js';
import ListNavigation from '../Posts/ListNavigation.js';
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
	    }

  	}
  	setPostType() {
  		/** Set Post Type From Slug **/
  		var type = "What's In";
  		if(this.props.match.path.includes("news")){
  			type = "News";
	    } else if (this.props.match.path.includes("ushare")){
	    	type = "ushare";
	    }
	    this.setState({postType: type});
  	}
  	setPostTypeSlug() {
  		var slugSplit = this.props.match.path.split("/");
  		this.setState({postTypeSlug: slugSplit[1]});
  	}
    setCurrentPage() {
      let queryString = this.props.location.search;
      if(queryString != ""){
        let page = queryString.split("?page=");
        page = parseInt(page[1]);
        this.setState({
          currentPage: page
        })
      }
    }
  	componentWillMount(){
  		this.setPostType();
	    this.setPostTypeSlug();
      this.setCurrentPage();
  	}
  	componentDidMount() {
      
	    fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?filter[category_name]=${this.state.postType}&per_page=12&page=${this.state.currentPage}`)
	    	.then(res => {
          this.setState({
            totalPages: res.headers.get('x-wp-totalpages')
          })

          return res.json();
        })
	    	.then(res => {
	    		this.setState({
	    			postList: res
	    		})
	    	})
  	}
  	renderPostItem() {
  		return this.state.postList.map((post,index)=>(
          <HomeMainPost slug={this.state.postTypeSlug} post={post} key={`post-${post.id}`} />
  			));
  	}
  	render() {
  		return (
  			<div className="row">
          <Helmet>
            <meta charset="UTF-8" />
            <title>{this.state.postType} - Food Focus Thailand | Be Media Focus</title>
            <meta name="Description" content="Discover new highlight articles every week about the food and beverage industy." />
            <meta property="og:title" content={this.state.postType} />
            <meta property="og:description" content="Discover new highlight articles every week about the food and beverage industy." />
            <meta property="og:url" content={`http://www.foodfocusthailand.com/${this.state.postTypeSlug}`} />
            <meta property="og:locale" content="th_TH" />
            <meta propert="og:type" content="website" />
            <meta propert="og:site_name" content="Food Focus Thailand" />
            {this.state.postList[0] != null &&
              <meta property="og:image" content={this.state.postList[0].better_featured_image.source_url} />
              
            }
          
          </Helmet>
  				<div className="col-md-12 col-sm-12">
              <div className="content-header mar-bot">
              	<h3 className="title light txt-black">{(this.state.postType == 'ushare') ? "ACTIVITIES" : this.state.postType.toUpperCase()}</h3>
              </div>
              <div className="row list">
                {this.renderPostItem()}
              </div>
              {this.state.totalPages != 0 &&
                <ListNavigation currentPage={this.state.currentPage} totalPages={this.state.totalPages}
                location={this.props.location.pathname}  />
              }
          </div>
        </div>
  		)
  	}

}

export default PostList;
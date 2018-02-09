import React, { Component } from 'react';
import PostItem from '../Posts/PostItem.js';
import HomeMainPost from '../Posts/HomeMainPost.js';
import { Config } from "../../config.js";

class SearchList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postList: []
	    }

  	}
  	
  	componentDidMount() {
  		fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?search=${this.props.match.params.word}&per_page=20`)
        .then(res => res.json())
        .then(res => {
          if(this.state.postList.length > 0){
            this.setState({postList: this.state.postList.concat(res)})
          }else{
            this.setState({postList: res})
          }
          
        })
      fetch(`${Config.apiUrl}/wp-json/wp/v2/roadmap?search=${this.props.match.params.word}&per_page=20`)
        .then(res => res.json())
        .then(res => {
          if(this.state.postList.length > 0){
            this.setState({postList: this.state.postList.concat(res)})
          }else{
            this.setState({postList: res})
          }
        })
      fetch(`${Config.apiUrl}/wp-json/wp/v2/roadshow?search=${this.props.match.params.word}&per_page=20`)
        .then(res => res.json())
        .then(res => {
          if(this.state.postList.length > 0){
            this.setState({postList: this.state.postList.concat(res)})
          }else{
            this.setState({postList: res})
          }
        })
      fetch(`${Config.apiUrl}/wp-json/wp/v2/seminar?search=${this.props.match.params.word}&per_page=20`)
        .then(res => res.json())
        .then(res => {
          if(this.state.postList.length > 0){
            this.setState({postList: this.state.postList.concat(res)})
          }else{
            this.setState({postList: res})
          }
        })
  	}
  	renderPostItem() {
      if(this.state.postList.length > 0){
        return this.state.postList.map((post,index)=>(
          <HomeMainPost post={post} key={`post-${post.id}`} />
        ));
      }else{
        return null;
      }
  	}
  	render() {
  		return (
        <section className="content pad-top-lg pad-bot-lg">
          <div className="inner-container">
      			<div className="row list">
      				<div className="col-md-12 col-sm-12">
                  <div className="content-header mar-bot">
                  	<h3 className="title light txt-black">Search for "{this.props.match.params.word}"</h3>
                  </div>
                  {this.renderPostItem()}
              </div>
            </div>
          </div>
        </section>
  		)
  	}

}

export default SearchList;
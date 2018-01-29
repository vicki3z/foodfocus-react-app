import React, { Component } from 'react';
import PostItem from '../Posts/PostItem.js';

class SearchList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	postList: []
	    }

  	}
  	
  	componentDidMount() {
      let postList = []
  		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/posts?search=${this.props.match.params.word}`)
        .then(res => res.json())
        .then(res => {
          var postList = []
          if(this.state.postList.length > 0){
            postList = this.state.postList;
            postList.concat(res);
            
          }else{
            postList = res
          }
          this.setState({postList: postList})
        })
      fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/roadmap?search=${this.props.match.params.word}`)
        .then(res => res.json())
        .then(res => {
          var postList = []
          if(this.state.postList.length > 0){
            postList = this.state.postList;
            postList.concat(res);
          }else{
            postList = res
          }
          this.setState({postList: postList})
        })
      fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/roadshow?search=${this.props.match.params.word}`)
        .then(res => res.json())
        .then(res => {
          var postList = []
          if(this.state.postList.length > 0){
            postList = this.state.postList;
            postList.concat(res);
          }else{
            postList = res
          }
          this.setState({postList: postList})
        })
      fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/seminar?search=${this.props.match.params.word}`)
        .then(res => res.json())
        .then(res => {
          var postList = []
          if(this.state.postList.length > 0){
            postList = this.state.postList;
            postList.concat(res);
          }else{
            postList = res
          }
          this.setState({postList: postList})
        })
  	}
  	renderPostItem() {
  		console.log(this.state.postList);
      if(this.state.postList.length > 0){
        return this.state.postList.map((post,index)=>(
          <PostItem post={post} key={`post-${index}`} slug={this.state.postTypeSlug} />
        ));
      }else{
        return null;
      }
  	}
  	render() {
  		return (
        <section className="content pad-top-lg pad-bot-lg">
          <div className="inner-container">
      			<div className="row">
      				<div className="col-md-10 col-sm-12">
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
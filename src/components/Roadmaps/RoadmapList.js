import React, { Component } from 'react';
import RoadmapItem from './RoadmapItem.js'
import { Config } from "../../config.js";

class RoadmapList extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
          roadMapList: []
	    }
  	}
  	componentDidMount() {
  		/* get all event_year */
      fetch(`${Config.apiUrl}/wp-json/wp/v2/${this.props.roadMapType}?event_year=${this.props.year.id}&order=asc&per_page=100`)
        .then(res => res.json())
        .then(res => {
          this.setState({
            roadMapList: res
          })
        })
  	}

    renderRoadMapItem(){
      if(this.state.roadMapList.length > 0){
        return this.state.roadMapList.map((post,index) => (
          <RoadmapItem roadmap={post} key={`${this.props.roadMapSlug}-${post.id}`} mainSlug={this.props.roadMapSlug} />
        ))
      }else{  
        if(this.props.index == 0){
          return (
            <div className="col-sm-12 mar-top">
              <h2>COMING SOON</h2>
            </div>
          );
        }else{
          return null
        }
        
      }
    }
  	render() {
  		return (
  			<div id={this.props.year.name} className={"inner "+(this.props.year.id == this.props.yearActive ? "active" : "")}>
          {this.renderRoadMapItem()}
        </div>
  		)
  	}

}

export default RoadmapList;
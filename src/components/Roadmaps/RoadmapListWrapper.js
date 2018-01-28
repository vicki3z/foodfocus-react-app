import React, { Component } from 'react';
import RoadmapList from './RoadmapList.js'

class RoadmapListWrapper extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	      	roadMapType: "",
	      	roadMapSlug: "",
	      	pageTitle: null,
	      	pageContent: null,
	      	eventYears: [],
	      	yearActive: null
	    }
	    this.setYearActive = this.setYearActive.bind(this);
  	}
  	setRoadmapType() {
  		/** Set Post Type From Slug **/
  		var type = "";
  		if(this.props.match.path.includes("roadmaps")){
	    	type = "roadmap";
	    } else if (this.props.match.path.includes("roadshows")){
	    	type = "roadshow";
	    } else {
	    	type = "seminar";
	    }

	    this.setState({roadMapType: type});
  	}
  	setRoadmapSlug() {
  		var slugSplit = this.props.match.path.split("/");
  		this.setState({roadMapSlug: slugSplit[1]});
  	}
  	componentWillMount(){
  		this.setRoadmapType();
  		this.setRoadmapSlug();
  	}
  	componentDidMount() {
  		/* get page info */
  		fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/pages?slug=food-focus-thailand-roadmap`)
	    	.then(res => res.json())
	    	.then(res => {
	    		var pageInfo = res.shift();
	    		this.setState({
	    			pageTitle: pageInfo.title.rendered
	    		})
	    		this.setState({
	    			pageContent: pageInfo.content.rendered
	    		})
	    	})

	    /* get all event_year */
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/event_year?order=desc`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			eventYears: res
	    		})
	    	})

	    

  	}
  	setYearActive(yearId) {
  		console.log("setYearActive");
  	}
  	renderEventYears() {
  		if(this.state.eventYears.length > 0){
  			return this.state.eventYears.map((year,index) => (
  				<a href={"#"+year.name} title="" className={"col"+ (year.id == this.state.yearActive ? "active" : "")}> 
                    <h3 className="title-primary light">{year.name}</h3>
                  </a>
  			))
  		}else{
  			return null
  		}
  	}
  	renderRoadMapList() {
  		if(this.state.eventYears.length > 0){
  			return this.state.eventYears.map((year,index) => (
  				<RoadmapList year={year} index={index} roadMapSlug={this.state.roadMapSlug} roadMapType={this.state.roadMapType} />
  			))
  		}else{
  			return null
  		}
  	}
  	render() {
  		return (
  			<div>
	  			<section className="banner-wrap">
	                <section className="item medium">
	                  <div className="thumb"></div>
	                  <div className="caption">
	                    <div className="inner-container">
	                      <div className="middle-block">
	                        <h2 className="intro txt-white">{this.state.pageTitle}</h2>
	                        <div className="content txt-white"
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
			                       	<section data-tab-content>
			                          	{this.renderRoadMapList()}
			                        </section>
                      			</section>
                    		</div>
                  		</div>
                	</div>
              	</div>
	        </div>	
  		)
  	}

}

export default RoadmapListWrapper;
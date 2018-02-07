import React, { Component } from 'react';
import { Config } from "../../config.js";

class EventListWrapper extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	pageInfoSlug: 'exhibition'
	    }
  	}
  	componentDidMount() {
  		/* get page info */
  		fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?slug=${this.state.pageInfoSlug}`)
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

  	}
  	setYearActive(yearId) {
  		this.setState({
  			yearActive: yearId
  		})
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
	                        <h2 className="intro txt-white" 
	                        	dangerouslySetInnerHTML={{
	                        		__html: this.state.pageTitle
	                        	}}/>
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
	        </div>	
  		)
  	}

}

export default EventListWrapper;
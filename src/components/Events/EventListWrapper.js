import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { Config } from "../../config.js";
import EventList from "./EventList.js";
import PartnerList from "./PartnerList.js";

class EventListWrapper extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	pageInfoSlug: 'exhibition'
	    }

	    
  	}
  	componentDidMount() {
  		/* get page info */
  		fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?${Config.acfFormat}&slug=${this.state.pageInfoSlug}`)
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
  	
  	render() {
  		return (
  			<div>
					<Helmet>
						<meta charset="UTF-8" />
						<title>Events & Exhibitions - Food Focus Thailand | Be Media Focus</title>
						<meta property="og:title" content="Events & Exhibitions - Food Focus Thailand | Be Media Focus" />
						<meta name="Description" content="Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, we have participated in the notable Food & Beverage related exhibitions both domestic and overseas to promote our magazine and other activities. That’s why we possess the strong and powerful database." />
						<meta property="og:description" content="Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, we have participated in the notable Food & Beverage related exhibitions both domestic and overseas to promote our magazine and other activities. That’s why we possess the strong and powerful database." />
						<meta property="og:url" content="https://www.foodfocusthailand.com/event-exhibition" />
						<meta property="og:locale" content="th_TH" />
						<meta propert="og:type" content="website" />
						<meta propert="og:site_name" content="Food Focus Thailand" />
					</Helmet>
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
	            <div className="wrapper">
	          		<div className="outer">
	            		<div className="inner-container">
			            	<div className="row">
			                	<div className="col-xs-12">
			                  		<h2 className="title-primary light mar-bot">MEDIA PARTNERS</h2>
			                  		<PartnerList />
			                	</div>
			              	</div>
	            		</div>
	          		</div>
	          		<div className="outer" style={{backgroundColor: "#dddddd"}}>
	          			<div className="inner-container">
	          				<div className="row">
	          					<div className="col-md-5">
	          						<h2 className="title-primary light mar-bot">CALENDAR</h2>
	          					</div>
	          					<div className="col-md-7 col-sm-12">
	          						
	          					</div>
	          					<EventList  />
	          				</div>
	          			</div>
	          		</div>
	          	</div>
	        </div>	
  		)
  	}

}

export default EventListWrapper;
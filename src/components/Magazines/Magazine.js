import React, { Component } from 'react';
import MagazineList from './MagazineList.js';

class Magazine extends Component {
	constructor() {
	    super();
	    this.state = {
	      	pageContent: "",
	      	pageTitle: ""
	    }
  	}
  	componentDidMount() {
	    fetch(`https://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/pages?slug=food-focus-thailand-magazine`)
	    	.then(res => res.json())
	    	.then(res => {
	    		var pageInfo = res.shift()
	    		this.setState({
	    			pageContent: pageInfo.content.rendered
	    		})
	    		this.setState({
	    			pageTitle: pageInfo.title.rendered
	    		})
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
	            <section data-tab className="services-tab pad-top-lg magazine">
	            	<div data-tab-header data-activeByHash="true" className="row-centered narrow">
	            		<a href="#foodfocus" title="" target="_blank" className="col active">
	            			<img src="https://www.foodfocusthailand.com/images/icons/logo_foodfocus.png" alt="FFT Magazine" />
	            		</a>
	            		<a href="#specialsup" title="" target="_blank" className="col">
	            			<img src="https://www.foodfocusthailand.com/images/icons/logo_suplement.png" alt="Supplement" />
	            		</a>
			        </div>
			        <div className="row-centered narrow">
			        	<h2 className="title-primary-thumb mar-bot-md mar-top-md">
			        		SUBSCRIBE FOR FREE 
			        		<span><a href="https://goo.gl/forms/oP25aDCXWbNASbXh2" title="CLICK HERE" className="txt-black subscribe">CLICK HERE</a></span>
			        	</h2>
			        </div>
			        <section data-tab-content className="magazine-tab-content pad-bot-lg">
            			<div id="foodfocus" className="inner active">
            				<MagazineList magazineType="fft" />
            			</div>
            			<div id="specialsup" className="inner">
            				<MagazineList magazineType="supplement" />
            			</div>
            		</section>
	            </section>
	        </div>	
  		)
  	}

}

export default Magazine;
import React, { Component } from 'react';
import { Config } from "../../config.js";
import EventList from "./EventList.js";

class EventListWrapper extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	pageInfoSlug: 'exhibition',
	    	year: '',
	    	month: ''
	    }
  	}
  	componentWillMount(){
  		var today = new Date();
  		const month = today.getMonth()+1
  		const year = today.getFullYear();
  		console.log('Month: '+month);
  		console.log('Year: '+year);
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
	            <div className="wrapper">
	          		<div className="outer">
	            		<div className="inner-container">
			            	<div className="row">
			                	<div className="col-xs-12">
			                  		<h2 className="title-primary light mar-bot">MEDIA PARTNERS</h2>
			                  		<section className="media-carousel-wrap">
			                    		<ul className="media-carousel">
			                      			<li className="item"> 
			                      				<a href="http://www.foodfocusthailand.com/click.php?id=E_Foodpack_0118" title="" target="_blank">
			                      					<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/1_FoodPack2018.jpg" alt="" />
			                      				</a>
			                      			</li>
			                      			<li className="item"> 
			                      				<a href="http://www.foodfocusthailand.com/click.php?id=E_HOTELEX_0118" title="" target="_blank">
			                      					<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/2_Hotelex2018.jpg" alt="" />
			                      				</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_MIFB_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/3_MIFB.png" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_Thaifex_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/4_Thaiflex.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_Finefood_Shanghai_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/5_Finefood_Shanghai.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_PropakVietnam_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/6_Propak_Vietnam.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_FoodHotel_Singapore_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/7_Food_Hotel_Singapore.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_SialChina_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/8_Sial_China.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_Asiafruitlogistica_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/9_Asia_fruit_logistica_HongKong.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_Propak_Myanmar_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/10_Propak_Myanmar.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_Vitafood_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/11_Vitafood.jpg" alt="" />
					                      		</a>
					                      	</li>
					                      	<li className="item"> 
					                      		<a href="http://www.foodfocusthailand.com/click.php?id=E_FiAsai_Jakarta_0118" title="" target="_blank">
					                      			<img src="http://www.foodfocusthailand.com/foodfocusthailand-2017/demo/images/upload/12_Fi_Asai_Jakarta.jpg" alt="" />
					                      		</a>
					                      	</li>
			                    		</ul>
			                  		</section>
			                	</div>
			              	</div>
	            		</div>
	          		</div>
	          		<div className="outer">
	          			<div className="inner-container">
	          				<div className="row">
	          					<div className="col-md-5">
	          						<h2 className="title-primary light mar-bot">CALENDAR</h2>
	          					</div>
	          					<div className="col-md-7 col-sm-12">
	          					</div>
	          					<EventList month={this.state.month} year={this.state.year}  />
	          				</div>
	          			</div>
	          		</div>
	          	</div>
	        </div>	
  		)
  	}

}

export default EventListWrapper;
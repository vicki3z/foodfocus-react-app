import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Roadmap extends Component {
	constructor() {
	    super();
	    this.state = {
	      	pageInfo: {},
	      	pageContent: ""
	    }
  	}
  	componentDidMount() {
	    fetch(`http://www.foodfocusthailand.com/wp-cms/wp-json/wp/v2/pages?slug=food-focus-thailand-roadmap`)
	    	.then(res => res.json())
	    	.then(res => {
	    		this.setState({
	    			pageInfo: res.shift()
	    		})
	    		this.setState({
	    			pageContent: this.state.pageInfo.content.rendered
	    		})
	    		console.log(this.state.pageInfo.content.rendered);
	    	})
  	}
  	render() {
  		return (
  			<div className="App">
		        <header className="App-header">
		          <img src={logo} className="App-logo" alt="logo" />
		        </header>
		        <h3 className="App-intro"> Roadmap page </h3>
		        <div dangerouslySetInnerHTML={{__html: this.state.pageContent}} />
		    </div>	
  		)
  	}

}

export default Roadmap;
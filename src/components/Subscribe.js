import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';

class Subscribe extends Component {
	constructor() {
	    super();
	    this.state = {
	      	email: ""
	    }
  	}

  	render() {
  		return (
  			<div className="mar-top">
				<form className="subscribe-form">
  					<input type="email" placeholder="Email" name="emailInput" className="form-control" />
  					<div className="subscribe">
  						<a className="txt-mediumer subscribe-btn">SUBSCRIBE TO NEWSLETTER</a>
  					</div>
				</form>
			</div>
  		)
  	}

}

export default Subscribe;
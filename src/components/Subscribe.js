import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import $ from 'jquery';

class Subscribe extends Component {
	constructor() {
	    super();
	    this.state = {
	      	email: ""
	    }

      this.updateEmail = this.updateEmail.bind(this);
      this.subscribe = this.subscribe.bind(this);
  	}

    updateEmail(e) {
      this.setState({email: e.target.value});
    }

    subscribe() {
      if(this.state.email !== ""){
        $.ajax({
           type: "POST",
           url: "http://www.foodfocusthailand.com/email.php",
           data: {email: this.state.email},
           dataType: "json"
        }).done(function(res){
          console.log(res);
          if(res.success){
            alert('Thank you for subscribing to our newsletter');
            this.setState({email: ""})
          }else{
            alert('Please refresh the page and try again. Sorry for the inconvenience.');
          }
        });
      }else{
        alert("Please enter your email.")
      }
    }

  	render() {
  		return (
  			<div className="mar-top">
				<form className="subscribe-form">
  					<input type="email" placeholder="Email" name="emailInput" className="form-control" value={this.state.email} onChange={this.updateEmail} />
  					<div className="subscribe" onClick={() => this.subscribe()}>
  						<a className="txt-mediumer">SUBSCRIBE TO NEWSLETTER</a>
  					</div>
				</form>
			</div>
  		)
  	}

}

export default Subscribe;
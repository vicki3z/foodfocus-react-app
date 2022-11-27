import React, { Component } from "react";
import "../App.css";
import $ from "jquery";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {
      email: ""
    };

    this.updateEmail = this.updateEmail.bind(this);
    this.subscribe = this.subscribe.bind(this);
  }

  updateEmail(e) {
    this.setState({ email: e.target.value });
  }

  subscribe() {
    if (this.state.email !== "") {
      $.ajax({
        type: "POST",
        url: "https://www.foodfocusthailand.com/email.php",
        data: { email: this.state.email },
        dataType: "json",
        success: function(res) {
          if (res.success) {
            this.setState({ email: "" });
            alert("Thank you for subscribing to our newsletter");
          } else {
            alert(
              "Please refresh the page and try again. Sorry for the inconvenience."
            );
          }
        }.bind(this)
      });
    } else {
      alert("Please enter your email.");
    }
  }

  render() {
    return (
      <div className="mar-top">
        <form className="subscribe-form">
          <input
            type="email"
            placeholder="Email"
            name="emailInput"
            className="form-control"
            value={this.state.email}
            onChange={this.updateEmail}
          />
          <div className="subscribe" onClick={() => this.subscribe()}>
            <a className="txt-mediumer" style={{ cursor: 'pointer' }}>SUBSCRIBE TO NEWSLETTER</a>
          </div>
        </form>
      </div>
    );
  }
}

export default Subscribe;

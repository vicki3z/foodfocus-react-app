import React from 'react';
import '../assets/styles/home.css';

const ContactUs = () => {
  return (
    <div className="wrapper pad-top-lg pad-bot-lg">
      <div className="inner-container">
        <h1 className="title light txt-black">CONTACT US</h1>
        <div className="row mar-top-md">
          <div className="col-md-6 col-sm-12">
            <div className="contact-location mar-bot">
              <img src="https://www.foodfocusthailand.com/images/upload/maps.jpg" alt="Be Media Focus (Thailand) Co., Ltd. Map" />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="contact-location mar-bot">
              <iframe width="555" height="438" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC0mPfoxxoOS47lyK2KlWQNiMFTKV-CPeA&amp;q=บริษัท+บี+มีเดีย+โฟกัส+(ประเทศไทย)+จำกัด" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="row-centered pad-top-lg">
          <article className="contact-us">
            <div className="item">
              <div className="inner">
                <img src="https://www.foodfocusthailand.com/images/icons/ic-location.png" alt="Map icon" />
              </div>
              <div className="desc">
                <span className="title-1-thumb">Be Media Focus (Thailand) Co., Ltd.</span>
                <span className="title-1-thumb">5/38 Soi Ngamwongwan 25 Yak 26,</span>
                <span className="title-1-thumb">Bangkhen, Muang Nonthaburi,</span>
                <span className="title-1-thumb">Nonthaburi 11000 Thailand</span>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="https://www.foodfocusthailand.com/images/icons/ic-phone.png" alt="Phone icon" />
              </div>
              <div className="desc">
                <span className="title-1-thumb">+66 2192 9598</span>
                <span className="title-1-thumb">+66 2116 5732</span>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <img src="https://www.foodfocusthailand.com/images/icons/ic-email.png" alt="Email icon" />
              </div>
              <div className="desc">
                <span className="title-1-thumb"><strong>Advertising Enquiries</strong></span>
                <span className="title-1-thumb">sales@foodfocusthailand.com</span>
                <span className="title-1-thumb"><strong>Editorial Enquiries</strong></span>
                <span className="title-1-thumb">editor@foodfocusthailand.com</span>
                <span className="title-1-thumb"> <strong>Seminar Enquiries</strong></span>
                <span className="title-1-thumb">seminar@foodfocusthailand.com</span>
                <span className="title-1-thumb"> <strong>Subscription Enquiries</strong></span>
                <span className="title-1-thumb">contact@foodfocusthailand.com</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;
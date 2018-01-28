import React, { Component } from 'react';

class Footer extends Component {
	constructor() {
		super();
	}

	render() {
		return (
			<footer id="footer">
				<div className="inner-container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-6">
              <p className="text-medium txt-white">Enjoy reading through e-book applications:</p>
              <ul className="partners mar-top-xs">
                <li><a href="http://www.ebooks.in.th/BeMediaFocus" title="" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/p-1.png" alt="" /></a>
                </li>
                <li><a href="https://issuu.com/bemediafocus" title="" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/p-2.png" alt="" /></a>
                </li>
                <li><a href="https://www.mebmarket.com/index.php?action=Publisher&amp;publisher_id=393870&amp;id=393870&amp;name=Be%20Media%20Focus%20(Thailand)%20Co.,%20Ltd." title="" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/p-3.png" alt="" /></a>
                </li>
                <li><a href="http://www.mbookstore.com/publisher/395/Be-Media-Focus-(Thailand)-Co.,-Ltd./" title="" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/p-4.png" alt="" /></a>
                </li>
                <li><a href="https://www.theonebook.com/index.php?action=Publisher&amp;id=393870&amp;name=Be%20Media%20Focus%20(Thailand)%20Co.,%20Ltd." title="" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/p-5.png" alt="" /></a>
                </li>
              </ul>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-6">
              <ul className="social-icons">
                <li><a href="https://www.facebook.com/foodfocusthailand/" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/social-1.png" /></a></li>
                <li> <a href="http://line.me/ti/p/@foodfocusthailand" target="_blank"><img src="https://www.foodfocusthailand.com/images/upload/social-2.png" /></a></li>
              </ul>
              <div className="address mar-top-xs txt-white">
                <p>Be Media Focus (Thailand) Co., Ltd.</p>
                <p>5/38 Soi Ngamwongwan 25 Yak 26, Bangkhen, </p>
                <p>Muang Nonthaburi, Nonthaburi 11000 Thailand</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-footer">
          <div className="inner-container">
            <div className="row">
              <div className="col-sm-12">
                <ul>
                  <li><a href="https://www.foodfocusthailand.com/sitemap.html" title="Sitemap">Sitemap</a>
                  </li>
                  <li><a href="https://www.foodfocusthailand.com/contact-us.html" title="Contact Us">Contact Us</a>
                  </li>
                  <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdtSgFv-KK_FqPV5ALZBIukWRyR6BD9yaCOAIRjHJ1I_fW7Qw/viewform?usp=send_form" title="Subscribe">Subscribe</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
			</footer>
		)
	}

}

export default Footer;
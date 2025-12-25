import React, { useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import '../assets/styles/home.css';

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState('advertiser');

  useEffect(() => {
    const updateTabFromHash = () => {
      console.log('updateTabFromHash');
      const hash = window.location.hash.replace('#', '');
      const nextTab = hash === 'board' ? 'board' : 'advertiser';
      setActiveTab(nextTab);

      // Scroll to the corresponding section if it exists
      const el = document.getElementById(nextTab);
      if (el) {
        // Timeout ensures layout (and tab visibility) is updated before scrolling
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 0);
      }
    };

    updateTabFromHash();
    window.addEventListener('hashchange', updateTabFromHash);

    return () => {
      window.removeEventListener('hashchange', updateTabFromHash);
    };
  }, []);

  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <title>About Us - Food Focus Thailand | Be Media Focus</title>
        <meta property="og:title" content="About Us - Food Focus Thailand | Be Media Focus" />
        <meta name="Description" content="Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Be Media Focus (Thailand) Co., Ltd. has established in 2006 to create the effective industry-focused media serving Food & Beverage professionals." />
        <meta property="og:description" content="Dedicated to be the industry-focused platform for Food & Beverage Industry in Thailand, Be Media Focus (Thailand) Co., Ltd. has established in 2006 to create the effective industry-focused media serving Food & Beverage professionals." />
        <meta property="og:url" content="https://www.foodfocusthailand.com/about-us" />
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
                <h1 className="intro txt-white">ABOUT US</h1>
                <p className="content txt-white">
                  Dedicated to be the industry-focused platform for Food & Beverage Industry, Be Media Focus (Thailand) Co., Ltd. has established in 2006 to create the effective industry-focused media serving Food & Beverage professionals.
                </p>
                <p className="content txt-white mar-top-sm">
                  บริษัท บี มีเดีย โฟกัส (ประเทศไทย) จำกัด ก่อตั้งขึ้นเมื่อปี พ.ศ. 2549 เพื่อสร้างสรรค์งานด้านสื่อ นำเสนอองค์ความรู้ ข้อมูล ข่าวสาร ให้กับผู้ประกอบการในวงการอุตสาหกรรมอาหารและเครื่องดื่ม
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section data-tab className="services-tab pad-top-lg">
        <div data-tab-header className="row-centered narrow">
          <a
            href="#advertiser"
            title=""
            className={`col ${activeTab === 'advertiser' ? 'active' : ''}`}
          >
            <h3 className="title-2 light">ADVERTISERS</h3>
          </a>
          <a
            href="#board"
            title=""
            className={`col ${activeTab === 'board' ? 'active' : ''}`}
          >
            <h3 className="title-2 light">
              BOARD OF CONSULTANTS / <br />
              ENDORSEMENTS
            </h3>
          </a>
        </div>
        <section data-tab-content className="pad-top-lg pad-bot-lg">
          <div
            id="advertiser"
            className={`inner ${activeTab === 'advertiser' ? 'active' : ''}`}
          >
            <div className="inner-container">
              <div className="row">
                <div className="col-xs-12">
                  <h2 className="title light mar-bot-md">ADVERTISERS</h2>
                  <section className="banner-wrap">
                    <div style={{ textAlign: 'center' }}>
                      <a href="" title="thanku2018" target="_blank">
                        <img src="https://www.foodfocusthailand.com/images/upload/thank_U_2018.jpg" alt="thank_U_2018" />
                      </a>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
          <div
            id="board"
            className={`inner ${activeTab === 'board' ? 'active' : ''}`}
          >
            <div style={{ backgroundColor: '#dddddd' }} className="outer">
              <div className="inner-container">
                <div className="row">
                  <div className="col-xs-12">
                    <h2 className="title light mar-bot-md">BOARD OF CONSULTANTS</h2>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/1_Sakchai.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Sakchai Sriboonsue D.V.M., LB.</h2>
                          <p className="text-x-small">President of the Milk Board</p>
                          <p className="text-x-small">Dairy Farming Promotion Organization of Thailand</p>
                          <p className="text-x-small"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/2_Visit.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Visit Limprana</h2>
                          <p className="text-x-small">Honorary Advisor</p>
                          <p className="text-x-small">Food Processing Industry Club</p>
                          <p className="text-x-small">The Federation of Thai Industries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/3_Visit.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Visit Limlurcha</h2>
                          <p className="text-x-small">Chairman</p>
                          <p className="text-x-small">Food Processing Industry Club</p>
                          <p className="text-x-small">The Federation of Thai Industries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/4_Sakkhee.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Sakkhee Sansupa</h2>
                          <p className="text-x-small">Director</p>
                          <p className="text-x-small">Thai Packaging Centre</p>
                          <p className="text-x-small">Thailand Institute of Scientific and Technological Research</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/5_Pavinee.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Assistant Professor Anadi Nitithamyong, Ph.D.</h2>
                          <p className="text-x-small">President</p>
                          <p className="text-x-small">Food Science and Technology Association of Thailand (FoSTAT)</p>
                          <p className="text-x-small"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/6_Winai.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Assoc. Prof.Winai Dahlan, Ph.D.</h2>
                          <p className="text-x-small">Founding Director </p>
                          <p className="text-x-small">The Halal Science Center</p>
                          <p className="text-x-small">Chulalongkorn University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/7_Sombat.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Assoc. Prof.Sombat Chinawong, Ph.D.</h2>
                          <p className="text-x-small">Director</p>
                          <p className="text-x-small">Institute of Food Research and Product Development</p>
                          <p className="text-x-small">Kasetsart University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/8_Yongvut.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Yongvut Saovapruk</h2>
                          <p className="text-x-small">President</p>
                          <p className="text-x-small">National Food Institute</p>
                          <p className="text-x-small">Ministry of Industry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/9_Phanit.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Phanit Laosirirat, Ph.D.</h2>
                          <p className="text-x-small">Executive Director</p>
                          <p className="text-x-small">Thailand Productivity Institute</p>
                          <p className="text-x-small">Ministry of Industry</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/10_Ratchanee.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Assoc. Prof.Ratchanee Kongkachuichai, Ph.D.</h2>
                          <p className="text-x-small">Director</p>
                          <p className="text-x-small">Institute of Nutrition</p>
                          <p className="text-x-small">Mahidol University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/11_Visith.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Prof.Visith Chavasit, Ph.D.</h2>
                          <p className="text-x-small">Institute of Nutrition</p>
                          <p className="text-x-small">Mahidol University</p>
                          <p className="text-x-small"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/12_Sittiwat.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Assoc. Prof.Sittiwat Lertsiri, Ph.D.</h2>
                          <p className="text-x-small">Dean</p>
                          <p className="text-x-small">Faculty of Science</p>
                          <p className="text-x-small">Mahidol University</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/13_Poj.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Poj Aramwattananont, Ph.D.</h2>
                          <p className="text-x-small">President</p>
                          <p className="text-x-small">Thai Frozen Foods Association</p>
                          <p className="text-x-small"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12">
                    <div className="profile">
                      <div style={{ backgroundImage: 'url(https://www.foodfocusthailand.com/images/upload/14_Pravith.jpg)' }} className="thumb"></div>
                      <div className="profile-detail">
                        <div className="detail-group">
                          <h2 className="text-medium">Pravith Chotiprayanakul</h2>
                          <p className="text-x-small">CEO</p>
                          <p className="text-x-small">GS1 Thailand</p>
                          <p className="text-x-small">The Federation of Thai Industries</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ backgroundColor: 'white' }} className="outer">
              <div className="inner-container">
                <div className="row">
                  <div className="col-xs-12">
                    <h2 className="title light mar-bot-md">ENDORSEMENTS</h2>
                  </div>
                </div>
                <div className="row-centered endorsement">
                  <div className="endorse">
                    <a href="https://www.fda.moph.go.th" title="สำนักงานคณะกรรมการอาหารและยา กระทรวงสาธารณสุข" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/1_fd.jpg" alt="สำนักงานคณะกรรมการอาหารและยา กระทรวงสาธารณสุข" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://ftiweb.off.fti.or.th/industrialgroup/food" title="กลุ่มอุตสาหกรรมอาหาร สภาอุตสาหกรรมแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/2_foodprocess.jpg" alt="กลุ่มอุตสาหกรรมอาหาร สภาอุตสาหกรรมแห่งประเทศไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.tistr.or.th/tistr/" title="สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/3_TISTR.jpg" alt="สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.tistr.or.th/tpc/" title="ศูนย์การบรรจุหีบห่อไทย สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/4_thaipackage.jpg" alt="ศูนย์การบรรจุหีบห่อไทย สถาบันวิจัยวิทยาศาสตร์และเทคโนโลยีแห่งประเทศไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.fostat.org/" title="สมาคมวิทยาศาสตร์และเทคโนโลยีทางอาหารแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/5_Fostat.jpg" alt="สมาคมวิทยาศาสตร์และเทคโนโลยีทางอาหารแห่งประเทศไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.halalscience.org/" title="ศูนย์วิทยาศาสตร์ฮาลาล จุฬาลงกรณ์มหาวิทยาลัย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/6_Halal.jpg" alt="ศูนย์วิทยาศาสตร์ฮาลาล จุฬาลงกรณ์มหาวิทยาลัย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.ifrpd.ku.ac.th/" title="สถาบันค้นคว้าและพัฒนาผลิตภัณฑ์อาหาร มหาวิทยาลัยเกษตรศาสตร์" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/7_FoodResarchKaset.jpg" alt="สถาบันค้นคว้าและพัฒนาผลิตภัณฑ์อาหาร มหาวิทยาลัยเกษตรศาสตร์" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.agro.ku.ac.th/" title="คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/8_FacultyofAgro-Industry.jpg" alt="คณะอุตสาหกรรมเกษตร มหาวิทยาลัยเกษตรศาสตร์" />
                    </a>
                  </div>
                </div>
                <div className="row-centered endorsement">
                  <div className="endorse">
                    <a href="https://www.nfi.or.th/" title="สถาบันอาหาร กระทรวงอุตสาหกรรม" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/9_nfi.jpg" alt="สถาบันอาหาร กระทรวงอุตสาหกรรม" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.ftpi.or.th/" title="สถาบันเพิ่มผลผลิตแห่งชาติ กระทรวงอุตสาหกรรม" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/10_thailandproductivity.jpg" alt="สถาบันเพิ่มผลผลิตแห่งชาติ กระทรวงอุตสาหกรรม" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.sme.go.th/" title="สำนักงานส่งเสริมวิสาหกิจขนาดกลางและขนาดย่อม" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/11_OSMEP.jpg" alt="สำนักงานส่งเสริมวิสาหกิจขนาดกลางและขนาดย่อม" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.thai-frozen.or.th/" title="สมาคมอาหารแช่เยือกแข็งไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/12_thaifrozen.jpg" alt="สมาคมอาหารแช่เยือกแข็งไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.gs1thailand.org/" title="สถาบันรหัสสากล สภาอุตสาหกรรมแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/13_GS1.jpg" alt="สถาบันรหัสสากล สภาอุตสาหกรรมแห่งประเทศไทย" />
                    </a>
                  </div>
                  <div className="endorse">
                    <a href="https://www.rfid.or.th/" title="สถาบันส่งเสริมความเป็นเลิศทางเทคโนโลยีอาร์เอฟไอดีแห่งประเทศไทย" target="_blank">
                      <img src="https://www.foodfocusthailand.com/images/upload/14_RFID.jpg" alt="สถาบันส่งเสริมความเป็นเลิศทางเทคโนโลยีอาร์เอฟไอดีแห่งประเทศไทย" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default AboutUs;
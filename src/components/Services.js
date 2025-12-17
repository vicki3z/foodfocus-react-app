import React from 'react';
import '../assets/styles/home.css';

const Services = () => {
  return (
    <div>
      <section className="banner-wrap">
        <section className="item medium">
          <div className="thumb"></div>
          <div className="caption">
            <div className="inner-container">
              <div className="middle-block">
                <h1 className="intro txt-white">SERVICES</h1>
                <p className="content txt-white">
                  With more than 10 years of experience, we can help you create a variety of promotional materials and concrete events to deliver your messages to the public.
                </p>
                <p className="content txt-white mar-top-sm">
                  จากความเชี่ยวชาญในด้านสื่อสิ่งพิมพ์มามากกว่า 10 ปี เราจึงสามารถให้บริการงานด้านสื่อสิ่งพิมพ์และกิจกรรมหลากหลายรูปแบบ เพื่อเผยแพร่และประชาสัมพันธ์สิ่งที่คุณต้องการสื่อสารความเป็นองค์กรของคุณออกไปในวงกว้าง
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <div className="wrapper pad-top-md pad-bot-lg">
        <div className="inner-container">
          <section data-tab className="services-tab">
            <div data-tab-header>
              <a href="#publication" title="" className="col active">
                <h3 className="title-2 light">CONTRACT PUBLICATION</h3>
              </a>
              <a href="#annual-report" title="" className="col">
                <h3 className="title-2 light">ANNIVERSARY & ANNUAL REPORT</h3>
              </a>
              <a href="#catalog" title="" className="col">
                <h3 className="title-2 light">COMPANY PROFILE & PRODUCT CATALOGUE</h3>
              </a>
              <a href="#event" title="" className="col">
                <h3 className="title-2 light">EVENT ORGANIZER</h3>
              </a>
            </div>
            <section data-tab-content className="pad-top-lg pad-bot-lg">
              <div id="publication" className="inner active">
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/3M.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">3M</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/GS1_1.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">GS1 Newsletter</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Horeca_1.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Horeca</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/เกษตรอภิรมย์_1.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">เกษตรอภิรมย์</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div id="annual-report" className="inner">
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Mama_1.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">President Rice Products Public Company Limited</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/สมาคมวิทย์_1.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">สมาคมการค้าวิทยาศาสตร์และเทคโนโลยี</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div id="catalog" className="inner">
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/3M_Thailand.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">3M Thailand</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/949_Supplies.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">949 Supplies</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Advance_Pharma.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Advance Pharma</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Better_Pack.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Better Pack</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Diversey_Hygiene.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Diversey Hygiene (Thailand)</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Forefront_Foodtech.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Forefront Foodtech</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Harn_Engineering_Solutions.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Harn Engineering Solutions</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Metrohm_Siam.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Metrohm Siam</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/export_chicken.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">สมาคมผู้ผลิตไก่เพื่อส่งออกไทย</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
              <div id="event" className="inner">
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/ABB.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">ABB</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Bevtec.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Bevtec</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Dupont.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Dupont</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Fillter.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Filter Vision</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Food_Safety.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Food Safety</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/FoodTalk.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Food Talk</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Hanna.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Hanna</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Honeybee.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Honeybee</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Horeca.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Horeca</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Interroll.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Interroll</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/KCP.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">KCP</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Packaging_Talk.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Packaging Talk</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/PackPrint.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Pack Print</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/ProPak.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">ProPak</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/Sato.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Sato</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
                <div className="col-sm-6 col-md-4">
                  <div className="product thumb-default magazine mar-top">
                    <figure><img src="https://www.foodfocusthailand.com/images/upload/SugarTax.jpg" alt="" className="book-image" />
                      <div style={{ backgroundColor: '#ededed' }} className="thumb"></div>
                    </figure>
                    <figcaption>
                      <div className="inner">
                        <h3 className="title-1-thumb txt-black">Sugar Tax</h3>
                      </div>
                    </figcaption>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Services;
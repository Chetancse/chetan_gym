import React , { useState }from 'react'
import Header from './Header'
import Mainbanner from './Mainbanner'

import Registration from './pages/registration';
import ChooseUsSection from './ChooseUsSection';
import OurClasses from './OurClasses';
import Trainers from './Trainers';
import '../index.css'


const Main = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
     
{/*    <div id="js-preloader" className="js-preloader">
      <div className="preloader-inner">
        <span className="dot"></span>
        <div className="dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>  */}
   
    
    
 
    
    <Header/>

    <Mainbanner/>


   <ChooseUsSection/>


  <OurClasses/>
    
    <section className="banner-section set-bg" id='registration'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <div class="bs-text">
                        <h2>registration now to get more deals</h2>
                        <div class="bt-tips">Where health, beauty and fitness meet.</div>
                        {/* {!showRegistration ? ( */}
                       {/*  <a  class="primary-btn  btn-normal" style={{color:"white"}} onClick={openModal}>Appointment</a>
                        <Registration isOpen={modalIsOpen} onRequestClose={closeModal} /> */}
                       {/*  ) : (
                            <Registration />
                          )} */}
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- Banner Section End -->

    <!-- Pricing Section Begin --> */}
    <section class="pricing-section spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Plan</span>
                        <h2>Choose your pricing plan</h2>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>1-Month Membership</h3>
                        <div class="pi-price">
                            <h2>1000 RS</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Access to all gym facilities and equipment.</li>
                            
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Affordable and flexible option.</li>
                            <li>No time restriction</li>
                        </ul>
                        <a  class="primary-btn pricing-btn">Enroll now</a>
                        {/* <a  class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>3 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>2400 RS</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Enjoy a discount compared to the 1-month rate</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Suitable for setting and achieving short-term goals</li>
                            <li>No time restriction</li>
                        </ul>
                        <a  class="primary-btn pricing-btn">Enroll now</a>
                        {/* <a  class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
                <div class="col-lg-4 col-md-8">
                    <div class="ps-item">
                        <h3>12 Month unlimited</h3>
                        <div class="pi-price">
                            <h2>8000 Rs</h2>
                            <span>SINGLE CLASS</span>
                        </div>
                        <ul>
                            <li>Complete immersion into fitness and wellness</li>
                            <li>Unlimited equipments</li>
                            <li>Personal trainer</li>
                            <li>Weight losing classes</li>
                            <li>Significant savings compared to shorter-term plans</li>
                            <li>No time restriction</li>
                        </ul>
                        <a  class="primary-btn pricing-btn">Enroll now</a>
                       {/*  <a href="#" class="thumb-icon"><i class="fa fa-picture-o"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
    {/* <section className="section" id="Schedules">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading dark-bg">
                        <h2>classNamees <em>Schedule</em></h2>
                        <img src="assets/images/line-dec.png" alt=""/>
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                    <div className="filters">
                        <ul className="schedule-filter">
                            <li className="active" data-tsfilter="monday">Monday</li>
                            <li data-tsfilter="tuesday">Tuesday</li>
                            <li data-tsfilter="wednesday">Wednesday</li>
                            <li data-tsfilter="thursday">Thursday</li>
                            <li data-tsfilter="friday">Friday</li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-10 offset-lg-1">
                    <div className="schedule-table filtering">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="day-time">Fitness className</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">10:00AM - 11:30AM</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">2:00PM - 3:30PM</td>
                                    <td>William G. Stewart</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Muscle Training</td>
                                    <td className="friday ts-item" data-tsmeta="friday">10:00AM - 11:30AM</td>
                                    <td className="thursday friday ts-item" data-tsmeta="thursday">2:00PM - 3:30PM</td>
                                    <td>Paul D. Newman</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Body Building</td>
                                    <td className="tuesday ts-item" data-tsmeta="tuesday">10:00AM - 11:30AM</td>
                                    <td className="monday ts-item show" data-tsmeta="monday">2:00PM - 3:30PM</td>
                                    <td>Boyd C. Harris</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Yoga Training className</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">10:00AM - 11:30AM</td>
                                    <td className="friday ts-item" data-tsmeta="friday">2:00PM - 3:30PM</td>
                                    <td>Hector T. Daigle</td>
                                </tr>
                                <tr>
                                    <td className="day-time">Advanced Training</td>
                                    <td className="thursday ts-item" data-tsmeta="thursday">10:00AM - 11:30AM</td>
                                    <td className="wednesday ts-item" data-tsmeta="wednesday">2:00PM - 3:30PM</td>
                                    <td>Bret D. Bowers</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </section> */}

   <Trainers/>
    
  {/*   <!-- ***** Contact Us Area Starts ***** --> */}
    <section className="section" id="contact-us">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div id="map">
                      <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="600px" frameborder="0" style={{border:"0" }}allowfullscreen></iframe>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-xs-12">
                    <div className="contact-form">
                        <form id="contact" action="" method="post">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your Name*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email*" required=""/>
                              </fieldset>
                            </div>
                            <div className="col-md-12 col-sm-12">
                              <fieldset>
                                <input name="subject" type="text" id="subject" placeholder="Subject"/>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows="6" id="message" placeholder="Message" required=""></textarea>
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Send Message</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- ***** Contact Us Area Ends ***** -->
    
    <!-- ***** Footer Start ***** --> */}
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; 2020 ChetanGymStudio
                    
                    - Designed by <a rel="nofollow"  className="tm-text-link" target="_parent">Chetan</a><br/>

                Distributed by <a rel="nofollow"  className="tm-text-link" target="_blank">Chetan</a>
                
                </p>
                    
                   
                    
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Main

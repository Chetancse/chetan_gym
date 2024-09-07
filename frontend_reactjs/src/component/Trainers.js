import React from 'react'
import '../index.css'
import logo from '../assets/images/line-dec.png'
import trainer1 from '../assets/images/first-trainer.jpg'
import trainer2 from '../assets/images/second-trainer.jpg'
import trainer3 from '../assets/images/third-trainer.jpg'

const Trainers = () => {
  return (
    <div>
       {/* <!-- ***** Testimonials Starts ***** --> */}
    <section className="section" id="Contact">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-heading">
                        <h2>Expert <em>Trainers</em></h2>
                        <img src={logo} alt=""/>
                        <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={trainer1} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Strength Trainer</span>
                            <h4>Deepanshu pandey</h4>
                            <p>Experience the Power of Strength: With over a decade of experience in strength training, Deepanshu Pandey is a seasoned trainer dedicated to helping you reach your fitness goals. </p>
                            <ul className="social-icons">
                                <li><a ><i className="fa fa-facebook"></i></a></li>
                                <li><a ><i className="fa fa-twitter"></i></a></li>
                                <li><a ><i className="fa fa-linkedin"></i></a></li>
                                <li><a ><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={trainer2} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Muscle Trainer</span>
                            <h4>Ritik Kalla</h4>
                            <p>Experience the Power of Strength: With over a decade of experience in strength training, Ritik Kalla is a seasoned trainer dedicated to helping you reach your fitness goals. </p>
                            <ul className="social-icons">
                                <li><i className="fa fa-facebook"></i></li>
                                <li><i className="fa fa-twitter"></i></li>
                                <li><i className="fa fa-linkedin"></i></li>
                                <li><i className="fa fa-behance"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="trainer-item">
                        <div className="image-thumb">
                            <img src={trainer3} alt=""/>
                        </div>
                        <div className="down-content">
                            <span>Power Trainer</span>
                            <h4>Dhurv Gautam</h4>
                            <p>Experience the Power of Strength: With over a decade of experience in strength training, Dhurv Gautam is a seasoned trainer dedicated to helping you reach your fitness goals. </p>
                            <ul className="social-icons">
                                <li><a ><i className="fa fa-facebook"></i></a></li>
                                <li><a ><i className="fa fa-twitter"></i></a></li>
                                <li><a ><i className="fa fa-linkedin"></i></a></li>
                                <li><a ><i className="fa fa-behance"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

 {/* <!-- ***** Testimonials Ends ***** --> */}
    </div>
  )
}

export default Trainers

import React from 'react'
import '../index.css'
import class1 from '../assets/images/class-1.jpg'
import class2 from '../assets/images/class-2.jpg'
import class3 from '../assets/images/class-3.jpg'
import class4 from '../assets/images/class-4.jpg'
import class5 from '../assets/images/class-5.jpg'

const OurClasses = () => {
  return (
    <div>
      {/* <!-- Classes Section Begin --> */}
    <section class="classes-section spad" id='classes'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Our Classes</span>
                        <h2>WHAT WE CAN OFFER</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class1} alt=""/>
                           
                        </div>
                        <div class="ci-text">
                            <span>STRENGTH</span>
                            <h5>Weightlifting</h5>
                            <a><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class2} alt=""/>
                        </div>
                        <div class="ci-text">
                            <span>Cardio</span>
                            <h5>Indoor cycling</h5>
                            <a ><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class3} alt=""/>
                        </div>
                        <div class="ci-text">
                            <span>STRENGTH</span>
                            <h5>Kettlebell power</h5>
                            <a ><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class4} alt=""/>
                        </div>
                        <div class="ci-text">
                            <span>Cardio</span>
                            <h4>Indoor cycling</h4>
                            <a ><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="class-item">
                        <div class="ci-pic">
                            <img src={class5} alt=""/>
                        </div>
                        <div class="ci-text">
                            <span>Training</span>
                            <h4>Boxing</h4>
                            <a ><i class="fa fa-angle-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- ChoseUs Section End --> */}
    </div>
  )
}

export default OurClasses

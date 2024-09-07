import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const ChooseUsSection = () => {
  return (
    <div>
       {/* <!-- ChoseUs Section Begin --> */}
    <section class="choseus-section spad" id='about'>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <span>Why chose us?</span>
                        <h2>PUSH YOUR LIMITS FORWARD</h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                    <span>
                    <FontAwesomeIcon icon={faDumbbell} size="2x"/>
                    </span>
                        {/* <span class="flaticon-034-stationary-bike"></span> */}
                        <h4>Modern equipment</h4>
                        <p>Our gym is equipped with the latest advancements in fitness technology, providing you with the tools you need to achieve your fitness goals efficiently and effectively. Our modern equipment is designed to offer a diverse range of workouts, catering to all fitness levels and preferences.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span ><HealthAndSafetyIcon size="large"/></span>
                        <h4>Healthy nutrition plan</h4>
                        <p>Welcome to Hook Gym, where fitness meets nutrition for optimal results. Our nutrition plan is designed to complement your gym sessions, helping you achieve your goals faster. Packed with nourishing choices, our plan focuses on balanced meals and mindful eating. With the right nutrients, you'll power through workouts, recover effectively, and feel your best.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-002-dumbell"></span>
                        <h4>Proffesponal training plan</h4>
                        <p>Experience top-tier professional training at Hook Gym . Our experts tailor comprehensive plans to your goals, optimizing your fitness journey. Get ready for targeted workouts, personalized guidance, and remarkable results.</p>
                    </div>
                </div>
                <div class="col-lg-3 col-sm-6">
                    <div class="cs-item">
                        <span class="flaticon-014-heart-beat"></span>
                        <h4>Unique to your needs</h4>
                        <p>At Hook Gym, we create plans as distinct as you are. Our fitness solutions adapt precisely to your goals, ensuring your journey is truly one-of-a-kind. Experience fitness designed exclusively for you.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
   {/*  <!-- ChoseUs Section End --> */}

    </div>
  )
}

export default ChooseUsSection

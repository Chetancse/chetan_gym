import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css'

const Mainbanner = () => {
  return (
    <div>
      {/* <!-- ***** Main Banner Area Start ***** --> */}
    <div className="main-banner" >
        <video autoPlay muted loop id="bg-video">
            <source src="assets/images/gym-video.mp4" type="video/mp4" />
           
        </video>

        <div className="video-overlay header-text">
            <div className="caption">
                <h6>work harder, get stronger</h6>
                <h2>easy with our <em>gym</em></h2>
                <div className="main-button scroll-to-section">
                    <Link  to="/registration">Become a member</Link>
                </div>
            </div>
        </div>
    </div>
     {/* <!-- ***** Main Banner Area End ***** --> */}
    </div>
  )
}

export default Mainbanner

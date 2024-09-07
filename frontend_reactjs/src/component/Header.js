import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import '../index.css'



const Header = () => {
  

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const [isNavVisible, setIsNavVisible] = useState(false);

  // Function to toggle the navigation menu
  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div>
      <header className="header-area header-sticky" >
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                       {/*  <!-- ***** Logo Start ***** --> */}
                        <a  className="logo">Hook<em> Gym</em></a>
                        {/* <!-- ***** Logo End ***** -->
                        <!-- ***** Menu Start ***** --> */}
                        <ul className={`nav ${isNavVisible ? 'open' : ''}`}>
                          
                            <li className="scroll-to-section"><a className="active">Home</a></li>
                            <li className="scroll-to-section"><a onClick={() => scrollToSection('about')}>About</a></li>
                            <li className="scroll-to-section"><a  onClick={() => scrollToSection('classes')} >classes</a></li>
                            
                           
                            <li className="scroll-to-section"><a onClick={() => scrollToSection('Contact')} >Contact</a></li>
                            <li className="scroll-to-section"><Link to="/bmicalculator">BMI Calculator</Link></li>  
                            <li className="scroll-to-section"><Link to="/login">Sign In</Link></li> 
                            
                            <li className="main-button"><Link to="/registration">Get Started</Link></li>
                        </ul>        
                        <a className='menu-trigger' onClick={toggleNav}
           >
                            <span>Menu</span>
                        </a>
                      {/*   <!-- ***** Menu End ***** --> */}
                    </nav>
                  
                </div>
            </div>
        </div>
        
    </header>
    {/*  <!-- ***** Header Area End ***** --> */}
    </div>
  )
}

export default Header

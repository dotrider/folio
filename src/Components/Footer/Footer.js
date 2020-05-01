import React from 'react';
// import { Link } from 'react-scroll';
import './Footer.css';

const Nav = () => {

    return(
            <footer id='footer'>
              {/* <Link    
                activeClass="active"
                to="heading"
                spy={true}
                smooth={true}
                // offset={-70}
                duration= {800} className="item"> <div id='upIcon'>^</div>
              </Link> */}

              <p> &copy; <span id='year'>2020</span> </p>
             </footer> 
    )
}

export default Nav;
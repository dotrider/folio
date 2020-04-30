import React from 'react';
import {Link} from 'react-scroll'
import './Nav.css';

const Nav = () => {

    return(
           <section id='heading'>
            <nav id='nav'>
            <Link    
            activeClass="active"
            to="heading"
            spy={true}
            smooth={true}
            // offset={-70}
            duration= {600} className="item"><span className='menu'>Home</span></Link>

            <Link    
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            // offset={-70}
            duration= {600} className="item"><span className='menu'>Projects</span></Link>

            <Link    
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            // offset={-70}
            duration= {600} className="item"><span className='menu'>Skills</span></Link>

            <Link    
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            // offset={-70}
            duration= {600} className="item"><span className='menu'>About</span></Link>
            </nav>
            </section>
    )
}

export default Nav;
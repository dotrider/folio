import React from 'react';
import { Link } from 'react-scroll';
import './Projects.css';


const Projects = () => {

    return(
        <section id='projects'>
            <h2 className='headings'>Projects</h2>
            <Link    
                activeClass="active"
                to="heading"
                spy={true}
                smooth={true}
                // offset={-70}
                duration= {800} className="item"> <div id='upIcon'>^</div>
              </Link>
  
            <div>
                
            </div>
        
    
        </section>
    )
}

export default Projects;
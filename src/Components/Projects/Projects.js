import React from 'react';
import { Link } from 'react-scroll';
import ns from '../../pic/ns.png';
import color from '../../pic/color.png'
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
  
            <div className='contgrid'>
                <div>
                    <img alt={ns} className='projectPic' src={ns}/>
                </div>
                <div>
                    <img alt={color} className='projectPic' src={color}/>
                </div>
            </div>
        
    
        </section>
    )
}

export default Projects;
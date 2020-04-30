import React from 'react';
import './Skills.css';


const Skills = () => {

    return(
        <section id='skills'>
            <div className='skillSet'>
                <div className='sec'>
                    <i className="devicon-react-original-wordmark colored"></i>
                    <i className="devicon-express-original"></i>
                    <i className="devicon-nodejs-plain colored"></i>
                    <i className="devicon-postgresql-plain-wordmark colored"></i>
                </div>
                <div className='sec'>
                    <i className="devicon-javascript-plain colored"></i>
                    <i className="devicon-html5-plain-wordmark colored"></i>
                    <i className="devicon-css3-plain-wordmark colored"></i>
                    <i className="devicon-sass-original colored"></i>
                </div>
                <div className='sec'>
                    <i className="devicon-wordpress-plain"></i>
                    <i className="devicon-git-plain colored"></i>
                    <i className="devicon-visualstudio-plain colored"></i>
                    <i className="devicon-nginx-original"></i>
                </div>
            </div>    
        </section>
    )
}

export default Skills;
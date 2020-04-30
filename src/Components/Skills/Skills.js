import React from 'react';
import './Skills.css';


const Skills = () => {

    return(
        <section id='skills'>
            
            <h2 className='headings'>Technical <span className='bold fcgrey'>Skills</span></h2>
            <div id ='skillSection'>
                <div className='skillSet'>
                    <div className='sec'>
                        <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-react-original-wordmark colored"></i></a>
                        <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-express-original"></i></a>
                        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-nodejs-plain colored"></i></a>
                        <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-postgresql-plain-wordmark colored"></i></a>
                    </div>
                    <div className='sec'>
                        <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-javascript-plain colored"></i></a>
                        <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-html5-plain-wordmark colored"></i></a>
                        <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-css3-plain-wordmark colored"></i></a>
                        <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-sass-original colored"></i></a>
                    </div>
                    <div className='sec'>
                        <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-wordpress-plain"></i></a>
                        <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-git-plain colored"></i></a>
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-visualstudio-plain colored"></i></a>
                        <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">
                            <i className="devicon-nginx-original"></i></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;
import React from 'react';
import ns from '../../pic/ns.png';
import color from '../../pic/color.png'
import './Projects.css';


const Projects = () => {

    return(
        <section id='projects'>
            <h2 className='headings'>Projects</h2>
            <div className='contgrid'>
                <div>
                    <img alt={ns} className='projectPic' src={ns}/>
                    <div className='project-description'>
                        <div className='project-name ns'>
                            <h3 className='h3'>#NoSponsors</h3>
                        </div>
                        <p>#NoSponsors is a Full Stack Application I built as a Student during my time in DevMountain.
                            It features a forum where off-Road enthusiasts can collaborate on their vehicle builds it allows
                             includes a store where they can buy products to support the off-road #nosponsors community.
                        </p>
                    </div>
                    <p className='techs'>React <span> | </span> Stripe <span> | </span> Nodejs <span> | </span> bcrypt <span> | </span> PostgreSql</p>
                    <a href="http://157.245.239.118:3000/" target="_blank" rel="noopener noreferrer"><span className='live-site'>Live Site</span></a>  
                </div>

                <div>
                    <img alt={color} className='projectPic' src={color}/>
                    <div className='project-description'>
                        <div className='project-name colorizer'>
                            <h3 className='h3'>Colorizer</h3>
                        </div>
                        <p>A collaborative drawing app built as a group project with my Teammate Jared Baur.
                            Colorizer allows multiple users to draw on the same Canvas and export their final art
                            in a png file. A great app to have fun with friends and family.
                        </p>
                    </div>
                    <p className='techs'>React <span> | </span> Nodejs <span> | </span> Socket.io <span> | </span> Mongoose MDB</p>
                    <a href="https://colorizer.io/" target="_blank" rel="noopener noreferrer"><span className='live-site'>Live Site</span></a> 
                </div>
            </div>
        
    
        </section>
    )
}

export default Projects;
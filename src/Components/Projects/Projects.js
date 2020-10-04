import React from 'react';
import './Projects.css';
import data from '../../data'
import { MDBAnimation } from "mdbreact";

const Projects = () => {
    const sectionName = 'Projects'
    const btnText = 'Live Site'

    return(
        <section id='projects'>
                  <h2 className='headings'>{sectionName}</h2>
                    <div className='contgrid'>
                        {data.map(({name, image, technologies, liveSite, description, id}, i) => 
            //   <MDBAnimation reveal type='fadeIn'>
                            <div key={id}>
                               <img alt={name} className='projectPic' src={image}/>
                                <div className='project-description'>
                                    <div className='project-name ns'>
                                        <h3 className='project-name'>{name}</h3>
                                    </div>
                                    <p>{description}</p>
                                </div>
                                <p className='techs'>
                                    {technologies.map((techs, i, arr) =>
                                    arr.length-1 === i? <span key={i}> {techs}</span> : <span key={i}> {techs} |</span>
                                    )}
                                </p>
                                <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                    <span className='live-site'>{btnText}</span>
                                </a>  
                            </div>
                        // </MDBAnimation>
                        )}
                    </div>      
        </section>
    )
}

export default Projects;
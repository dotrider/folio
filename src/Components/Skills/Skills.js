import React from 'react';
import { Grid, CardMedia, Typography, CardContent, makeStyles } from '@material-ui/core'
import { MDBAnimation } from "mdbreact";
import './Skills.css';


const Skills = () => {
    const sectionName = ['Technical', 'Skills']

    return(
        <section id='skills'>
            
        <Typography variant='h6' className='headings'>{sectionName[0]} <span className='bold fcgrey'>{sectionName[1]}</span></Typography>
            <MDBAnimation reveal type='fadeInUp' id ='skillSection'>
                        <Grid className='skillSet'>
                            <Grid className='sec'>
                                <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-react-original-wordmark colored"></i></a>
                                <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-express-original"></i></a>
                                <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-nodejs-plain colored"></i></a>
                                <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-postgresql-plain-wordmark colored"></i></a>
                            </Grid>
                            <Grid className='sec'>
                                <a href="https://www.javascript.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-javascript-plain colored"></i></a>
                                <a href="https://html.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-html5-plain-wordmark colored"></i></a>
                                <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-css3-plain-wordmark colored"></i></a>
                                <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-sass-original colored"></i></a>
                            </Grid>
                            <Grid className='sec'>
                                <a href="https://wordpress.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-wordpress-plain"></i></a>
                                <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-git-plain colored"></i></a>
                                <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-visualstudio-plain colored"></i></a>
                                <a href="https://www.nginx.com/" target="_blank" rel="noopener noreferrer">
                                    <i className="devicon-nginx-original"></i></a>
                            </Grid>
                        </Grid>
            </MDBAnimation>
        </section>
    )
}

export default Skills;
import React from 'react';
import './Projects.css';
import data from '../../data'
import { Grid, CardMedia, Typography, CardContent, makeStyles } from '@material-ui/core'
import { MDBAnimation } from "mdbreact";

const useStyles = makeStyles({
    //Main grid container
    gridCont: {
        width: '95%',
        margin: '0 auto'
      },
      cardCont: {
          textAlign: 'center'
      },
      singleGrid: {
          padding: '.85em'
      }
  });



const Projects = () => {
    const sectionName = 'Projects'
    const btnText = 'Live Site'

    const classes = useStyles();



    return(
        <section id='projects'>

                 <MDBAnimation reveal type='fadeInUp'>
                 	<Typography variant='h6' className='headings'>{sectionName.slice(0,3)}
                 	    <span className='bold fcgrey'>{sectionName.slice(3)}</span>
                 	</Typography>
                 </MDBAnimation>

                  <Grid container justify='center' className={classes.gridCont} spacing={3}>
                            {data.map(({name, image, technologies, liveSite, description, id}, i) => 
                                    <Grid item xs={12} sm={6} className={classes.singleGrid} key={id}>
                                        <MDBAnimation reveal type='fadeInUp'>
    
                                        <CardMedia 
                                            alt={name} 
                                            className='projectPic' 
                                            component="img" 
                                            image={image}
                                        />
                                        <CardContent className={classes.cardCont}>
                                            <Typography variant='subtitle1' className='ns'>{name}</Typography>
                                                <div className='description'>
                                                	<Typography variant='body2'>{description}</Typography>
                                                </div>
                                                    <div className='technologies'>
                                                        <Typography variant='subtitle2' className='techs'>
                                                            {technologies.map((techs, i, arr) =>
                                                                arr.length-1 === i? 
                                                                    <span key={i}> {techs}</span> 
                                                                        : 
                                                                    <span key={i}> {techs} |</span>
                                                            )}
                                                        </Typography> 
                                                    </div>
                        
                                            <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                                <Typography className='live-site'>{btnText}</Typography>
                                            </a>  
                          
                                        </CardContent>
    
                                        </MDBAnimation>
                                    </Grid>
                            )}
                  </Grid>     
        </section>
    )
}

export default Projects;
import React, { useState } from 'react';
// import {useSpring, animated} from 'react-spring'
import { MDBAnimation, MDBTypography } from "mdbreact";
import './Home.css';
import { Typography, Grid } from '@material-ui/core'

const Landing = () => {
    const [ user, setUser ] = useState({
        firstName: 'Pablo',
        lastName: 'Miranda',
        occupation: ['Full Stack', 'Web Developer']
    })
 

    const { firstName, lastName, occupation } = user
    return(
        <section id='home'>
           <div className='home-text-cont'>
     
               	<MDBAnimation type='slideInLeft' duration="1s">
               	   <Typography variant='h4' > 
               	         {firstName} 
               	         <span className='bold-text'> {lastName}</span>
               	   </Typography>
               	</MDBAnimation>
               	 <Typography variant='h4' className='occupation-text'>
               	     <MDBAnimation type='fadeIn' duration="3.5s">
               	         {occupation[0]}
               	     </MDBAnimation>
               	     <MDBAnimation type='slideInLeft' duration="1s">
               	         <span className='bold-text'>{occupation[1]}</span>
               	     </MDBAnimation>
               	 </Typography>
    
           </div>
        </section>
    )
}

export default Landing;
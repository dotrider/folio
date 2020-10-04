import React, { useState } from 'react';
// import {useSpring, animated} from 'react-spring'
import { MDBAnimation } from "mdbreact";
import './Home.css';
import { Typography } from '@material-ui/core'

const Landing = () => {
    const [ user, setUser ] = useState({
        firstName: 'Pablo',
        lastName: 'Miranda',
        occupation: ['Full Stack', 'Web Developer']
    })
 

    const { firstName, lastName, occupation } = user
    return(
        <section id='home'>
           <MDBAnimation type='fadeIn' className='home-text-cont'>
              <Typography variant='h4'> 
                    {firstName} 
                    <span className='bold-text'> {lastName}</span>
              </Typography>
                    <Typography variant='h4' className='occupation-text'>
                        {occupation[0]}
                        <span className='bold-text'> <br/> {occupation[1]}</span>
                    </Typography>
           </MDBAnimation>
        </section>
    )
}

export default Landing;
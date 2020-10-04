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
        <section id='home' className='home-text-cont'>
           <MDBAnimation type='slideInLeft'>
              <Typography variant='h4'> 
                    {firstName} 
                    <span className='bold-text'> {lastName}</span>
              </Typography>
           </MDBAnimation>
                    <Typography variant='h4' className='occupation-text'>
                        <MDBAnimation type='slideInRight'>
                            {occupation[0]}
                        </MDBAnimation>
                        <MDBAnimation type='slideInLeft'>
                            <span className='bold-text'>{occupation[1]}</span>
                        </MDBAnimation>
                    </Typography>
        </section>
    )
}

export default Landing;
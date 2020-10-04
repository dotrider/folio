import React, { useState } from 'react';
// import {useSpring, animated} from 'react-spring'
import { MDBAnimation } from "mdbreact";
import Nav from '../Nav/Nav';
import './Landing.css';

const Landing = () => {
    const [ user, setUser ] = useState({
        firstName: 'Pablo',
        lastName: 'Miranda',
        occupation: ['Full Stack', 'Web Developer']
    })
 

    const { firstName, lastName, occupation } = user
    return(
        <section id='home' className='landing'>
            <Nav/>
           <MDBAnimation type='fadeIn'>
                <div className='mainText'>
                    <div><h1 className='name'>{firstName} <span className='bold'>{lastName}</span></h1>
                        <h1 className='title'> {occupation[0]}
                        <span className='bold'> <br/> {occupation[1]}</span></h1>
                    </div>
                </div>
           </MDBAnimation>
        </section>
    )
}

export default Landing;
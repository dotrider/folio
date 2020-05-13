import React from 'react';
// import { SocialMediaIconsReact } from 'social-media-icons-react';
import {useSpring, animated} from 'react-spring'
import Nav from '../Nav/Nav';
import './Landing.css';

const Landing = () => {
    const fade = useSpring({from:{ opacity: 0}, to:{opacity: 1}, config: { duration: 2000 }})

    return(
        <section id='home' className='landing'>
            <Nav/>
           <animated.div style={fade}>
                <div className='mainText'>
                    <div><h1 className='name'>Pablo <span className='bold'>Miranda</span></h1>
                        <h1 className='title'>Full Stack
                        <span className='bold'> <br/> Web Developer</span></h1>
                    </div>
                </div>
           </animated.div>
        </section>
    )
}

export default Landing;
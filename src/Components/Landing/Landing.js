import React from 'react';
// import { SocialMediaIconsReact } from 'social-media-icons-react';
import {useSpring, animated} from 'react-spring'
import './Landing.css';

const Landing = () => {
    const fade = useSpring({from:{ opacity: 0}, to:{opacity: 1}, config: { duration: 2000 }})

    return(
        <section id='home' className='landing'>
           <animated.div style={fade}>
                <div className='mainText'>
                <div><h1>Hi!</h1>
                <h1><span className='bold'>I'm</span> Pablo,
                <span className='title'> Full Stack Web
                <span className='bold'> Developer</span></span></h1></div>
                </div>
           </animated.div>
        </section>
    )
}

export default Landing;
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
                <span className='title'> A Full Stack Web
                <span className='bold'> Developer</span></span></h1></div>
                </div>
                {/* <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="twitter" 
                iconColor="rgba(55,55,55,1)" backgroundColor="rgba(28,186,223,0)"   
                url="https://twitter.com/" size="70" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)" icon="linkedin" 
                iconColor="rgba(55,55,55,1)" backgroundColor="rgba(28,186,223,0)"  
                url="https://www.linkedin.com/" size="70" />
                <SocialMediaIconsReact borderColor="rgba(0,0,0,0.25)"  icon="github" 
                iconColor="rgba(55,55,55,1)" backgroundColor="rgba(28,186,223,0)"  
                url="https://github.com/" size="70" /> */}
           </animated.div>
        </section>
    )
}

export default Landing;
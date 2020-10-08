import React, { useState } from 'react';
import { Link } from 'react-scroll'
import ExpandLessRoundedIcon from '@material-ui/icons/ExpandLessRounded';
import './ScrollUp.css'

const ScrollUp = () => {

    const [ isVisible, setIsVisible ] = useState(false)

    const toggleView = () => {
        //show scrollTop btn if it's above 450
        window.pageYOffset > 450 ?
            setIsVisible(true) : setIsVisible(false)
    }

    //checking to see whether to display scroll btn in the screen
    document.addEventListener('scroll', toggleView)

    return(
        <>
            {
                isVisible && (
                    <Link
                        activeClass="active"
                        to='heading'
                        spy={true}
                        smooth={true}
                        duration= {800}
                    >
                         <ExpandLessRoundedIcon 
                            button='true'
                            id='scroll-up'
                            fontSize='large'
                        />
                    </Link>
                )
            }
        </>
    )
}

export default ScrollUp;
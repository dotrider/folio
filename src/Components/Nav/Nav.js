import React from 'react';
import {Link} from 'react-scroll'
import { Typography } from '@material-ui/core'
import { MDBAnimation } from "mdbreact";
import './Nav.css';

const Nav = () => {

    const navMenu = [
                        {
                            id: 0,
                            name: 'Projects', 
                            page: 'projects'
                        },
                        {   
                            id: 1,
                            name: 'Skills', 
                            page: 'skills'
                        },
                        {
                            id: 2,
                            name: 'About Me', 
                            page: 'about'
                        }
                    
                    ]

    return(
           <header id='heading'>
                <MDBAnimation type='fadeIn' delay="1s">
                        <nav id='nav'>
                            {
                                navMenu.map(({id, name, page}) => 
                                    <Link id={id}  
                                        activeClass="active"
                                        to={page}
                                        spy={true}
                                        smooth={true}
                                        // offset={-70}
                                        duration= {600} 
                                    >
                                                <Typography variant='subtitle1' className='nav-link'>
                                                    {name}
                                                </Typography>
                                    </Link>
                                )
                            }
                        </nav>
                    </MDBAnimation>
            </header>
    )
}

export default Nav;
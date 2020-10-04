import React from 'react';
import {Link} from 'react-scroll'
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
                            name: 'About', 
                            page: 'about'
                        }
                    
                    ]

    return(
           <header id='heading'>
                <nav id='nav'>
                    {
                        navMenu.map(({id, name, page}) => 
                            <Link id={id}  
                                activeClass="active"
                                to={page}
                                spy={true}
                                smooth={true}
                                // offset={-70}
                                duration= {600} className="item"><span className='menu'>{name}</span>
                            </Link>
                        )
                    }
                </nav>
            </header>
    )
}

export default Nav;
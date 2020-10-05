import React from 'react';
// import { Link } from 'react-scroll';
import './Footer.css';

const Nav = () => {
  const year = 2020

    return(
            <footer id='footer'>
                <p> &copy; <span id='year'>{year}</span> </p>
             </footer> 
    )
}

export default Nav;
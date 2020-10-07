import React, { useState } from 'react';
import { MDBAnimation } from "mdbreact";
import './Home.css';
import { Typography, createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core'


//creating a theme
let theme = createMuiTheme();
//passing theme to RFS function to get updated theme
theme = responsiveFontSizes(theme)



const Landing = () => {
    const [ user ] = useState({
        firstName: 'Pablo',
        lastName: 'Miranda',
        occupation: ['Full Stack', 'Web Developer']
    })
 

    const { firstName, lastName, occupation } = user
    return(
        <section id='home'>
           <MuiThemeProvider theme={theme}>
               <div className='home-text-cont'>
         
                   	<MDBAnimation type='slideInLeft' duration="1s">
                   	   <Typography variant='h2' > 
                   	         {firstName} 
                   	         <span className='bold-text'> {lastName}</span>
                   	   </Typography>
                   	</MDBAnimation>
                   	 <Typography variant='h2' className='occupation-text'>
                   	     <MDBAnimation type='fadeIn' duration="3.5s">
                   	         {occupation[0]}
                   	     </MDBAnimation>
                   	     <MDBAnimation type='slideInLeft' duration="1s">
                   	         <span className='bold-text'>{occupation[1]}</span>
                   	     </MDBAnimation>
                   	 </Typography>
        
               </div>
           </MuiThemeProvider>
        </section>
    )
}

export default Landing;
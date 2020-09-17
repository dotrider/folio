import noSponsors from './pic/ns.png'
import colorizer from './pic/color.png'
import keepItTight from './pic/keepItTight.png'
import landscapings from './pic/landscapings.gif'

const data = [
    {
        id: 1,
        name: '#noSponsors',
        image: noSponsors,
        technologies: ['React', 'Stripe', 'NodeJs', 'bCrypt', 'PostgreSql'],
        liveSite: 'http://157.245.239.118:3000/',
        description: `#NoSponsors is a Full Stack Application I built as a Student during my time in DevMountain.
        It features a forum where off-Road enthusiasts can collaborate on their vehicle builds it 
        includes a store where they can buy products to support the off-road #nosponsors community.`


    },
    {
        id: 2,
        name: 'Colorizer',
        image: colorizer,
        liveSite: 'https://colorizer.io/',
        technologies: ['React', 'NodeJs', 'Socket.io', 'Mongoose MDB'],
        description: `A collaborative drawing app built as a group project with my Teammate Jared Baur.
        Colorizer allows multiple users to draw on the same Canvas and export their final art
        in a png file. A great app to have fun with friends and family.`

    },
    {
        id: 3,
        name: 'Keep it tight',
        image: keepItTight,
        liveSite: 'https://github.com/dotrider/keepItTight',
        technologies: ['React', 'NodeJs', 'ExpressJS', 'Mongoose MDB'],
        description: `Full stack the app built from the ground up that
       allows users to keep track of their spending and expenses with a reflecting
       balance of current time. `

    },

    {
        id: 4,
        name: 'MMS Landscaping Services',
        image: landscapings,
        liveSite: 'http://mmslandscapingservices.com',
        technologies: ['Material UI', 'Recaptcha', 'Nodemailer', 'gsap'],
        description: `Quarter stack app built with React for the FrontEnd as well as Nodejs and expressjs for the backend. The site displays information about the company in a user friendly UI. It also features a contact form enforced by Google's Re-Captcha to prevent spam emails to the admin.`
    }
]

export default data
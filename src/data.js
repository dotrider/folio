import noSponsors from './pic/ns.png'
import colorizer from './pic/color.png'

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

    }
]

export default data
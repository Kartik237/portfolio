import self from "../img/self.png"
import mock1 from "../img/my-desk.png"
import mock2 from "../img/Noise Reduction.png"
import mock3 from "../img/Portfolio.png"
import mock4 from "../img/Simployee.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(168,194,195), rgb(235,183,141)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Kartik",
    lastName: "Mishra",
    initials: "Km", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Frontend Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '☕',
            text: 'fueled by chai'
        },
        {
            emoji: '🌎',
            text: 'based in India'
        },
        {
            emoji: "💼",
            text: "Student @ IIITM, Gwalior"
        },
        {
            emoji: "📧",
            text: "kartik237@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.facebook.com/shubh.mishra.311",
            icon: "fa fa-facebook",
            label: 'facebook'
        },
        {
            link: "https://www.instagram.com/kartik237/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Kartik237",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/kartikmishra237/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Kartik. I'm a student at IIITM Gwalior and pursuing B.Tech in IT and MBA. I am an enthusiastic, self-motivated, responsible and hard working person. I am a mature team worker and adaptable to all challenging situations. I am able to work well both in a team environment as well as using own initiative.",
    skills:
        {
            proficientWith: ['C++','Javascript', 'React.js','MySql', 'Bootstrap', 'Html5', 'Css3'],
            exposedTo: ['Machine Learning', 'Deep Learning', 'Vue.js']
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'basketball',
            emoji: '🏀'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "My Desk",
            source: "https://github.com/Kartik237/My-desk", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1,
            live: "https://mydeskk.netlify.app/"
        },
        {
            title: "Noise Suppression",
            source: "https://github.com/Kartik237/NoiseReduction",
            image: mock2,
            live: ""
        },
        {
            title: "Portfolio",
            source: "https://github.com/paytonjewell",
            image: mock3,
            live: ""
        },
        {
            title: "Simployee",
            source: "https://github.com/Kartik237/simployee-frontend",
            image: mock4,
            live: "https://simployee.netlify.app/"
        }
    ]
}
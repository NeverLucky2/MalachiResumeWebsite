import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import Onion from '../images/OnionLayDown.jpg';
import AirlinePath from '../images/portfolio/AirlinePath.png';
import AstriteGG from '../images/portfolio/Astritegg.png'
import MarioScream from '../images/portfolio/MarioScream.png';
import ReimbursementWebsite from '../images/portfolio/ReimbursementWebsite.png'
import TournamentBracket from '../images/portfolio/TournamentBracket.png'
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  ReferenceSection,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Malachi Tzuoo Resume',
  description: "Malachi Tzuoo's next.js website (built with Tim Baker's react resume template)",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  About: 'about',
  References: 'references',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Malachi Tzuoo`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hello and welcome to my website! I'm a <strong className="text-stone-100"> Computer Science </strong> and <strong className="text-stone-100"> Business Administration </strong>
        major based in Chicago looking to be a Software Engineer. 
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        This is a next.js website hosted statically with AWS! Enjoy your stay and hope you learn a bit more about me!
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/MalachiTzuooResume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact Info',
      primary: false,
    },
  ],
};


/**
 * Resume section
 */

export const education: TimelineItem[] = [
  {
    date: 'November 2022',
    location: 'Depaul University',
    title: 'Bachelors in Computer Science',
    content: <p>A private school in the city of Chicago. The computer science program covers a wide range of topics, 
    including multiple programming languages, data structures, algorithms, SQL and software design.</p>,
  },
  {
    date: 'July 2021',
    location: 'Linkoping University',
    title: 'Bachelors in Business Administration',
    content: <p>Business Degree with the dual degree program 'Atlantis' which starts at INSEEC in France and finishes at Linkoping university in Sweden.</p>,
  },
];

export const certifications: TimelineItem[] = [
  {
    date: 'April 2024',
    location: 'Amazon Web Services',
    title: 'AWS Certified Developer Associate',
    content: <p>
      • Covers AWS architecture, the best practices for developing, deploying, and debugging cloud-based applications.<br></br>
      • Over 200 hours of hands-on lab sessions including Lambda function, Dynamo DB, SNS/SQS, Kinesis, CodePipeline and many 
      other modern DevOps practices hosted through AWS managed services.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'June 2023 - Now',
    company: 'Astrite.gg',
    location: 'Remote',
    title: 'Astro Front-end Software Developer Intern',
    content: (
      <p>
        • Develop and maintain Astrite.gg, a website built with Astro, serving 10,000+ monthly users.<br></br>
        • Implemented responsive and intuitive user interfaces using TypeScript and modern front-end technologies.<br></br>
        • Collaborated with team members to ensure seamless integration of front-end components built with React and Tailwind  hosted on Fly.io, 
        with back-end systems utilizing Supabase, PostgreSQL, and Drizzle ORM.<br></br>
        • Utilized version control with Github for efficient code management and collaboration.<br></br>
        • Conducted regular code reviews and refactoring to maintain code quality and efficiency.
      </p>
    ),
  },
  {
    date: 'March 2023 - July 2023',
    company: 'Revature',
    location: 'Reston, VA',
    title: 'Ruby Full Stack Software Developer',
    content: (
      <p>
        • Gained proficiency in full-stack development by crafting web applications, notably a blogging app which allows
        users to share posts online and interact with other users in real time, using Ruby on Rails for the backend,
        complemented by JavaScript/TypeScript, HTML and CSS for React-powered frontend.<br></br>
        • Employed PostgreSQL as the primary database solution, while facilitating JSON-based data exchange between
        frontend and backend through Axios and RESTful APIs to create an AWS deployed web application with RDS.<br></br>
        • Designed and implemented CI/CD pipelines from scratch within GitHub, improving efficiency by automating code
        deployment and streamlining workflows across multiple repositories.
      </p>
    ),
  },
];

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Cantonese',
        level: 4,
      },
      {
        name: 'Mandarin',
        level: 4,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 6,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Astro',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Ruby on Rails',
        level: 6,
      },
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 6,
      },
    ],
  },
  {
    name: 'Cloud Computing (AWS)',
    skills: [
      {
        name: 'EC2',
        level: 8,
      },
      {
        name: 'RDS',
        level: 8,
      },
      {
        name: 'S3',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Astrite.gg',
    description: 'Astrite.gg is a tracker for hit mobile/pc game Wuthering Waves. The website runs a script to take your gacha history from the game and analyzes the data into nice organized pages.',
    url: 'https://astrite.gg/',
    image: AstriteGG,
  },
  {
    title: 'Mario Screaming bot',
    description: 'Mario Screaming bot is a side project made in Javascript for syntax practice and entertainment. Uses token authentication for usage. Hosted on Replit and uses uptimerobot to maintain bot uptime autonomously. Used for miscellaneous functions, such as joining voice chat to play audio, altering texts, etc.',
    url: 'https://replit.com/@MalachiTzuoo',
    image: MarioScream,
  },
  {
    title: 'Team Seeder',
    description: 'This is a tournament bracket generator created for my senior capstone project. Though depreciated, allows for login, creation of teams and can find other teams based on id to automatically seed players.',
    url: 'http://3.19.130.110/',
    image: TournamentBracket,
  },
  {
    title: 'Airline Shortest Path',
    description: `Airline Shortest Path is a python program used to demonstrate the use of dijkstra's algorithm. User would enter the number of terminals + weight and the program would find the shortest possible path between 2 specified terminals.`,
    url: 'https://github.com/NeverLucky2/AirlineShortestPath',
    image: AirlinePath,
  },
  {
    title: 'Reimbursement App',
    description: 'Reimbursement app is a web and Internet-facing app made for Revature. Also depreciated, individuals can create accounts, reimbursement requests and view their submitted requests while managers can respond to the requests by completing the requests and/or delete them. Utilizes primarily Ruby on rails, REST API, React, AWS, GitHub and Extreme Programming agile methodology.',
    url: 'http://mm-ror-project2-bucket.s3-website-us-east-1.amazonaws.com/',
    image: ReimbursementWebsite,
  },
];


/**
 * Reference section
 */
export const reference: ReferenceSection = {
  imageSrc: Onion,
  references: [
    {
      contact: 'Email: august.duet@revature.com',
      contact2: 'Number: 585-899-0837',
      info: 'August Duet, Principal Lead Trainer at Revature',
    },
    {
      contact: 'Email: marci.parrish@alphaomega.com',
      contact2: 'Number: 417-726-249',
      info: 'Marci Parrish, Talent Acquisition Lead at Alpha Omega Integration',
    },
    {
      contact: 'Email: yusufraza261@gmail.com',
      contact2: 'Number: 610-517-0264',
      info: 'Yusef Raza, Program Director at Alpha Omega Integration',
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an Asian-American boy born and raised in the suburbs of Chicago. I finished my studies at Depaul while also taking the 'Atlantis' 
  dual degree program. In my free time I love to do activities such as weight training, rock climbing and even playing games. I also have 3 cats whom I love dearly.`,
  aboutItems: [
    {label: 'Location', text: 'Chicago, IL', Icon: MapIcon},
    {label: 'Age', text: '25', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Taiwanese American', Icon: FlagIcon},
    {label: 'Interests', text: 'Rock Climbing, Gym, Games', Icon: SparklesIcon},
    {label: 'Study', text: 'Depaul University, Linkoping University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Astrite.gg', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'My contact and location info:',
  items: [
    {
      type: ContactType.Email,
      text: 'mtzuoo@gmail.com',
      href: 'mailto:mtzuoo@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chicago, IL',
      href: 'https://maps.app.goo.gl/MEW9rf9fr5S7dbgJ6',
    },
    {
      type: ContactType.Github,
      text: 'NeverLucky2',
      href: 'https://github.com/NeverLucky2',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/NeverLucky2'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/malachi-tzuoo-depaul/'},
];

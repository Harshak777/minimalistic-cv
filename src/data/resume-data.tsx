import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Harshak Krishnaa Keerthipati",
  initials: "KHK",
  location: "Tempe, Arizona, MST",
  locationLink: "https://www.google.com/maps/place/Tempe",
  about:
    "CS Grad at ASU",
  summary:
    [
      "I am currently pursuing a Master of Science in Computer Science at Arizona State University as a graduate student graduating by May 2024. With over 1.5 years of relevant experience in full-stack and cloud software engineering, I am eager to explore new opportunities that will enable me to gain hands-on expertise in my chosen field.",
      "I am a seasoned professional with a strong commitment to excelling in Web Development, Cloud Computing, and Blockchain domains. My well-developed organizational skills and unwavering dedication to my craft position me to actively seek a challenging role. I am eager to acquire valuable practical knowledge while enhancing my expertise in the complex technical landscape.",
    ],
  avatarUrl: "/hk.jpeg",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "kharshak777@gmail.com",
    tel: "+16025825111",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/harshak777",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kharshak777/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "Arizona State University",
      degree: "Master of Science in Computer Science",
      start: "Aug. 2022",
      end: "May. 2024",
    },
    {
      school: "Amrita Vishwa Vidyapeetham",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      start: "Jun. 2017",
      end: "Aug. 2021",
    },
  ],
  work: [
    {
      company: "Fovus Corporation",
      link: "https://www.linkedin.com/company/fovus/",
      badges: ["Tempe, AZ"],
      title: "Software Developer Intern",
      // logo: ParabolLogo,
      start: "Oct. 2023",
      end: "Jan. 2024",
      description:
        [
          "• Led the creation of thorough unit test cases and integrated API mocking for the HPC platform dashboard, ensuring meticulous testing and validation.",
          "• Substantially improved overall platform stability by addressing warnings and errors, resulting in a noteworthy 70\% boost in codebase reliability.",
          "• Established a streamlined GitHub Actions workflow for automated unit testing on commits, efficiently optimizing the development pipeline and ensuring ongoing codebase integrity."
        ]
    },
    {
      company: "Vanenburg",
      link: "https://www.vanenburg.com",
      badges: ["Coimbatore, India"],
      title: "Associate Software Engineer",
      // logo: ClevertechLogo,
      start: "Jan. 2021",
      end: "Jun. 2022",
      description:
      [
        "• Led and coordinated a team of interns in the creation of a Google Chat Bot service, successfully integrating it with our Low Code/No Code platform thus substantially enhancing user workflow efficiency.",
        "• Engineered and optimized a transformative grid widget module to enhance data administration, substantially expanding platform capabilities while eliminating coding constraints for improved user and developer accessibility.",
        "• Devised a platform plugin architecture, seamlessly integrating third-party functions, thereby amplifying feature diversity and user tool compatibility."
      ]
    },
    {
      company: "Sprytech",
      link: "https://www.sprytech.uk",
      badges: ["Remote"],
      title: "Blockchain Application Developer Intern",
      // logo: JojoMobileLogo,
      start: "Apr. 2020",
      end: "Jan. 2021",
      description:
      [
        "• Designed and implemented an interoperable token transfer bridge, significantly enhancing cross-chain operability by enabling seamless exchange of native standard tokens between Ethereum and Hedera/Avalanche blockchains.",
        "• Engineered a secure server utilizing the Hedera Token Service (HTS) protocol for the Vaccine Passport Application, ensuring tamper-proof storage and retrieval of COVID-19 vaccination data.",
        "• Developed 'Play2Win', a trivia game which incentivizes and rewards players in crypto token based on their knowledge."
      ]
    },
    {
      company: "Indian Institute of Information Technology",
      link: "https://www.iiitdm.ac.in",
      badges: ["Kancheepuram, India"],
      title: "Research Intern",
      // logo: NSNLogo,
      start: "Apr. 2019",
      end: "Jun. 2019",
      description: 
      [
        "• Contributed to the creation of a Vehicle Tire Alignment System, utilizing Computer Vision techniques such as Hough circles and depth mapping through the implementation of the OpenCV Python package.",
        "• This endeavor aimed to devise a cost-efficient methodology for angle measurement in the automotive sector, with the strategic goal of achieving a 60\% reduction in solution production costs.",
      ]
    },
  ],
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Angular2",
    "D3.js",
    "Web3.js",
    "GoLang",
    "Kotlin",
    "AWS",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Java",
    "Jest",
  ],
  projects: [
    {
      title: "Guardian - Angel",
      techStack: [
        "Kotlin",
        "Firebase",
        "Google Maps API",
        "Google Places API",
        "Material UI"
      ],
      description: "hello world",
      // logo: ConsultlyLogo,
      link: {
        label: "Github",
        href: "https://github.com/Shikhar97/Guardian-Angel/",
      },
    },
    {
      title: "Marketplace",
      techStack: [
        "Solidity",
        "Web3JS",
        "ReactJS",
        "Ganache",
        "Truffle",
        "Chai"
      ],
      description: "hello world",
      link: {
        label: "github.com",
        href: "https://github.com/Three-Blocks-CSE598/three-blocks-marketplace",
      },
    },
    {
      title: "Monito",
      techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
      description:
        "Browser extension that records everything happening in a web application",
      logo: MonitoLogo,
      link: {
        label: "monito.dev",
        href: "https://monito.dev/",
      },
    },
    {
      title: "Jarocki.me",
      techStack: ["Side Project", "Next.js", "MDX"],
      description:
        "My personal website and blog. Built with Next.js and Notion API",
      logo: JarockiMeLogo,
      link: {
        label: "github.com",
        href: "https://jarocki.me/",
      },
    },
    {
      title: "Minimal",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Minimalist calendars, habit trackers and planners generator",
      logo: Minimal,
      link: {
        label: "useminimal.com",
        href: "https://useminimal.com/",
      },
    },
    {
      title: "Barepapers",
      techStack: ["Side Project", "Next.js", "Puppeteer"],
      description:
        "Generates beautiful wallpapers using random shapes and gradients",
      logo: BarepapersLogo,
      link: {
        label: "barepapers.com",
        href: "https://barepapers.com/",
      },
    },
    {
      title: "Year progress",
      techStack: ["Side Project", "TypeScript", "Next.js"],
      description: "Tracks current year progress and displays a countdown",
      logo: YearProgressLogo,
      link: {
        label: "getyearprogress.com",
        href: "https://getyearprogress.com/",
      },
    },
    {
      title: "Parabol",
      techStack: [
        "Full Stack Developer",
        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "The Agile meeting co-pilot that delivers better meetings with less effort",
      logo: ParabolLogo,
      link: {
        label: "github.com",
        href: "https://parabol.co/",
      },
    },
    {
      title: "Evercast",
      techStack: [
        "Lead Frontend Developer",

        "TypeScript",
        "React",
        "Node.js",
        "GraphQL",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
    {
      title: "Mobile Vikings",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for leading virtual mobile operator in Poland",
      logo: MobileVikingsLogo,
      link: {
        label: "mobilevikings.pl",
        href: "https://mobilevikings.pl/",
      },
    },
    {
      title: "Howdy",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Howdy is a place for you to join communities you care about",
      logo: Howdy,
      link: {
        label: "play.google.com",
        href: "https://howdy.co/",
      },
    },
    {
      title: "Tastycloud",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application for managing and displaying restaurant menus in kiosk mode",
      logo: TastyCloudLogo,
      link: {
        label: "tastycloud.fr",
        href: "https://www.tastycloud.fr/",
      },
    },
    {
      title: "Ambit",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with sharing your contact details",
      logo: AmbitLogo,
    },
    {
      title: "Bim",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Android application that helps with booking a table in a restaurants",
      logo: BimLogo,
    },
    {
      title: "Canal Digital GO",
      techStack: ["Lead Android Developer", "Android", "Kotlin"],
      description:
        "Video streaming mobile application for Canal Digital subscribers",
      logo: CDGOLogo,
    },
  ],
} as const;

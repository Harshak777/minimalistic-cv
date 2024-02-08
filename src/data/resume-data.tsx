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
      "I am currently pursuing a Master of Science in Computer Science at Arizona State University as a graduate student graduating by May 2024. With over 2 years of relevant experience in full-stack and cloud software engineering, I am eager to explore new opportunities that will enable me to gain hands-on expertise in my chosen field.",
      "I am a seasoned professional with a strong commitment to excelling in Web Development, Cloud Computing, and Blockchain domains. My well-developed organizational skills and unwavering dedication to my craft position me to actively seek a challenging role. I am eager to acquire valuable practical knowledge while enhancing my expertise in the complex technical landscape.",
    ],
  avatarUrl: "/hk.jpeg",
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
    ],
    resume: "/Harshak_Krishnaa_Keerthipati_Resume.pdf"
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
      title: "Email Verifier",
      techStack: [
        "Side Project",
        "GoLang"
      ],
      description: "Email verifier application built using \"net\" package of go.",
      link: {
        label: "Github",
        href: "https://github.com/Harshak777/go-email-verifier",
      },
    },
    {
      title: "Guardian - Angel",
      techStack: [
        "Lead Android Developer",
        "Kotlin",
        "Firebase",
        "Google Maps API",
        "Google Places API",
        "Material UI"
      ],
      description: "Health-focused app with personalized tracking and wellness insights.",
      link: {
        label: "Github",
        href: "https://github.com/Shikhar97/Guardian-Angel/",
      },
    },
    {
      title: "Marketplace",
      techStack: [
        "Lead Frontend Developer",
        "Solidity",
        "Web3JS",
        "ReactJS",
        "Ganache",
        "Truffle",
        "Chai"
      ],
      description: "Ethereum-based marketplace for secure, transparent cryptocurrency transactions.",
      link: {
        label: "Github",
        href: "https://github.com/Three-Blocks-CSE598/three-blocks-marketplace",
      },
    },
    {
      title: "Data Streaming pipeline",
      techStack: ["Academic Project", "Minikube", "Neo4j", "Kafka", "Zookeeper", "Python"],
      description: "Created scalable data streaming on Kubernetes, distributing documents to Neo4j graph database.",
    },
    {
      title: "Image Recognition using Deep Learning",
      techStack: ["Academic Project", "EC2", "S3", "SQS", "Lambda", "DynamoDB", "Flask"],
      description:
        "Built image recognition app, EC2 autoscaling, and Lambda-triggered video analysis.",
    },
    {
      title: "PaySol",
      techStack: ["Full Stack Developer", "NextJS", "MongoDB", "PusherJS", "SolanaWeb3JS"],
      description:
        "Built decentralized messaging with Solana wallet for secure cryptocurrency transactions.",
      // logo: ,
      link: {
        label: "paysol",
        href: "https://goofy-darwin-392620.netlify.app/",
      },
    },
  ],
} as const;

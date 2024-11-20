import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marco Predari",
  initials: "MP",
  location: "Milano, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Milano",
  about:
    "Software Engineer focused on ship robust and good quality software.",
  summary:
    "Hello there, here's Marco, 10 years of experience as <b>Software Engineer</b> in the software industry. I headed my career path to <b>Software Architect</b> roles in start-ups and in consultancy. I think to be the missing piece for companies aiming to create great quality products without sacrificing productivity and delivery.<br>Based in Milan, but frequently around the Globe, I've great experience in Remote working even before pandemic. <br>Last, but not least, I'm an incredible bartender. Why is that relevant? Company events can be funnier than ever expected, isn't it?",
  avatarUrl: "https://avatars.githubusercontent.com/u/5390248?v=4",
  personalWebsiteUrl: "https://predorock.github.io/cv",
 
  contact: {
    email: "predorock@gmail.com",
    tel: "+393336823157",
    cv: "./marco-predari-cv.pdf",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/predorock",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/marco.predari/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/predorock",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Università degli studi di Milano",
      degree: "Bachelor's Degree in Computer Music Science",
      start: "2007",
      end: "2010",
    },
  ],
  work: [
    {
      company: "Greenovation",
      link: "https://greenovation.it",
      badges: ["Remote"],
      title: "Tech Lead",
      //logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:[
        "Developed a new set of web simulators to help customer to improve houses energy efficiency and increase money saving.",
      ]
    },
    {
      company: "Spindox Labs - Ublique",
      link: "https://ublique.ai",
      badges: ["Remote"],
      title: "Cloud & Integration Architect",
      //logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description:[
        "Designed the new infrastructure based on microservices, terraform and k8s on AWS.",
        "Worked alongside pre-sale and solution managers to support the customer acquisition.",
        "Created data integration patterns to bring the customer data quickly."
      ]
    },
    {
      company: "Spindox Labs - Ublique",
      link: "https://ublique.ai",
      badges: ["Remote"],
      title: "Tech Team Lead",
      //logo: ParabolLogo,
      start: "2023",
      end: "2022",
      description: [
        "Leading a group of four devs responsible to develop and maintain the core of ublique platform (Java microservices).",
        "Design a new pipeline and versioning system for software CI/CD.",
      ]
    },
    {
      company: "Spindox",
      link: "https://spindox.it",
      badges: ["Hybrid"],
      title: "Fullstack Developer",
      //logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: [
        "Led the team to the adoption of the Monorepo Pattern for Angular2 projects.",
        "Developed Cordova apps to manage Microsoft Dynamics CRM data."
      ]
    },
    {
      company: "IOOOTA / Jarvis",
      link: "https://www.hellojarvis.it/",
      badges: [],
      title: "Cordova Developer",
      //logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description: [
        "Smart home mobile app to perform energy analisys on business buildings.",
      ]
    },
    {
      company: "Horsa",
      link: "https://horsa.it/",
      badges: ["Remote"],
      title: "Cordova Developer → Fullstack Developer",
      //logo: JojoMobileLogo,
      start: "2016",
      end: "2020",
      description: [
        "Developed Mobile applications based on cordova and Ionic.",
        "Early adopter of the Google Firebase Platform and Cloud Run.",
        "Design a custom role engine (Java Drools) for employees satisfaction analisys.",
      ]
    },
    {
      company: "Digitag",
      link: "https://digitag.me",
      badges: [],
      title: "Fullstack Developer",
      //logo: NSNLogo,
      start: "2015",
      end: "2016",
      description: "E-Commerce Software Developer with wordpress and prestashop. Developed taylor made software solutions for the art auction market.",
    },
    {
      company: "Foowd",
      link: "",
      badges: ["freelance"],
      title: "Fullstack Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description: "Created a E-Commerce based on Elgg framework for gorceries social buying.",
    },
    {
      company: "BigThink",
      link: "",
      badges: ["intern"],
      title: "Angular Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description: [
        "Developed AngularJS applications for the Facebook app market.",
        "Design and conribute to the company framework to fast devliver fullstack applications (Laravel, AngularJS)."
      ]
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Java",
    "Gradle",
    "Kubernetes",
    "Terraform",
    "AWS"
  ],
  projects: [
    {
      title: "Ublique",
      techStack: [
        "Tech Lead",
        "Architect",
        "React",
        "Java",
        "Micronaut",
        "AWS",
        "Terraform",
        "Docker",
        "K8S"
      ],
      description:
        "Ublique is a decision support system composed of a suite of vertical solutions created to help managers in the design and management of complex systems and processes.",
      
//logo: ParabolLogo,
      link: {
        label: "ublique",
        href: "https://ublique.ai/",
      },
    },
  ],
  hobbies: [
    {
      name: "Scuba Diving",
      description:"I am an advanced certified diver."
    },
    {
      name: "Bartending",
      description:"I am certified bartender and Gin connoisseur."
    },
  ]
} as const;

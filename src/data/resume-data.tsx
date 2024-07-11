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
  name: "Marco Predari",
  initials: "MP",
  location: "Milano, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Milano",
  about:
    "Fullstack Architect focused to ship robust and good quality software.",
  summary:
    "TODO",
  avatarUrl: "https://avatars.githubusercontent.com/u/5390248?v=4",
  personalWebsiteUrl: "https://predorock.github.io",
  contact: {
    email: "predorock@gmail.com",
    tel: "++393336823157",
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
        "Developed a new set of simulators to improve the houses energy class",
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
        "Designed the new infrastructure fot the Ublique platform based on microservices, terraform and AWS.",
        "Worked alongside pre-sale and solution managers to support the customer acquisition.",
        "Created data integration patterns to link the customer data to Ublique platform"
      ]
    },
    {
      company: "Spindox Labs - Ublique",
      link: "https://ublique.ai",
      badges: ["Remote"],
      title: "Tech Team Lead",
      logo: ParabolLogo,
      start: "2023",
      end: "2022",
      description:
        "Leading a group of four dev responsible do develop and maintain the core of ublique platform (Java microservices)",
    },
    {
      company: "Spindox",
      link: "https://spindox.it",
      badges: ["Hybrid"],
      title: "Fullstack Developer",
      logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: [
        "Led the team to the adoption of the Monorepo Pattern for Angular2 projects.",
        "Developed Cordova apps to manage Microsoft Dynamics CRM data"
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
        "Smart home mobile app to perform energy analisys on business buildings",
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
        "Early adopter of the Google Firebase Platform and Cloud Run",
        "Design a custom role engine (Java Drools) for employees satisfaction analisys",
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
      description: "E-Commerce Software Developer with wordpress and prestashop. Taylor made software solutions for the Art Auction software market",
    },
    {
      company: "Foowd",
      //link: "https://digitag.me",
      badges: ["freelance"],
      title: "Fullstack Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description: "Created the E-Commerce based on elgg platform for social and food market",
    },
    {
      company: "BigThink",
      //link: "https://digitag.me",
      badges: ["intern"],
      title: "Angular Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description: "E-Commerce Software Developer with wordpress and prestashop. Taylor made software solutions for the Art Auction software market",
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
} as const;

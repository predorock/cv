/* eslint-disable react/no-unescaped-entities */
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Marco Predari",
  initials: "MP",
  location: "Milano, Italy, CET",
  locationLink: "https://www.google.com/maps/place/Milano",
  about: "Software Engineer focused on ship robust and good quality software.",
  summary: (
    <>
      Hello there, here's Marco, 10 years of experience as{" "}
      <b>Software Engineer</b> in the software industry. I headed my career path
      to <b>Software Architect</b> roles in start-ups and in consultancy. I
      think to be the missing piece for companies aiming to create great quality
      products without sacrificing productivity and delivery.
      <br />
      Based in Milan, but frequently around the Globe, I've great experience in
      Remote working even before pandemic. <br />
      Last, but not least, I'm an incredible bartender. Why is that relevant?
      Company events can be funnier than ever expected, isn't it?
    </>
  ),
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
      description: [
        "Developed a suite of web simulators that assist customers in enhancing energy efficiency in residential properties, leading to significant cost savings.",
      ],
    },
    {
      company: "Spindox Labs - Ublique",
      link: "https://ublique.ai",
      badges: ["Remote"],
      title: "Cloud & Integration Architect",
      //logo: ConsultlyLogo,
      start: "2023",
      end: null,
      description: (
        <>
          Leading technical architecture and infrastructure of the Ublique software platform.
          <ul className="list-inside list-disc">
            <li>
              Designed a new cloud infrastructure leveraging microservices
              architecture, Terraform, and Kubernetes on AWS.
            </li>
            <li>
              Designed a set of ansible playbook boilerplates to make the software setup easy and fast for our internal team.
            </li>
            <li>
              I collaborated with the Artificial Intelligence and Machine
              Learning team to build reliabile software and hardware
              infrastructures for our customers.
            </li>
            <li>
              Worked alongside pre-sale and solution managers to support the
              customer acquisition.
            </li>
            <li>
              Created data integration patterns to import the customer data
              quickly.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Spindox Labs - Ublique",
      link: "https://ublique.ai",
      badges: ["Remote"],
      title: "Tech Team Lead",
      //logo: ParabolLogo,
      start: "2023",
      end: "2022",
      description: (
        <>
          Leading a group of four devs responsible to develop and maintain the core of ublique platform (Java microservices)
          <ul className="list-inside list-disc">
            <li>Design a new pipeline and versioning system for CI/CD with jenkins.</li>
            <li>Develop a new set of Gradle plugins to standardize the developer experience and the working agreement implementation</li>
            <li>Created an integration system to communicate with third part Artificial Intelligence algorithms in order to include advanced and custom feature from AI inside the Ublique platform</li>
          </ul>
        </>
      )
    },
    {
      company: "Spindox",
      link: "https://spindox.it",
      badges: ["Hybrid"],
      title: "Fullstack Developer",
      //logo: ClevertechLogo,
      start: "2020",
      end: "2022",
      description: (
        <>
          Part of a Chapter team, I have worked on many project of the company
          <ul className="list-inside list-disc">
            <li>
              Used Angular Components to create a set of reusable components. The library has been widely used in all the 3 teams working for the customer.
            </li>
            <li>
              Led the team to the adoption of the Monorepo Pattern for Angular2 projects.
            </li>
            <li>
              Restored a old mobile application with deprecated code and framework to a Ionic based mobile app. I have also designed a new set of Azure pipelines to manage CI/CD of the mobile app.
            </li>
            <li>
              Developed Cordova apps to manage Microsoft Dynamics CRM data.
            </li>
          </ul>
        </>
      )
    },
    {
      company: "IOOOTA / Jarvis",
      link: "https://www.hellojarvis.it/",
      badges: [],
      title: "Cordova Developer",
      //logo: JojoMobileLogo,
      start: "2018",
      end: "2020",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Mobile Developer for smart home mobile app to perform energy analisys on business buildings.
          </li>
        </ul>
      )
    },
    {
      company: "Horsa",
      link: "https://horsa.it/",
      badges: ["Remote"],
      title: "Cordova Developer → Fullstack Developer",
      //logo: JojoMobileLogo,
      start: "2016",
      end: "2020",
      description: (
        <ul className="list-inside list-disc">
          <li>
            Developed Mobile applications based on cordova and Ionic.
          </li>
          <li>
            Early adopter of the Google Firebase Platform and Cloud Run.
          </li>
          <li>
            Design a custom role engine (Java Drools) for employees satisfaction analisys.
          </li>
        </ul>
      )
    },
    {
      company: "Digitag",
      link: "https://digitag.me",
      badges: [],
      title: "Fullstack Developer",
      //logo: NSNLogo,
      start: "2015",
      end: "2016",
      description:  
        <ul className="list-inside list-disc">
            <li>
              E-Commerce Software Developer with wordpress and prestashop.
            </li>
            <li>
              Developed taylor made software solutions for the art auction market.
            </li>
        </ul>
    },
    {
      company: "Foowd",
      link: "",
      badges: ["freelance"],
      title: "Fullstack Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description:  
        <ul className="list-inside list-disc">
            <li>
              Created a E-Commerce based on Elgg framework for gorceries social buying.
            </li>
        </ul>
    },
    {
      company: "BigThink",
      link: "",
      badges: ["intern"],
      title: "Angular Developer",
      //logo: NSNLogo,
      start: "2013",
      end: "2014",
      description:  
        <ul className="list-inside list-disc">
            <li>
              Developed AngularJS applications for the Facebook app market.
            </li>
            <li>
              Design and conribute to the company framework to fast devliver fullstack applications (Laravel, AngularJS).
            </li>
        </ul>
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Node.js",
    "Bun",
    "Java",
    "Gradle",
    "Kubernetes",
    "Terraform",
    "Ansible",
    "AWS",
    "ECS",
    "EKS",
    "AWS Lambda",
    "Docker",
    "Podman",
    "Git",
    "Bash",
    "Linux Administration"
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
        "K8S",
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
      description: "I am an advanced certified diver.",
    },
    {
      name: "Bartending",
      description: "I am certified bartender and Gin connoisseur.",
    },
  ],
  certifications: [
    {
      name: "AWS Cloud Practioner",
      image: "/aws-certified-cloud-practitioner.png",
      link: "https://www.credly.com/badges/a128b214-a998-436a-a73e-678448818913/public_url",
    }
  ]
} as const;

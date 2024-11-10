//hero

export const HeroIcons = [
  { icon: <RiGithubLine key={1} />, url: "https://github.com/Suryakantdsa" },
  // <LinkedInLogoIcon />,
  {
    icon: <Linkedin key={2} />,
    url: "https://www.linkedin.com/in/suryakant-das-7b657814b/",
  },
  { icon: <MailIcon key={3} />, url: "mailto:suryakantadasbabuni@gmail.com" },
  { icon: <SendIcon key={5} />, url: "https://t.me/devsuryakantdas" }, // Opens Telegram
  { icon: <RiWhatsappLine key={6} />, url: "https://wa.me/7504725674" },
  // <YoutubeLineIcon key={6} />,
];

{
  /* <Linkedin />; */
}

// about section
import GithubFillIcon from "remixicon-react/GithubFillIcon";
import Projector2LineIcon from "remixicon-react/Projector2LineIcon";
import GroupLineIcon from "remixicon-react/GroupLineIcon";
import OpenSourceLineIcon from "remixicon-react/OpenSourceLineIcon";
import DownloadLineIcon from "remixicon-react/DownloadLineIcon";
import ArrowLeftLineIcon from "remixicon-react/ArrowLeftLineIcon";
import Home5LineIcon from "remixicon-react/Home5LineIcon";
import UserLineIcon from "remixicon-react/UserLineIcon";
import HistoryLineIcon from "remixicon-react/HistoryLineIcon";
import BriefcaseLineIcon from "remixicon-react/BriefcaseLineIcon";
import UserStarLineIcon from "remixicon-react/UserStarLineIcon";
import {
  Award,
  Building2,
  Calendar,
  Code2,
  Contact2Icon,
  Facebook,
  Instagram,
  Lin,
  MailIcon,
  SendIcon,
} from "lucide-react";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Linkedin } from "lucide-react";
import { RiGithubLine, RiWhatsappLine } from "@remixicon/react";

// import ArrowLeftDoubleLineIcon from "remixicon-react/ArrowLeftDoubleLineIcon";

export const aboutData = [
  {
    title: "Github Repos",
    amount: 348,
    icon: <GithubFillIcon />,
  },

  {
    title: "Successful Projects",
    amount: 100,
    icon: <Projector2LineIcon />,
  },

  {
    title: "Satisfied clients",
    amount: 52,
    icon: <GroupLineIcon />,
  },

  {
    title: "Open source contribution",
    amount: 101,
    icon: <OpenSourceLineIcon />,
  },
];

export const downloadIcon = <DownloadLineIcon />;
export const arrowLeftLineIcon = <ArrowLeftLineIcon />;

export const aboutText = "hi im a ";

//Experience section

export const experienceData = [
  {
    year: 2018,
    title: "Engineering Foundation",
    education:
      "Bachelor's in Mechanical Engineering, CV Raman Global University, Bhubaneswar",
    experience: [
      "Comprehensive study in mechanical design principles and engineering fundamentals",
      "Developed strong analytical and problem-solving skills through practical projects",
      "Participated in university technical competitions and workshops",
      "Final year project focused on manufacturing process optimization",
    ],
    description:
      "Laid the groundwork for a career bridging mechanical engineering and technology, developing crucial analytical thinking and project management skills that would later prove valuable in software development.",
  },
  {
    year: 2019,
    title: "CNC Programming Specialist",
    company: "Central Tool Room & Training Centre (CTTC)",
    department: "R&D Department",
    experience: [
      "Mastered CNC programming for complex manufacturing processes",
      "Developed expertise in MasterCAM for generating efficient NC codes",
      "Led multiple R&D projects improving manufacturing efficiency",
      "Collaborated with cross-functional teams for prototype development",
      "Optimized machining parameters for better production outcomes",
    ],
    description:
      "Specialized in advanced manufacturing technologies, developing strong technical skills and programming fundamentals through hands-on experience with CNC machinery and automated systems.",
  },
  {
    year: 2023,
    title: "Transition to Full Stack Development",
    education: "Professional MERN Stack Development Training",
    experience: [
      "Mastered fundamental web development technologies (HTML, CSS, JavaScript)",
      "Built comprehensive understanding of the MERN stack ecosystem",
      "Developed multiple full-stack applications as part of coursework",
      "Focused on modern development practices and clean code principles",
      "Created portfolio projects demonstrating full-stack capabilities",
    ],
    description:
      "Made a strategic career transition into software development, leveraging engineering background to rapidly acquire full-stack development skills and modern web technologies.",
  },
  {
    year: 2024,
    title: "MERN Stack Developer",
    company: "Smartters Pvt Ltd",
    experience: [
      "Spearheaded backend API development for multiple client projects",
      "Implemented innovative multilanguage feature utilized across various projects",
      "Designed and developed EVA data model enabling dynamic data entry for MongoDB and SQL",
      "Collaborated with cross-functional teams to deliver robust solutions",
      "Optimized API performance and database queries for better scalability",
    ],
    achievements: [
      "Successfully implemented multilingual support system used across multiple projects",
      "Developed flexible EVA data model improving data management efficiency",
      "Reduced API response times by 40% through optimization",
      "Mentored junior developers in backend development practices",
    ],
    description:
      "Currently leading backend development initiatives at Smartters, focusing on creating scalable solutions and implementing innovative features that enhance project capabilities while maintaining high performance standards.",
  },
];
// skills section

export const skillsData = [
  {
    name: "NextJs",
    icon: "/skills/nextjs.png",
  },

  {
    name: "ReactJS",
    icon: "/skills/reacticon.png",
  },
  {
    name: "NodeJs",
    icon: "/skills/nodejs.png",
  },
  {
    name: "ExpressJs",
    icon: "/skills/expressjs.png",
  },
  {
    name: "HTML",
    icon: "/skills/html.png",
  },
  {
    name: "CSS",
    icon: "/skills/css.png",
  },
  {
    name: "JavaScript",
    icon: "/skills/javascript.png",
  },
  {
    name: "MongoDB",
    icon: "/skills/mongodb.png",
  },
  {
    name: "VScode",
    icon: "/skills/vscode.png",
  },
  {
    name: "MySQL",
    icon: "/skills/mysql.png",
  },
  {
    name: "GitHUB",
    icon: "/skills/github.png",
  },
  {
    name: "TypeScript",
    icon: "/skills/ts.png",
  },
  {
    name: "Figma",
    icon: "/skills/figma.png",
  },
  {
    name: "TailwindCSS",
    icon: "/skills/tailwindcss.png",
  },
  {
    name: "FeatherJs",
    icon: "/skills/featherjs.png",
  },
];

// NAVBAR SECTION

export const navbarData = [
  {
    id: "home",
    name: "Home",
    icon: <Home5LineIcon />,
  },
  {
    id: "about",
    name: "About",
    icon: <UserLineIcon />,
  },
  {
    id: "experience",
    name: "MyRoad",
    icon: <HistoryLineIcon />,
  },
  {
    id: "skills",
    name: "Skills",
    icon: <BriefcaseLineIcon />,
  },
  {
    id: "project",
    name: "Project",
    icon: <UserStarLineIcon />,
  },
  {
    id: "contact",
    name: "Contact",
    icon: <Contact2Icon />,
  },
];

//project section

export const projectsButton = [
  "All",
  "NextJs",
  "ReactJS",
  "NodeJs",
  "ExpressJs",
  "HTML",
  "CSS",
  "JavaScript",
  "MongoDb",
  "MySQL",
  "FeatherJs",
  "TailwindCSS",
  "TypeScript",
  "Figma",
];

export const projectsData = [
  {
    name: "Duramix.com ERP System",
    desc: "A comprehensive ERP solution designed for Duramix.com to manage business operations, inventory, billing, and customer relationships efficiently.",
    images: [
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731004212891_duramixcrm1.png",
      " https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731004293412_duramix%20hrms.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731005327772_duramix%20crm.png",
    ], // ERP-themed image
    url: "https://duramix.com",
    tech: [
      "FeatherJs",
      "ReactJS",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "HTML",
      "CSS",
      "JavaScript",
    ],
  },
  {
    name: "Smartters ERP System",
    desc: "An enterprise resource planning system developed for Smartters to streamline internal operations, including resource allocation, financial management, and data analytics.",
    images: [
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731005922032_Smasrtter%20erp3.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006036413_Smasrtter%20erp4.png",
    ], // ERP-themed image
    url: "https://smartters.com",
    tech: ["FeatherJs", "ReactJS", "NodeJs", "MongoDb", "TailwindCSS", "Figma"],
  },
  {
    name: "Smartters HRMS Module",
    desc: "A human resource management module for smartter.pvt.ltd, offering tools for employee data management, payroll processing, and attendance tracking.",
    images: [
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731004478291_Smasrtter%20erp2.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731005531502_smartter%20hrms.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731005672248_smartter%20hrms1.png",
    ], // ERP-themed image
    url: "https://smartters.com",
    tech: ["FeatherJs", "ReactJS", "NodeJs", "MongoDb", "TailwindCSS", "Figma"],
  },

  {
    name: "Marketplace Platform",
    desc: "An online marketplace allowing vendors to list products and customers to shop, with features like search filters, payment integration, and order tracking.",
    images: [
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006725384_marketplace1.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006765822_marketplace3.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006786885_marketplace2.png",
    ], // E-commerce/marketplace-themed image
    url: "https://github.com/yourusername/marketplace",
    tech: [
      "FeatherJs",
      "ReactJS",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "JavaScript",
    ],
  },

  {
    name: "Sabkuch.uk",
    desc: "A web app for providing home services like cleaning, plumbing, and AC repair. Users can book services, and providers can manage appointments and customer inquiries.",
    images: [
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731004362018_Sabukuch.uk.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006341302_Sabukuch.uk2.png",
      "https://duramix-erp-dev.s3.ap-south-1.amazonaws.com/12/images/2024/1107/1731006324677_Sabukuch.uk1.png",
    ], // Home services-themed image
    url: "https://github.com/yourusername/home-services",
    tech: [
      "NextJs",
      "ReactJS",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "TailwindCSS",
      "Figma",
    ],
  },
];

export const stats = [
  {
    title: "Company",
    value: "Smartter Pvt Ltd",
    subtext: "Technology Solutions",
    icon: <Building2 size={24} />,
  },
  {
    title: "Position",
    value: "MERN Stack",
    subtext: "Developer",
    icon: <Code2 size={24} />,
  },
  {
    title: "Experience",
    value: "01",
    subtext: "Years",
    icon: <Calendar size={24} />,
  },
  {
    title: "Tech Stack",
    value: "Full Stack",
    subtext: "Development",
    icon: <Award size={24} />,
  },
];

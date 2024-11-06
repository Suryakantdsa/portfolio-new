//hero
import GithubLineIcon from "remixicon-react/GithubLineIcon";
import InstagramLineIcon from "remixicon-react/InstagramLineIcon";
import YoutubeLineIcon from "remixicon-react/YoutubeLineIcon";
import FacebookLineIcon from "remixicon-react/FacebookLineIcon"; // as a placeholder
import LinkedInBoxLineIcon from "remixicon-react/LinkedInBoxLineIcon"; // as a placeholder
import MailLineIcon from "remixicon-react/MailLineIcon"; // as a placeholder

export const HeroIcons = [
  <GithubLineIcon key={1} />,
  <LinkedInBoxLineIcon key={2} />,
  <MailLineIcon key={3} />,
  <InstagramLineIcon key={4} />,
  <FacebookLineIcon key={5} />,
  <YoutubeLineIcon key={6} />,
];

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
import { Contact2Icon } from "lucide-react";

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
    year: 2015,

    title: "Foundation and Basics",

    education:
      "High School Diploma: Focus on computer science, mathematics, and art/design courses.",

    experience: [
      "Basic HTML/CSS: Learn through online tutorials and courses.",
      "Personal Projects: Create simple personal websites or blogs.",
    ],
  },
  {
    year: 2018,

    title: "Foundation and Basics",

    education:
      "High School Diploma: Focus on computer science, mathematics, and art/design courses.",

    experience: [
      "Basic HTML/CSS: Learn through online tutorials and courses.",
      "Personal Projects: Create simple personal websites or blogs.",
    ],
  },
  {
    year: 2019,

    title: "Foundation and Basics",

    education:
      "High School Diploma: Focus on computer science, mathematics, and art/design courses.",

    experience: [
      "Basic HTML/CSS: Learn through online tutorials and courses.",
      "Personal Projects: Create simple personal websites or blogs.",
    ],
  },
  {
    year: 2022,

    title: "Advanced Learning and Early Experience",

    education:
      "'Associate's Degree in Web Development or Design: Enroll in a 2-year program covering web development and design principles.'",
    experience: [
      "Freelance Work: Take on small freelance projects to build a portfolio.",

      "Online Courses and Certifications: Learn JavaScript, responsive design, and UX/UI design.",
    ],
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
    icon: "/skills/react.png",
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
    imageurl: "https://images.unsplash.com/photo-1564866657315-1003f40d1b2a", // ERP-themed image
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
    imageurl: "https://images.unsplash.com/photo-1581091012184-5c9bdce656e5", // ERP-themed image
    url: "https://smartters.com",
    tech: ["FeatherJs", "ReactJS", "NodeJs", "MongoDb", "TailwindCSS", "Figma"],
  },
  {
    name: "Duramix.com HRMS Module",
    desc: "A human resource management module for Duramix.com, offering tools for employee data management, payroll processing, and attendance tracking.",
    imageurl: "https://images.unsplash.com/photo-1584634731339-634f84de1221", // HR management-themed image
    url: "https://duramix.com/hrms",
    tech: ["FeatherJs", "ReactJS", "NodeJs", "MongoDb", "TailwindCSS"],
  },
  {
    name: "Marketplace Platform",
    desc: "An online marketplace allowing vendors to list products and customers to shop, with features like search filters, payment integration, and order tracking.",
    imageurl: "https://images.unsplash.com/photo-1519389950473-47ba0277781c", // E-commerce/marketplace-themed image
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
    name: "Devpool",
    desc: "An open-source dynamic job portal connecting job seekers with employers. It features job posting, application tracking, and real-time notifications.",
    imageurl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df", // Job portal-themed image
    url: "https://github.com/yourusername/devpool",
    tech: [
      "NextJs",
      "ReactJS",
      "NodeJs",
      "ExpressJs",
      "MongoDb",
      "TailwindCSS",
      "TypeScript",
    ],
  },
  {
    name: "Restaurant POS System",
    desc: "A web and mobile POS system for restaurant owners to manage orders, billing, and payments seamlessly. Includes features like menu customization, order tracking, and integrated payment solutions.",
    imageurl: "https://images.unsplash.com/photo-1559028012-d6367a97295b", // Restaurant-themed image
    url: "https://github.com/yourusername/restaurant-pos",
    tech: [
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
    name: "Home Services Platform",
    desc: "A web app for providing home services like cleaning, plumbing, and AC repair. Users can book services, and providers can manage appointments and customer inquiries.",
    imageurl: "https://images.unsplash.com/photo-1581579185308-78dc6ce0f8df", // Home services-themed image
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

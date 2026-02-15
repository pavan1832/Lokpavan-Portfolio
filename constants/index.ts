import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { MdEmail, MdPhone } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";



export const SKILL_DATA = [
  {
    skill_name: "C",
    image: "C.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Python",
    image: "python.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java",
    image: "java.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/lokpavan-p-931a60292/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/pavan1832",
  },
  {
    name: "LeetCode",
    icon: SiLeetcode,
    link: "https://leetcode.com/u/lokpavan183/",
  },
  {
    name: "Email me",
    icon: MdEmail,
    link: "https://mail.google.com/mail/?view=cm&fs=1&to=lokpavan54@gmail.com",
  },
  {
    name: "Call me",
    icon: MdPhone,
    link: "tel:+919035601510", // use country code
  },
] as const;



export const FRONTEND_SKILL = [
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },

  
 
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "PHP",
    image: "php.png",
    width: 80,
    height: 80,
  },

  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
 

  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
 
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Kubernetes",
    image: "Kubernetes.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Jenkins",
    image: "jenkins.png",
    width: 70,
    height: 70,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "GCP",
    image: "gcp.png",
    width: 150,
    height: 150,
  },
] as const;

export const PROJECTS = [
  {
    title: "AgroPredict - Crop Recommendation System",
    description:
    'AgroPredict is an AI/ML-powered crop recommendation system that uses Python and Flask to analyze agricultural data and deliver intelligent insights through a responsive web interface. By combining machine learning with practical farming inputs, it helps farmers make informed decisions on crop selection, fertilizer usage, and disease detection.',
    image: "/projects/project-1.png",
    link: "https://agropredict-baxe.onrender.com/",
  },
  {
    title: "Multiple Disease Prediction System",
    description:
      'Multiple Disease Prediction System is a cloud-hosted machine learning web application built with Python and Flask to predict diseases such as Heart Disease, Diabetes, and Parkinson’s. Designed for real-time predictions, the system emphasizes scalability, accuracy, and accessibility to support data-driven decision-making in healthcare..',
    image: "/projects/project-2.png",
    link: "https://multiple-disease-prediction-system-uad72qucwr72xdymgdigdt.streamlit.app/",
  },
  {
    title: "AI Driven Flight Plan Analysis & Automation System",
    description:
      'An AI-driven automation prototype that transforms flight plan CSV data into actionable insights, streamlining aviation planning workflows and significantly reducing manual analysis. Built with modern web technologies and LLM-powered intelligence to support faster, more accurate operational decisions.',
    image: "/projects/project-3.png",
    link: "https://flight-plan-ai--lokpavanp.replit.app/",
  },


] as const;

export const FOOTER_DATA = [
  {
    title: "Profiles",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/lokpavan-p-931a60292/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/pavan1832",
      },
      {
        name: "LeetCode",
        icon: SiLeetcode,
        link: "https://leetcode.com/u/lokpavan183/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Projects",
        icon: null,
        link: "#projects",
      },
      {
        name: "Skills",
        icon: null,
        link: "#skills",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=lokpavan54%40gmail.com",
      },
    ],
  },
] as const;


export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/pavan1832/Lokpavan-Portfolio",
} as const;


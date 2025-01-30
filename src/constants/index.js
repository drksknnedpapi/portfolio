
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
 // figma,
  upwork,
  go2cod,
  vercel,
  shadcn,
  github,
  artgalleria,
  codeimpulse,
  phillys,
  philipa,
  adee,
  porsche,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Designer",
    icon: backend,
  },
  {
    title: "Aspiring DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Vercel",
    icon: vercel
  },
  {
    name: "Shadcn Ui",
    icon: shadcn
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Github",
    icon: github
  }
];

const experiences = [
  {
    title: "Front-End Web Developer Intern",
    company_name: "Go2Cod",
    icon: go2cod,
    iconBg: "#383E56",
    date: "Nov 2024 - Dec 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front-End Web Developer",
    company_name: "Freelancer",
    icon: upwork,
    iconBg: "#383E56",
    date: "Dec 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kobby proved me wrong.",
    name: "Philipa",
    designation: "Head Hunter, Entrepreneur",
    company: "Philly's",
    image: philipa,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kobby does.",
    name: "Kelvin Winston",
    designation: "Head Hunter, Entrepreneur",
    company: "Philly's",
    image: adee,
  },
  {
    testimonial:
      "After Kobby optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
];

const projects = [
  {
    name: "Philly's",
    description:
      "Your trusted skincare distributor, bringing quality and affordable products right to your door step. If you wanna choose, choose Philly's.",
    tags: [

      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "CSS3",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: phillys,
    source_code_link: "https://github.com/drksknnedpapi/phillys",
    page_url: "https://phillys-nine.vercel.app"
  },
  {
    name: "The Art Galleria",
    description:
      "The Art Galleria is your one stop for re-living the reneissance era. Featuring famous paintings from various artists, This is your one stop Meseum.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Node Js",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: artgalleria,
    source_code_link: "https://github.com/drksknnedpapi/G02COD_WD_04",
    page_url : "https://the-art-galleria.vercel.app"
  },
  {
    name: "CodeImpulse.",
    description:
      "A Tech Start Up with focus on building responsive, unique and beautiful frontend interfaces for individuals and companies alike.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Magic Ui",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: codeimpulse,
    source_code_link: "https://github.com/drksknnedpapi/codeimpulse",
    page_url : "/"
  },
  {
    name: "Porsche ",
    description:
      "A 3D version of the original Porsche website forund @  porsche.com/.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "Three JS",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: porsche,
    source_code_link: "https://github.com/drksknnedpapi/codeimpulse",
    page_url : "/"
  },
];

export { services, technologies, experiences, testimonials, projects };
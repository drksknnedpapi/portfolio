
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
  oasis,
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
    name: "Phillipa",
    designation: "CFO",
    company: "Philly's",
    image: "../assets/phillipa.jpeg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kobby does.",
    name: "Kelvin Winston",
    designation: "CFO",
    company: "Philly's",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Kobby optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Oasis Skincare",
    description:
      "Online Shop that allows skincare enthusiasts to discover affordable skincare products, and make pocket-friendly purchases to boost the quality of their skin.",
    tags: [

      {
        name: "HTML5",
        color: "green-text-gradient",
      },
      {
        name: "CSS3",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: oasis,
    source_code_link: "https://github.com/",
  },
  {
    name: "The Art Galleria",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: artgalleria,
    source_code_link: "https://github.com/",
  },
  {
    name: "CodeImpulse.",
    description:
      "A Tech Start Up with focus on building responsive, unique and beautiful frontend interfaces for individuals and companies alike.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: codeimpulse,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
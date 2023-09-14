import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    rave,
    wraith,
    saturn,
    java,
    python,
    csharp,
    cpp,
    epicgames,
    riotgames
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
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "Reverse Engineer",
      icon: mobile,
    },
    {
      title: "Hacker",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "C Sharp",
      icon: csharp,
    },
    {
      name: "C Plus Plus",
      icon: cpp,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Java",
      icon: java,
    },
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
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Hacker",
      company_name: "Epic Games",
      icon: epicgames,
      iconBg: "#e1e1e1",
      date: "January 2021 - Present",
      points: [
        "Developing and maintaining solutions regarding asset serialization and packaging.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing new concepts related to efficiency and security with file reading.",
        "Participating in code reviews and providing constructive feedback to other developers.",
        "Participating in vulnerability restesting.",
      ],
    },
    {
      title: "Hacker",
      company_name: "Riot Games",
      icon: riotgames,
      iconBg: "#e1e1e1",
      date: "March 2022 - Present",
      points: [
        "Found and explored vulnerabilities regarding MitM (Man-in-the-Middle) attacks.",
        "Collaborating developers to create solutions to tackle issues regarding these attacks.",
        "Participating in vulnerability restesting.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Rave",
      description:
        "Fully functioning 1:1 reverse engineered Fortnite custom game server which allows users to experience an old version of Fortnite with a custom twist.",
      tags: [
        {
          name: "CPlusPlus",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "ReverseEngineer",
          color: "pink-text-gradient",
        },
      ],
      image: rave,
      source_code_link: "https://github.com/Tamely/Rave",
    },
    {
      name: "Wraith",
      description:
        "A work in progress 2D/3D game engine with multiplayer/networking support, a custom scripting language, and the ability to create open worlds with native support for Non-Euclidean physics if the creator desires.",
      tags: [
        {
          name: "CPlusPlus",
          color: "blue-text-gradient",
        },
        {
          name: "3D",
          color: "green-text-gradient",
        },
        {
          name: "Scripting",
          color: "pink-text-gradient",
        },
      ],
      image: wraith,
      source_code_link: "https://github.com/Tamely/WraithEngine",
    },
    {
      name: "Saturn",
      description:
        "A comprehensive Unreal Engine modding platform that allows users to import custom content, download/use premade content with an included marketplace, and a custom programming language to simplify the modding experience.",
      tags: [
        {
          name: "CSharp",
          color: "blue-text-gradient",
        },
        {
          name: "MongoDB",
          color: "green-text-gradient",
        },
        {
          name: "BlazorHybrid",
          color: "pink-text-gradient",
        },
      ],
      image: saturn,
      source_code_link: "https://github.com/Tamely/SaturnSwapper",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  
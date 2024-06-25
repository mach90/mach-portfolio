/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Project from "./Project";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
    {
      title: "Travel Form Generator",
      status: "In development",
      description: "Web app to generate a Travel Form PDF via a form.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src: "travelformgenerator1a.jpg",
      src2: "travelformgenerator1b.jpg",
      link: "https://travelformgenerator.netlify.app/",
      github: "https://github.com/mach90/TFgen",
    },
    {
      title: "Bento Enviro",
      status: "In development",
      description: "Weather, forecast, and more. Bento UI.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src: "bentoenviro1a.jpg",
      src2: "bentoenviro1b.jpg",
      link: "https://bento-enviro.netlify.app/",
      github: "https://github.com/mach90/bento-enviro",

    },
    {
      title: "Porfolio",
      status: "In development",
      description: "Personal portfolio.",
      tech: "React, Tailwind, Spline, GSAP",
      src: "blank1a.jpg",
      src2: "blank1b.jpg",
      link: "https://mach-portfolio.netlify.app/",
      github: "https://github.com/mach90/portfolio",
      },
    {
      title: "Marketplace",
      status: "Planning",
      description: "Marketplace",
      tech: "React",
      src: "blank1a.jpg",
      src2: "blank1b.jpg",
      link: "",
      github: "",
    },
    {
      title: "Brochure",
      status: "Planning",
      description: "Brochure",
      tech: "React",
      src: "blank1a.jpg",
      src2: "blank1b.jpg",
      link: "",
      github: "",
    },
    {
      title: "Secret Project",
      status: "Concept",
      description: "Secret project.",
      tech: "React",
      src: "blank1a.jpg",
      src2: "blank1b.jpg",
      link: "",
      github: "",
    },
  ]

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */


/* ////////////////////////////////////////////////////////////////////////////////////////////////////
CAROUSEL COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Projects() {
    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div id='projects'>
            {
                projects.map((project, index) => {
                    return <Project key={index} {...project} />
                })
            }
        </div>
    );
}

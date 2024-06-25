/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Project from "./Project";

import TravelFormGeneratorImg from "../img/travelformgenerator1a.jpg";
import BentoEnviroImg from "../img/bentoenviro1a.jpg";
import BlankImg from "../img/blank1a.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
    {
      title: "Travel Form Generator",
      status: "In development",
      description: "Web app to generate a Travel Form PDF via a form.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src: TravelFormGeneratorImg,
      link: "https://travelformgenerator.netlify.app/",
      github: "https://github.com/mach90/TFgen",
    },
    {
      title: "Bento Enviro",
      status: "In development",
      description: "Weather, forecast, and more. Bento UI.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src: BentoEnviroImg,
      link: "https://bento-enviro.netlify.app/",
      github: "https://github.com/mach90/bento-enviro",

    },
    {
      title: "Porfolio",
      status: "In development",
      description: "Personal portfolio.",
      tech: "React, Tailwind, Spline, GSAP",
      src: BlankImg,
      link: "https://mach-portfolio.netlify.app/",
      github: "https://github.com/mach90/portfolio",
      },
    {
      title: "Marketplace",
      status: "Planning",
      description: "Marketplace",
      tech: "React",
      src: BlankImg,
      link: "",
      github: "",
    },
    {
      title: "Brochure",
      status: "Planning",
      description: "Brochure",
      tech: "React",
      src: BlankImg,
      link: "",
      github: "",
    },
    {
      title: "Secret Project",
      status: "Concept",
      description: "Secret project.",
      tech: "React",
      src: BlankImg,
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

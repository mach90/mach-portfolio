/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Project from "./Project";

import TravelFormGeneratorImg1 from "../img/travelformgenerator1a.jpg";
import TravelFormGeneratorImg2 from "../img/travelformgenerator1b.jpg";
import BentoEnviroImg1 from "../img/bentoenviro1a.jpg";
import BentoEnviroImg2 from "../img/bentoenviro1b.jpg";
import BlankImg1 from "../img/blank1a.jpg";
import BlankImg2 from "../img/blank1b.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
    {
      title: "Travel Form Generator",
      status: "In development",
      description: "This app uses React-PDF to generate a Travel Form.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src1: TravelFormGeneratorImg1,
      src2: TravelFormGeneratorImg2,
      link: "https://travelformgenerator.netlify.app/",
      github: "https://github.com/mach90/TFgen",
    },
    {
      title: "Bento Enviro",
      status: "In development",
      description: "Weather, forecast, and more. Bento UI.",
      tech: "React, Tailwind, React-pdf, typed.js",
      src1: BentoEnviroImg1,
      src2: BentoEnviroImg2,
      link: "https://bento-enviro.netlify.app/",
      github: "https://github.com/mach90/bento-enviro",

    },
    {
      title: "Porfolio",
      status: "In development",
      description: "Personal portfolio.",
      tech: "React, Tailwind, Spline, GSAP",
      src1: BlankImg1,
      src2: BlankImg2,
      link: "https://mach-portfolio.netlify.app/",
      github: "https://github.com/mach90/portfolio",
      },
    {
      title: "Marketplace",
      status: "Planning",
      description: "Marketplace",
      tech: "React",
      src1: BlankImg1,
      src2: BlankImg2,
      link: "",
      github: "",
    },
    {
      title: "Brochure",
      status: "Planning",
      description: "Brochure",
      tech: "React",
      src1: BlankImg1,
      src2: BlankImg2,
      link: "",
      github: "",
    },
    {
      title: "Secret Project",
      status: "Concept",
      description: "Secret project.",
      tech: "React",
      src1: BlankImg1,
      src2: BlankImg2,
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
        <div id='projects' className="flex flex-col gap-40 mt-72">
            {
                projects.map((project, index) => {
                    return <Project key={index} {...project} />
                })
            }
        </div>
    );
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Project from "./Project";

import TravelFormGeneratorImg1 from "../img/projects/travelformgenerator1a.jpg";
import TravelFormGeneratorImg2 from "../img/projects/travelformgenerator1b.jpg";
import BentoEnviroImg1 from "../img/projects/bentoenviro1a.jpg";
import BentoEnviroImg2 from "../img/projects/bentoenviro1b.jpg";
import BlankImg1 from "../img/projects/blank1a.jpg";
import BlankImg2 from "../img/projects/blank1b.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
    {
      title: "Travel Form Generator",
      status: "In development",
      bar: 30,
      description: "This app uses React-PDF to generate a Travel Form.",
      techs: ["React", "Tailwind", "React-pdf"],
      src1: TravelFormGeneratorImg1,
      src2: TravelFormGeneratorImg2,
      link: "https://travelformgenerator.netlify.app/",
      github: "https://github.com/mach90/TFgen",
    },
    {
      title: "Bento Enviro",
      status: "In development",
      bar: 30,
      description: "Weather, forecast, and more. Bento UI.",
      techs: ["React", "Tailwind"],
      src1: BentoEnviroImg1,
      src2: BentoEnviroImg2,
      link: "https://bento-enviro.netlify.app/",
      github: "https://github.com/mach90/bento-enviro",

    },
    {
      title: "Porfolio",
      status: "In development",
      bar: 30,
      description: "Personal portfolio.",
      techs: ["React", "Tailwind", "Spline", "GSAP"],
      src1: BlankImg1,
      src2: BlankImg2,
      link: "https://mach-portfolio.netlify.app/",
      github: "https://github.com/mach90/portfolio",
      },
    {
      title: "Marketplace",
      status: "Planning",
      bar: 0,
      description: "Marketplace",
      techs: ["React"],
      src1: BlankImg1,
      src2: BlankImg2,
      link: "",
      github: "",
    },
    {
      title: "Brochure",
      status: "Planning",
      bar: 0,
      description: "Brochure",
      techs: ["React"],
      src1: BlankImg1,
      src2: BlankImg2,
      link: "",
      github: "",
    },
    {
      title: "Secret Project",
      status: "Concept",
      bar: 0,
      description: "Secret project.",
      techs: ["React"],
      src1: BlankImg1,
      src2: BlankImg2,
      link: "",
      github: "",
    },
]

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectsContainerStyle = "flex flex-row gap-40 bg-green-600 overflow-x-hidden w-max px-8 md:px-12 ml-40 gap-4 mt-40";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
CAROUSEL COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Projects() {
  
  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
      <div id='projectsContainer' className={projectsContainerStyle}>
          {
              projects.map((project, index) => {
                  return <Project key={index} {...project} />
              })
          }
      </div>
  );
}

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useRef } from 'react';
import Project from "./Project";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

import TravelFormGeneratorImg1 from "../img/projects/travelformgenerator1a.jpg";
import TravelFormGeneratorImg2 from "../img/projects/travelformgenerator1b.jpg";
import BentoEnviroImg1 from "../img/projects/bentoenviro1a.jpg";
import BentoEnviroImg2 from "../img/projects/bentoenviro1b.jpg";
import PortfolioImg1 from "../img/projects/portfolio1a.jpg";
import PortfolioImg2 from "../img/projects/portfolio1b.jpg";
import JsImg1 from "../img/projects/js1a.jpg";
import JsImg2 from "../img/projects/js1b.jpg";
import BlankImg1 from "../img/projects/blank1a.jpg";
import BlankImg2 from "../img/projects/blank1b.jpg";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS DATA
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projects = [
  {
    title: "Travel Form Generator",
    status: "In development",
    bar: 30,
    description: "Create a Travel Form .pdf via a user friendly web form and React PDF.",
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
    description: "Essential weather info and more about your area in a Bento UI layout.",
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
    description: "This animated and responsive portfolio.",
    techs: ["React", "Tailwind", "Spline", "GSAP", "Lenis", "Blender"],
    src1: PortfolioImg1,
    src2: PortfolioImg2,
    link: "https://mach-portfolio.netlify.app/",
    github: "https://github.com/mach90/portfolio",
  },
  {
    title: "JavaScript experiments",
    status: "Finished",
    bar: 100,
    description: "Exploring JavaScript programming and algorithms by coding games, converters, and more through Udemy courses and Codewars exercises.",
    techs: ["JavaScript"],
    src1: JsImg1,
    src2: JsImg2,
    link: "",
    github: "",
  },
  {
    title: "Secret Project",
    status: "Concept",
    bar: 5,
    description: "Project I've been wanting to work on for a while.",
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
const projectsListContainerStyle = "flex flex-row gap-96 overflow-x-hidden w-max px-8 md:px-12 ml-40 mt-40";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECTS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Projects() {
  /* //////////////////////////////////////////////////
  HORIZONTAL SCROLL
  ////////////////////////////////////////////////// */
  const projectsListRef = useRef(null);

  function getScrollAmount() {
    if (projectsListRef.current) {
      const projectsListWidth = projectsListRef.current.scrollWidth;
      return -(projectsListWidth - window.innerWidth + 300);
    }
    return 0;
  }

  useGSAP(() => {
    gsap.to(projectsListRef.current, {
      x: getScrollAmount,
      duration: 3,
      scrollTrigger: {
        trigger: projectsListRef.current,
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        markers: false,
      }
    });
  }, []);

  /* //////////////////////////////////////////////////
  JSX
  ////////////////////////////////////////////////// */
  return (
    <>
      <div className="h-40"></div>
      <div id='projectsContainer'>
        <div ref={projectsListRef} id="projectsList" className={projectsListContainerStyle}>
          {
            projects.map((project, index) => {
              return <Project key={index} {...project} />
            })
          }
        </div>
      </div>
      <div className="h-96"></div>
    </>
  );
}
// import { useState } from "react";
import { Cpu, Link, Code } from "lucide-react";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const projectContainerStyle = "flex flex-col lg:flex-row gap-4 justify-center text-customColorSection3Text1";

const projectInfosStyle = "flex flex-col gap-2 w-60";
const projectInfosTitleStyle = "text-3xl font-bold";

const projectInfosProgressContainerStyle = "flex flex-row items-center gap-2 mb-2";
const projectInfosProgressStatusStyle = " py-1 px-2 rounded-lg font-medium";
const projectInfosProgressPercentageStyle = "font-bold";

const projectInfosDescriptionStyle = "text-xl font-semibold mb-6 xl:mb-12";

const projectInfosTechsStyle = "flex flex-row sm:flex-col gap-2 mb-6 md:mb-12";
const projectInfosTechStyle = "flex flex-row gap-1 font-medium";

const projectInfosLinksStyle = "flex flex-row gap-2 p-2";

const projectScreenshotBigContainerStyle = "object-cover object-top border-4 border-customColorSection3a";
const projectScreenshotSmallContainerStyle = "object-cover object-top border-4 border-customColorSection3a hidden lg:block";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PROJECT COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Project({title, description, status, bar, techs, src1, src2, link, github}) {
    // const [isHover, setIsHover] = useState(false);

    const projectScreenshotImage = "w-full h-full cursor-cursor";
    // const projectScreenshotImage = `w-full h-full cursor-cursor ${isHover ? "brightness-50" : ""}`;

    // function handleMouseEnter(){
    //     setIsHover(true);
    // }

    // function handleMouseLeave(){
    //     setIsHover(false);
    // }

    return (
        <div className={projectContainerStyle}>
            
            <div className={projectInfosStyle}>
                <h1 className={projectInfosTitleStyle}>{title}</h1>
                
                <div className={projectInfosProgressContainerStyle}>
                    <p className={projectInfosProgressStatusStyle}>{status}</p>
                    <p className={projectInfosProgressPercentageStyle}>{bar}%</p>
                </div>

                <p className={projectInfosDescriptionStyle}>{description}</p>

                <div className={projectInfosTechsStyle}>
                    {techs.map((tech) => {
                        return <div key={tech} className={projectInfosTechStyle}><Cpu /> {tech}</div>
                    })}
                </div>

                <a className={projectInfosLinksStyle} href={link} target="_blank"><Link /> See live version</a>
                <a className={projectInfosLinksStyle} href={github} target="_blank"><Code /> See source code</a>
            </div>

            {/* <div className="object-cover object-top"> */}
            <div className={projectScreenshotBigContainerStyle}>
            {/* <div className={projectScreenshotBigContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
                {/* <a href={link} target="_blank"><img src={src} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></a> */}
                <img src={src1} alt={title} className={projectScreenshotImage}/>
                {/* <a href={link} target="_blank"><img src={src1} alt={title} className={projectScreenshotImage}/></a> */}
            </div>

            <div className={projectScreenshotSmallContainerStyle}>
            {/* <div className={projectScreenshotSmallContainerStyle} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> */}
                {/* <a href={link} target="_blank"><img src={src} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></a> */}
                <img src={src2} alt={title} className={projectScreenshotImage}/>
                {/* <a href={link} target="_blank"><img src={src2} alt={title} className={projectScreenshotImage}/></a> */}
            </div>

        </div>
    );
}

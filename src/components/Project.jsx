import { useState } from "react";
import { Cpu, Link, Code } from "lucide-react";

export default function Project({title, description, status, bar, techs, src1, src2, link, github}) {
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true);
    }

    function handleMouseLeave(){
        setIsHover(false);
    }

    return (
        <div className="flex flex-row gap-4 justify-center w-full">
            
            <div className="flex flex-col gap-2 w-[300px]">
                <h1 className="text-3xl font-bold">{title}</h1>
                <div className="flex flex-row items-center gap-2 mb-2">
                    <p className="bg-customColorSection3Text2 text-customColorSection3a w-max py-1 px-2 rounded-lg font-medium">{status}</p>
                    <p className="font-bold text-customColorSection3Text2">{bar}%</p>
                </div>
                <p className="text-xl font-semibold mb-12">{description}</p>
                {techs.map((tech) => {
                    return <div key={tech} className="flex flex-row gap-2 font-medium"><Cpu /> {tech}</div>
                })}
                <a className="flex flex-row gap-2 p-2 w-max bg-customColorSection3Text1 text-customColorSection3Text2 mt-12" href={link} target="_blank"><Link /> See live version</a>
                <a className="flex flex-row gap-2 p-2 w-max bg-customColorSection3Text1 text-customColorSection3Text2" href={github} target="_blank"><Code /> See source code</a>
            </div>

            {/* <div className="h-full object-cover object-top"> */}
            <div className="h-full object-cover object-top border-4 border-customColorSection3Text1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* <a href={link} target="_blank"><img src={src} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></a> */}
                <a href={link} target="_blank"><img src={src1} alt={title} className={`cursor-cursor ${isHover ? "brightness-50" : ""}`}/></a>
            </div>

            <div className="h-full object-cover object-top border-4 border-customColorSection3Text1" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                {/* <a href={link} target="_blank"><img src={src} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></a> */}
                <a href={link} target="_blank"><img src={src2} alt={title} className={`cursor-cursor ${isHover ? "brightness-50" : ""}`}/></a>
            </div>

        </div>
    );
}

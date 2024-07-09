import { useState } from "react";
import { Cpu, Link, Code } from "lucide-react";

export default function Project({title, description, status, tech, src1, src2, link, github}) {
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true);
    }

    function handleMouseLeave(){
        setIsHover(false);
    }

    return (
        <div className="flex flex-row gap-4">
            
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl font-bold">{title}</h1>
                <p className="bg-customColorSection3Text2 w-max py-1 px-2 rounded-lg">{status}</p>
                <p className="">{description}</p>
                <p className="flex flex-row gap-2"><Cpu /> {tech}</p>
                <a className="flex flex-row gap-2 p-1 w-max bg-customColorSection3Text1 text-customColorSection3Text2" href={link} target="_blank"><Link /> See live version</a>
                <a className="flex flex-row gap-2 p-1 w-max bg-customColorSection3Text1 text-customColorSection3Text2" href={github} target="_blank"><Code /> See code</a>
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

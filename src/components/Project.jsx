import { useState } from "react";
import { Cpu, Link, Code } from "lucide-react";

export default function Project({title, description, status, tech, src, link, github}) {
    const [isHover, setIsHover] = useState(false);

    function handleMouseEnter(){
        setIsHover(true);
    }

    function handleMouseLeave(){
        setIsHover(false);
    }

    return (
        <div className="sticky top-28 mb-96 shadow-md">

            <div className="flex flex-row bg-customColorCard w-full justify-between px-6 py-24 rounded-md ">
                
                <div className="flex flex-col gap-4 h-full w-[35%] p-8 ">
                    <h1 className="font-custom1 text-3xl font-700 text-customColorText">{title}</h1>
                    <p className="font-custom2 text-sm w-max bg-customColorTagBackground text-customColorTagText px-2 py-1 rounded-full">{status}</p>
                    <p className="font-custom1 text-lg text-left text-customColorText mt-12">{description}</p>
                    <p className="font-custom2 text-md flex flex-row gap-1 text-left font-600 text-customColorText mt-2"><Cpu /> {tech}</p>
                    <a className="flex flex-row justify-start items-center gap-2 font-custom2 text-xl text-center w-max bg-customColorBackground text-customColorText font-700 px-3 py-1 rounded-full mt-24" href={link} target="_blank"><Link /> See live version</a>
                    <a className="flex flex-row justify-start items-center gap-2 font-custom2 text-xl text-center w-max bg-customColorBackground text-customColorText font-700 px-3 py-1 rounded-full" href={github} target="_blank"><Code /> See code</a>
                </div>

                {/* <div className="h-full object-cover object-top"> */}
                <div className="h-full object-cover object-top" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    {/* <a href={link} target="_blank"><img src={src} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></a> */}
                    <a href={link} target="_blank"><img src={src} alt={title} className={`rounded-xl shadow-md cursor-cursor ${isHover ? "brightness-50" : ""}`}/></a>
                </div>

            </div>
        </div>
    );
}

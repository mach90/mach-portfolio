import { Cpu } from "lucide-react";

export default function Project({title, description, status, tech, src, src2, link}) {
    

    return (
        <div className="sticky top-28 mb-96 shadow-md">

            <div className="flex flex-row bg-customColorCard w-full justify-between px-6 py-24 rounded-md ">
                
                <div className="flex flex-col gap-4 h-full w-[35%] p-8">
                    <h1 className="font-custom1 text-3xl text-customColorText">{title} →</h1>
                    <p className="font-custom1 text-lg text-left text-customColorText">{description}</p>
                    <p className="font-custom2 text-md flex flex-row gap-1 text-left font-600 text-customColorText"><Cpu /> {tech}</p>
                    <p className="font-custom2 text-sm w-max bg-customColorTagBackground text-customColorTagText px-2 py-1 rounded-full">{status}</p>
                </div>

                <div className="h-full object-cover object-top ">
                    <button><img src={`../img/${src}`} alt={title} className="rounded-xl shadow-md cursor-crosshair"/></button>
                </div>

            </div>
        </div>
    );
}

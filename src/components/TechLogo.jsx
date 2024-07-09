import { useState } from "react";

export default function TechLogo({title, d, link, icon}) {
    const [isHover, setIsHover] = useState(false);
    const logoBoxStyle = "relative flex flex-col justify-center items-center gap-1 cursor-pointer p-4 bg-customColorSection2b  hover:border-customColorSection2Text1";
    const logoDefaultColor = "#fef6f2";
    const logoHoverColor = "#eb5939";
    const logoSize = "48px";
    const textDefaultStyle = "text-sm text-customColorSection2Text2";
    const textHoverStyle = "text-sm text-customColorSection2Text1";

    function handleHoverEnter(){
        setIsHover(true);
    }

    function handleHoverLeave(){
        setIsHover(false);
    }

    return (
        <a href={link} target="_blank">
            <div className={logoBoxStyle} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={logoSize} height={logoSize}>
                    <title>{title}</title>
                    <path d={d} fill={isHover ? logoHoverColor : logoDefaultColor}/>
                </svg>
                <p className={isHover ? textHoverStyle : textDefaultStyle}>{title}</p>
                <div className="text-xs absolute top-0 right-0 p-1">{icon}</div>
            </div>
        </a>
    );
}



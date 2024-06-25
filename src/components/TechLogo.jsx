import { useState } from "react";

export default function TechLogo({title, d}) {
    const [isHover, setIsHover] = useState(false);
    const logoBoxStyle = "flex flex-col justify-center items-center gap-1";
    const logoDefaultColor = "#e2e2d1";
    const logoHoverColor = "#e2e2d1";
    const logoSize = "48px";
    const textDefaultStyle = "font-custom2 text-md text-[#e2e2d1]";
    const textHoverStyle = "font-custom2 text-md text-[#e2e2d1]";

    function handleHoverEnter(){
        setIsHover(true);
    }

    function handleHoverLeave(){
        setIsHover(false);
    }

    return (
        <div className={logoBoxStyle} onMouseEnter={handleHoverEnter} onMouseLeave={handleHoverLeave}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={logoSize} height={logoSize}>
                <title>{title}</title>
                <path d={d} fill={isHover ? logoHoverColor : logoDefaultColor}/>
            </svg>
            <p className={isHover ? textHoverStyle : textDefaultStyle}>{title}</p>
        </div>
    );
}

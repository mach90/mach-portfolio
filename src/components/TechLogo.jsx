import { useState } from "react";

export default function TechLogo({title, d, link}) {
    const [isHover, setIsHover] = useState(false);
    const logoBoxStyle = "flex flex-col justify-center items-center gap-1 cursor-pointer";
    const logoDefaultColor = "#e2e2d1";
    const logoHoverColor = "#f5f5ee";
    const logoSize = "48px";
    const textDefaultStyle = "font-custom2 text-sm text-customColorText";
    const textHoverStyle = "font-custom2 text-sm text-customColorText";

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
            </div>
        </a>
    );
}



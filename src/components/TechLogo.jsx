import { useState } from "react";

export default function TechLogo({title, d, link, icon}) {
    const [isHover, setIsHover] = useState(false);
    const logoBoxStyle = "relative flex flex-col justify-center items-center gap-1 cursor-pointer";
    const logoDefaultColor = "#e2e2d1";
    const logoHoverColor = "#f5f5ee";
    const logoSize = "48px";
    const textDefaultStyle = "font-custom2 text-sm text-customColorText";
    const textHoverStyle = "font-custom2 text-sm text-customColorText ";

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
                <div className="text-xs absolute top-[-4px] right-[-4px]">{icon}</div>
            </div>
        </a>
    );
}



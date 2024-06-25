import { useState } from "react";

export default function Button({children, onClick}) {
    const [isActive, setIsActive] = useState(false);
    
    function handleClick(e) {
        console.log(e.target)
        setIsActive(!isActive);
        onClick();
    }

    return (
        <>
            {isActive && <button onClick={(e) => handleClick(e)} className="text-yellow-400 font-custom1 text-3xl" >{children}</button>}
            {!isActive && <button onClick={(e) => handleClick(e)} className="hover:text-yellow-400 font-custom1 text-3xl text-white" >{children}</button>}
        </>
    );
}

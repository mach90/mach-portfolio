/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import { useEffect, useState } from "react";
// import Button from "./Button";
import { Menu as MenuIcon, X, Github, Mail } from 'lucide-react';

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const menuContainerStyle = "fixed right-0 top-0 m-4 flex flex-col z-50";
const menuButtonToggleStyle = "p-2 bg-customColorCard text-customColorText";
const menuButtonToggleAnimation = "animate-jello";
const menuListStyle = "flex flex-col animate-menuin mt-24 gap-16";
const menuButtonInactiveStyle = "font-custom1 text-xl bg-customColorCard text-customColorText p-2";
const menuButtonActiveStyle = "font-custom1 text-xl bg-customColorHighlightedBackground text-customColorHighlighted p-2";
const menuSocialsContainerStyle = "fixed bottom-0 right-0 m-4 flex flex-col p-2 gap-4 bg-customColorCard text-customColorText";

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
MENU COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Menu({ScrollTo}) {
    /* //////////////////////////////////////////////////
    STATE
    ////////////////////////////////////////////////// */
    const [isVisible, setIsVisible] = useState(false);
    const [isActive, setIsActive] = useState(false);
    
    /* //////////////////////////////////////////////////
    TOGGLE MENU
    ////////////////////////////////////////////////// */
    function toggleMenu() {
        setIsVisible(!isVisible);
    }

    /* //////////////////////////////////////////////////
    MENU SYNC TO SCROLL POSITION
    ////////////////////////////////////////////////// */
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY === 0) {
                setIsActive(false);
                if(isVisible) setIsVisible(false);
            }

            const journeyElement = document.getElementById('journey');
            if (journeyElement) {
                const rect = journeyElement.getBoundingClientRect();

                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                const isAtLeast90PercentVisible = visibleHeight >= 0.6 * windowHeight;

                if (isAtLeast90PercentVisible) {
                    setIsActive('journey-btn');
                }
            }

            const technologiesElement = document.getElementById('technologies');
            if (technologiesElement) {
                const rect = technologiesElement.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Calculate the visible height of the element
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

                // Check if the visible height is at least 90% of the window height
                const isAtLeast90PercentVisible = visibleHeight >= 0.6 * windowHeight;

                if (isAtLeast90PercentVisible) {
                    setIsActive('technologies-btn');
                }
            }

            const showcaseElement = document.getElementById('showcase');
            if (showcaseElement) {
                const rect = showcaseElement.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Calculate the visible height of the element
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

                // Check if the visible height is at least 90% of the window height
                const isAtLeast90PercentVisible = visibleHeight >= 0.6 * windowHeight;

                if (isAtLeast90PercentVisible) {
                    setIsActive('showcase-btn');
                }
            }

            const togetherElement = document.getElementById('together');
            if (togetherElement) {
                const rect = togetherElement.getBoundingClientRect();
                const windowHeight = window.innerHeight || document.documentElement.clientHeight;
                
                // Calculate the visible height of the element
                const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);

                // Check if the visible height is at least 90% of the window height
                const isAtLeast90PercentVisible = visibleHeight >= 0.6 * windowHeight;

                if (isAtLeast90PercentVisible) {
                    setIsActive('together-btn');
                }
            }

        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [isActive, isVisible]);

    /* //////////////////////////////////////////////////
    CLICK SCROLL TO
    ////////////////////////////////////////////////// */
    function handleClick(e, where, how, block) {
        ScrollTo(where, how, block);
        // setIsActive(e.target.id);
    }

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div className={menuContainerStyle}>

            <div className="place-self-end">
                {!isVisible && <button onClick={toggleMenu} className={menuButtonToggleStyle}>
                    <MenuIcon size={20} className={menuButtonToggleAnimation}/>
                </button>}
                {isVisible && <button onClick={toggleMenu} className={menuButtonToggleStyle}>
                    <X size={20} className={menuButtonToggleAnimation} />
                </button>}
            </div>
            
            {isVisible && <div className={menuListStyle}>
                    <button onClick={(e) => handleClick(e, 'journey', 'smooth')} id="journey-btn" className={isActive === 'journey-btn' ? menuButtonActiveStyle : menuButtonInactiveStyle}>Journey</button>
                    <button onClick={(e) => handleClick(e, 'technologies', 'smooth')} id="technologies-btn" className={isActive === 'technologies-btn' ? menuButtonActiveStyle : menuButtonInactiveStyle}>Technologies</button>
                    <button onClick={(e) => handleClick(e, 'showcase', 'smooth', 'start')} id="showcase-btn" className={isActive === 'showcase-btn' ? menuButtonActiveStyle : menuButtonInactiveStyle}>Showcase</button>
                    <button onClick={(e) => handleClick(e, 'together', 'smooth')} id="together-btn" className={isActive === 'together-btn' ? menuButtonActiveStyle : menuButtonInactiveStyle}>Together</button>
            </div>}

            <div className={menuSocialsContainerStyle}>
                <a href="https://github.com/mach90/mach-portfolio" target="_blank"><Github size={24}/></a>
                <a href="#" target="_blank"><Mail size={24}/></a>
            </div>

        </div>
    );
}
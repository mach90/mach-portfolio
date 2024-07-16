import SplineBackground from "./SplineBackground";
import PortfolioLargeSVG from "../img/portfolio.svg";
import PortfolioSmallSVG from "../img/portfolio-s.svg";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Header() {
    const headerContainerStyle = "relative flex flex-col gap-1 justify-center items-start h-screen overflow-hidden";
    // const headerBackground1 = "fixed h-screen w-screen -z-10 bg-[url('/src/img/background/volcano.png')] bg-center bg-cover";
    // const headerBackground2 = "fixed h-screen w-screen -z-20 bg-[url('/src/img/background/sky.jpg')] bg-bottom bg-cover";
    const headerNicknameStyle = "ml-24 font-custom1 text-xl md:text-3xl font-semibold p-1 text-customColorMenuText bg-customColorBackground";
    const headerTitleStyle = "ml-24 font-custom1 text-2xl md:text-6xl font-semibold p-1 text-customColorMenuText bg-customColorBackground";
    const headerPortfolioLarge = "absolute bottom-0 left-0 w-full hidden lg:block";
    const headerPortfolioSmall = "absolute bottom-0 left-0 w-full block lg:hidden";

    useGSAP(() => {
        gsap.from("#nickname", {x:-100, opacity: 0, duration:1})
        gsap.from("#title1, #title2", {x:-100, opacity: 0, duration:1, stagger: 0.1})
        gsap.from("#portfolio", {y:150, opacity: 0, duration:1})
        // gsap.fromTo("#backgroundImg1",{y:0}, {y:300, scrollTrigger: {trigger: '#backgroundImg1', toggleActions: "play none none none", start: "center 50%", end: "bottom 20%", scrub:3, pin: false, markers : false,}});
        // gsap.fromTo("#backgroundImg2",{y:0}, {y:-200, scrollTrigger: {trigger: '#backgroundImg2', toggleActions: "play none none none", start: "center 50%", end: "bottom 20%", scrub:3, pin: false, markers : false,}});
    }, []);

    return (
        <>
            <div className={headerContainerStyle}>
                <h1 id="nickname" className={headerNicknameStyle}>Mach90</h1>
                <h2 id="title1" className={headerTitleStyle}>SEMI-SKILLED</h2>
                <h2 id="title2" className={headerTitleStyle}>DEVELOPPER</h2>
                <img id="portfolio" src={PortfolioLargeSVG} alt="PortfolioLargeSVG" width="100%" className={headerPortfolioLarge}/>
                <img id="portfolio" src={PortfolioSmallSVG} alt="PortfolioSmallSVG" width="100%" className={headerPortfolioSmall}/>
                <SplineBackground />
            </div>
            {/* <div id="backgroundImg1" className={headerBackground1}></div>
            <div id="backgroundImg2" className={headerBackground2}></div> */}
        </>
    );
}

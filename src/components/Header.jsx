import SplineBackground from "./SplineBackground";
import PortfolioHeaderImg from "../img/portfolio.svg";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

export default function Header() {
    const headerStyle = "relative flex flex-col gap-1 justify-center items-start h-screen bg-[url('img/roadhaze5.jpg')] bg-bottom bg-cover lg:bg-none";
    // const headerStyle = "relative flex flex-col justify-start items-center h-screen bg-[url('img/roadhaze5.jpg')] bg-bottom bg-cover";
    const headerH1Style = "ml-24 font-custom1 text-2xl md:text-3xl font-semibold p-1 text-customColorMenuText bg-customColorBackground";
    const headerH2Style = "ml-24 font-custom1 text-4xl md:text-6xl font-semibold p-1 text-customColorMenuText bg-customColorBackground";
    const headerBigStyle = "absolute bottom-0 left-0";

    useGSAP(() => {
        gsap.from("#headerH1", {x:-100, opacity: 0, duration:1})
        gsap.from("#headerH2", {x:-100, opacity: 0, duration:1, stagger: 0.1})
        gsap.from("#headerSVG", {y:150, opacity: 0, duration:1})
    }, []);

    return (
        <div className={headerStyle}>
            <h1 id="headerH1" className={headerH1Style}>Mach90</h1>
            <h2 id="headerH2" className={headerH2Style}>SEMI-SKILLED</h2>
            <h2 id="headerH2" className={headerH2Style}>FRONTEND</h2>
            <h2 id="headerH2" className={headerH2Style}>DEVELOPPER</h2>
            <img id="headerSVG" src={PortfolioHeaderImg} alt="Portfolio" width="100%" className={headerBigStyle}/>
            <SplineBackground />
        </div>
    );
}

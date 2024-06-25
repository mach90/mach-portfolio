/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Projects from "./Projects";
import TechLogos from "./TechLogos";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(ScrollTrigger, TextPlugin)

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PORTFOLIO COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Portfolio() {
    /* //////////////////////////////////////////////////
    CONTAINER STYLE
    ////////////////////////////////////////////////// */
    const portofolioStyle = "flex flex-col text-justify";

    /* //////////////////////////////////////////////////
    CARD 1 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle1 = "flex flex-col justify-center bg-gradient-to-b from-customColorBackground via-customColorBackground to-customColorBackground px-96 py-96 gap-8  overflow-hidden ";
    const card1TitleStyle = "font-custom1 text-7xl text-customColorText text-center";
    const card1SubtitleStyle = "font-custom2 text-3xl text-customColorText mt-96 text-center";
    const card1StrongStyle = "font-custom1 text-customColorTextHighlighted text-4xl animate-reveal";

    /* //////////////////////////////////////////////////
    CARD 2 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle2 = "flex flex-col justify-start gap-12 px-40 py-96 bg-gradient-to-b from-transparent via-transparent to-transparent";
    const card2TitleStyle = "font-custom1 font-900 tracking-widest py-12 text-7xl text-customColorText text-center";

    /* //////////////////////////////////////////////////
    CARD 3 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle3 = "flex flex-col justify-center px-60 bg-gradient-to-b from-customColorBackground via-customColorBackground to-customColorBackground  py-96";

    /* //////////////////////////////////////////////////
    CARD 4 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle4 = "flex flex-col justify-center items-center px-24 bg-gradient-to-b from-transparent via-transparent to-transparent py-96";
    const card4TitleStyle = "font-custom text-9xl text-customColorText";
    const card4SubtitleStyle = "font-custom1 text-3xl text-customColorText";
    
    useGSAP(() => {
        gsap.fromTo("#card1title1", {x: 500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 60%", end: "top 40%", pin: false, markers : false,}});
        gsap.fromTo("#card1title2", {x: -500, opacity: 0},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 60%", end: "top 40%", pin: false, markers : false,}});
        gsap.fromTo("#card1title3", {opacity: 0}, {duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title3', toggleActions: "play none none none", start: "bottom 70%", end: "top 30%", pin: false, markers : false,}});

        gsap.fromTo("#card2title1", {opacity: 0, text: "73XX-0X0-135"}, {opacity: 1, duration: 1.3, text: "TECHNOLOGIES", scrollTrigger: {trigger: '#card2title1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
        gsap.fromTo("#logosbox1", {x: -500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
        gsap.fromTo("#logosbox2", {x: 500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
        gsap.fromTo("#logosbox3", {x: -500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
        gsap.fromTo("#logosbox4", {x: 500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
        gsap.to("#logosbox", {rotate: 0, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "75% 80%", end: "center 40%", scrub: 3, pin: false, markers : false,}});

        gsap.fromTo("#together1", {opacity: 0}, {opacity: 1, duration: 3, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
        gsap.fromTo("#together2", {opacity: 0}, {opacity: 1, duration: 3, delay: 1.2, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
        // gsap.fromTo("#together3", {opacity: 0}, {opacity: 1, duration: 3, delay: 2.4, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
    }, []);

    return (
        <div className={portofolioStyle}>
            <div id='journey' className={cardStyle1}>
                <h1 id='card1title1' className={card1TitleStyle}>A non-linear journey with many</h1>
                <h1 id='card1title2' className={card1TitleStyle}>roads that sometimes converge.</h1>
                <h2 id='card1title3' className={card1SubtitleStyle}>I aim to create <strong className={card1StrongStyle}>meaningfull web applications</strong> and <strong className={card1StrongStyle}>immersive experiences</strong> that <strong className={card1StrongStyle}>tell stories</strong> and <strong className={card1StrongStyle}>create new avenues</strong>.</h2>
            </div>

            <div id='technologies' className={cardStyle2}>
                <h1 id="card2title1" className={card2TitleStyle}>TECHNOLOGIES</h1>
                <TechLogos />
            </div>

            <div id='showcase' className={cardStyle3}>
                <Projects />
            </div>

            <div id='together' className={cardStyle4}>
                <h1 id='together1' className={card4TitleStyle}>Contact me</h1>
                <h2 id='together2' className={card4SubtitleStyle}>Together we can do great things</h2>
                {/* <h2 id='together3' className={card4SubtitleStyle}>machin at gmail</h2> */}
            </div>

        </div>
    );
}
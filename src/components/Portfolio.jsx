/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Projects from "./Projects";
import TechLogos from "./TechLogos";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PORTFOLIO COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Portfolio() {
    /* //////////////////////////////////////////////////
    CONTAINER STYLE
    ////////////////////////////////////////////////// */
    const portofolioStyle = "flex flex-col";

    /* //////////////////////////////////////////////////
    CARD 1 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle1 = "flex flex-col bg-gradient-to-br from-customColorSection1a to-customColorSection1b py-48 md:py-64 lg:py-80 xl:py-96 px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6";
    const card1TitleStyle = "text-3xl md:text-4xl font-medium text-customColorSection1Text1";
    const card1SubtitleStyle = "text-4xl md:text-5xl font-bold text-customColorSection1Text2";
    const card1ContentStyle = "text-5xl md:text-7xl font-bold text-customColorSection1Text3 p-4 border-4 border-customColorSection1Text3 mt-16 mb-16";
    const card1StrongStyle = "text-5xl md:text-7xl font-bold text-customColorSection1Text2";

    /* //////////////////////////////////////////////////
    CARD 2 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle2 = "flex flex-col bg-[url('img/roadhaze6.jpg')] bg-fixed bg-cover bg-bottom py-48 md:py-64 lg:py-80 xl:py-96 px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6";
    const card2TitleStyle = "text-3xl md:text-4xl font-medium text-customColorSection2Text1";
    const card2SubtitleStyle = "text-4xl md:text-5xl font-bold text-customColorSection2Text2";
    // const card2ContentStyle = "text-5xl md:text-7xl font-bold bg-customColorSection2a text-customColorSection2Text3 p-4 border-4 border-customColorSection2Text3 mt-16 mb-16";
    // const card2StrongStyle = "text-5xl md:text-7xl font-bold text-customColorSection2Text2";

    /* //////////////////////////////////////////////////
    CARD 3 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle3 = "flex flex-col bg-gradient-to-br from-customColorSection3a to-customColorSection3b py-48 md:py-64 lg:py-80 xl:py-96 gap-2 xl:gap-6";
    const card3TitleStyle = "text-3xl md:text-4xl font-medium text-customColorSection3Text1 px-8 sm:px-[10%] md:px-[20%]";
    const card3SubtitleStyle = "text-4xl md:text-5xl font-bold text-customColorSection3Text2 px-8 sm:px-[10%] md:px-[20%]";
    // const card3ContentStyle = "text-5xl md:text-7xl font-bold text-customColorSection3Text3 p-4 border-4 border-customColorSection3Text3 mt-16 mb-16";
    // const card3StrongStyle = "text-5xl md:text-7xl font-bold text-customColorSection3Text2";

    /* //////////////////////////////////////////////////
    CARD 4 STYLE
    ////////////////////////////////////////////////// */
    const cardStyle4 = "flex flex-col justify-center bg-[url('img/roadhaze4.jpg')] bg-cover bg-bottom h-screen px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6";
    const card4TitleStyle = "text-3xl md:text-4xl font-medium text-customColorSection4Text1";
    const card4SubtitleStyle = "text-4xl md:text-5xl font-bold text-customColorSection4Text2";
    const card4ContentStyle = "text-5xl md:text-7xl font-bold bg-customColorSection4a text-customColorSection4Text3 p-4 border-4 border-customColorSection4Text3 mt-16";
    const card4StrongStyle = "text-5xl md:text-7xl font-bold text-customColorSection4Text2";
    
    // useGSAP(() => {
    //     gsap.fromTo("#card1title1", {x: 50, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 60%", end: "top 40%", pin: false, markers : false,}});
    //     gsap.fromTo("#card1title2", {x: 50, opacity: 0},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 60%", end: "top 40%", pin: false, markers : false,}});
    //     gsap.fromTo("#card1title3", {opacity: 0}, {duration: 1, opacity: 1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "bottom 70%", end: "top 30%", pin: false, markers : false,}});

    //     gsap.fromTo("#card2title1", {opacity: 0, text: "73XX-0X0-135"}, {opacity: 1, duration: 1.3, text: "TECHNOLOGIES", scrollTrigger: {trigger: '#card2title1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
    //     gsap.fromTo("#logosbox1", {x: -500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
    //     gsap.fromTo("#logosbox2", {x: 500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
    //     gsap.fromTo("#logosbox3", {x: -500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
    //     gsap.fromTo("#logosbox4", {x: 500, opacity: 0,},{x: 0, duration: 1, opacity: 1, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "top 50%", end: "top 40%", scrub: false, markers : false,}});
    //     gsap.to("#logosbox", {rotate: 0, scrollTrigger: {trigger: '#logosbox', toggleActions: "play none none none", start: "75% 80%", end: "center 40%", scrub: 3, pin: false, markers : false,}});

    //     gsap.fromTo("#together1", {opacity: 0}, {opacity: 1, duration: 3, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
    //     gsap.fromTo("#together2", {opacity: 0}, {opacity: 1, duration: 3, delay: 1.2, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
    //     // gsap.fromTo("#together3", {opacity: 0}, {opacity: 1, duration: 3, delay: 2.4, scrollTrigger: {trigger: '#together1', toggleActions: "play none none none", start: "top 50%", end: "bottom 40%", markers : false,}});
    // }, []);

    useGSAP(() => {
        gsap.fromTo("#card1title1", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card1title2", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card1title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card2title1", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card2title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card2title2", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card2title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card3title1", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card3title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card3title2", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card3title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card4title1", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card4title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#card4title2", {opacity:0, y:30}, {opacity:1, y:0, duration:1, scrollTrigger: {trigger: '#card4title1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
    }, []);

    return (
        <div className={portofolioStyle}>
            <div id='journey' className={cardStyle1}>
                <h1 id='card1title1' className={card1TitleStyle}>A non-linear journey</h1>
                <h2 id='card1title2' className={card1SubtitleStyle}>Many roads that sometimes converge.</h2>
                <h3 id='card1title3' className={card1ContentStyle}>I aim to create <strong className={card1StrongStyle}>meaningfull web applications</strong> and <strong className={card1StrongStyle}>immersive experiences</strong> that <strong className={card1StrongStyle}>tell stories</strong> and <strong className={card1StrongStyle}>create new avenues</strong>.</h3>
            </div>

            <div id='technologies' className={cardStyle2}>
                <h1 id="card2title1" className={card2TitleStyle}>Technologies</h1>
                <h2 id="card2title2" className={card2SubtitleStyle}>A varity of modern tools</h2>
                {/* <h3 id='card2title3' className={card2ContentStyle}>I use a variety of <strong className={card2StrongStyle}>modern technologies</strong> and tools and <strong className={card2StrongStyle}>take advantage of AI</strong> to create faster.</h3> */}
                <TechLogos />
            </div>

            <div id='showcase' className={cardStyle3}>
                <h1 id="card3title1" className={card3TitleStyle}>Showcase</h1>
                <h2 id="card3title2" className={card3SubtitleStyle}>Personal projects</h2>
                {/* <h3 id='card3title3' className={card3ContentStyle}>Here are some of the projects I am currently <strong className={card3StrongStyle}>working on</strong>.</h3> */}
                <Projects />
            </div>

            <div id='together' className={cardStyle4}>
                <h1 id='card4title1' className={card4TitleStyle}>Together</h1>
                <h2 id='card4title2' className={card4SubtitleStyle}>We can do great things</h2>
                <h3 id='card4title3' className={card4ContentStyle}>You can contact me on my email: <strong className={card4StrongStyle}>machin at gmail</strong>.com</h3>
            </div>

        </div>
    );
}
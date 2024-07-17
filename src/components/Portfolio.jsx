/* ////////////////////////////////////////////////////////////////////////////////////////////////////
IMPORTS
//////////////////////////////////////////////////////////////////////////////////////////////////// */
import Projects from "./Projects";
import TechLogos from "./TechLogos";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin);

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
PORTFOLIO COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function Portfolio() {
    /* //////////////////////////////////////////////////
    CONTAINER STYLE
    ////////////////////////////////////////////////// */
    const portofolioContainerStyle = "flex flex-col overflow-hidden";

    /* //////////////////////////////////////////////////
    JOURNEY SECTION
    ////////////////////////////////////////////////// */
    const journeyContainerStyle = "flex flex-col bg-gradient-to-b from-customColorSection1a to-customColorSection1b py-48 md:py-64 lg:py-80 xl:py-96 px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6 overflow-hidden";
    const journeyTitleStyle = "text-3xl lg:text-4xl font-medium text-customColorSection1Text1";
    const journeySubtitleStyle = "text-3xl lg:text-5xl font-bold text-customColorSection1Text2";
    const journeyContentStyle = "text-4xl lg:text-7xl font-bold text-customColorSection1Text3 p-4 border-4 border-customColorSection1Text3 mt-16 mb-16";
    const journeyStrongStyle = "text-4xl lg:text-7xl font-bold text-customColorSection1Text2";

    /* //////////////////////////////////////////////////
    TECHNOLOGIES SECTION
    ////////////////////////////////////////////////// */
    const technologiesContainerStyle = "flex flex-col bg-gradient-to-bl from-customColorSection2a to-customColorSection2b py-48 md:py-64 lg:py-80 xl:py-96 px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6 overflow-hidden";
    const technologiesTitleStyle = "text-3xl lg:text-4xl font-medium text-customColorSection2Text1";
    const technologiesSubtitleStyle = "text-3xl lg:text-5xl font-bold text-customColorSection2Text2";

    /* //////////////////////////////////////////////////
    SHOWCASE SECTION
    ////////////////////////////////////////////////// */
    const showcaseContainerStyle = "flex flex-col bg-gradient-to-br from-customColorSection3a via-customColorSection3b to-customColorSection3b py-48 md:py-64 lg:py-80 xl:py-96 gap-2 xl:gap-6 overflow-hidden";
    const showcaseTitleStyle = "text-3xl lg:text-4xl font-medium text-customColorSection3Text1 px-8 sm:px-[10%] md:px-[20%]";
    const showcaseSubtitleStyle = "text-3xl lg:text-5xl font-bold text-customColorSection3Text2 px-8 sm:px-[10%] md:px-[20%]";

    /* //////////////////////////////////////////////////
    CARD 4 STYLE
    ////////////////////////////////////////////////// */
    const togetherContainerStyle = "flex flex-col justify-center bg-gradient-to-br from-customColorSection4a to-customColorSection4b h-screen px-8 sm:px-[10%] md:px-[20%] gap-2 xl:gap-6 overflow-hidden";
    const togetherTitleStyle = "text-3xl lg:text-4xl font-medium text-customColorSection4Text1";
    const togetherSubtitleStyle = "text-3xl lg:text-5xl font-bold text-customColorSection4Text2";
    const togetherContentStyle = "text-4xl lg:text-7xl font-bold text-customColorSection4Text3 p-4 border-4 border-customColorSection4Text3 mt-16";
    const togetherStrongStyle = "text-4xl lg:text-7xl font-bold text-customColorSection4Text2";
    
    useGSAP(() => {
        gsap.fromTo("#journeyTitle1", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#journeyTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#journeyTitle2", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#journeyTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#technologiesTitle1", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#technologiesTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#technologiesTitle2", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#technologiesTitle2', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#showcaseTitle1", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#showcaseTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#showcaseTitle2", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#showcaseTitle2', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#togetherTitle1", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#togetherTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#togetherTitle2", {opacity:0, x:-100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#togetherTitle1', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});
        
        gsap.fromTo("#journeyTitle3", {opacity:0, y:300}, {opacity:1, y:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#journeyTitle3', toggleActions: "play none none none", start: "top 100%", end: "bottom 20%", pin: false, markers : false,}});
        gsap.fromTo("#togetherTitle3", {opacity:0, x:100}, {opacity:1, x:0, duration:1, ease:"expo.out", scrollTrigger: {trigger: '#togetherTitle3', toggleActions: "play none none none", start: "top 80%", end: "bottom 20%", pin: false, markers : false,}});

        // gsap.to("#projectsContainer", {
        //     x: -1000,
        //     duration: 3,
        //     scrollTrigger: {trigger: '#projectsContainer', toggleActions: "play none none none", start: "bottom 80%", end: "bottom 20%", pin: true, scrub:1, markers : true}
        // });
        
    }, []);

    return (
        <div className={portofolioContainerStyle}>

            <div id='journey' className={journeyContainerStyle}>
                <h1 id='journeyTitle1' className={journeyTitleStyle}>A non-linear journey</h1>
                <h2 id='journeyTitle2' className={journeySubtitleStyle}>Many roads that sometimes converge.</h2>
                <h3 id='journeyTitle3' className={journeyContentStyle}>I aim to create <strong id="journeytitle3strong" className={journeyStrongStyle}>meaningfull web applications</strong> and <strong id="journeytitle3strong" className={journeyStrongStyle}>immersive experiences</strong> that <strong className={journeyStrongStyle}>tell stories</strong> and <strong id="journeytitle3strong" className={journeyStrongStyle}>create new avenues</strong>.</h3>
            </div>

            <div id='technologies' className={technologiesContainerStyle}>
                <h1 id="technologiesTitle1" className={technologiesTitleStyle}>Technologies</h1>
                <h2 id="technologiesTitle2" className={technologiesSubtitleStyle}>A varity of modern tools</h2>
                <TechLogos />
            </div>

            <div id='showcase' className={showcaseContainerStyle}>
                <h1 id="showcaseTitle1" className={showcaseTitleStyle}>Showcase</h1>
                <h2 id="showcaseTitle2" className={showcaseSubtitleStyle}>Personal projects</h2>
                <Projects />
            </div>

            <div id='together' className={togetherContainerStyle}>
                <h1 id='togetherTitle1' className={togetherTitleStyle}>Together</h1>
                <h2 id='togetherTitle2' className={togetherSubtitleStyle}>We can do great things</h2>
                <h3 id='togetherTitle3' className={togetherContentStyle}>I check my mailbox regularly: <strong className={togetherStrongStyle}>machin at gmail</strong>.com</h3>
            </div>

        </div>
    );
}
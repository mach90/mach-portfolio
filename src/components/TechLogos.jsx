import TechLogo from "./TechLogo";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
STYLES
//////////////////////////////////////////////////////////////////////////////////////////////////// */
const logosBoxStyle = "flex flex-col gap-2 text-2xl mt-24";
const logosBoxCompartmentStyle = "grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 items-center gap-2";
// const logosBoxCompartmentTitleStyle = "text-lg text-customColorSection2Text2";
//Logos from https://simpleicons.org/

/* ////////////////////////////////////////////////////////////////////////////////////////////////////
TECHLOGOS COMPONENT
//////////////////////////////////////////////////////////////////////////////////////////////////// */
export default function TechLogos() {
    useGSAP(() => {
        gsap.fromTo("#logosbox1 > div", {opacity:0, scale:0.2}, {opacity:1, scale:1, duration:0.75, stagger:0.1, transformOrigin: "50% 50%", ease: "expo.out", scrollTrigger: {trigger: '#logosbox1', toggleActions: "play none none none", start: "top 75%", end: "bottom 20%", pin: false, markers: false,}});
        gsap.fromTo("#logosbox2 > div", {opacity:0, scale:0.2}, {opacity:1, scale:1, duration:0.75, stagger:0.1, transformOrigin: "50% 50%", ease: "expo.out", scrollTrigger: {trigger: '#logosbox2', toggleActions: "play none none none", start: "top 75%", end: "bottom 20%", pin: false, markers: false,}});
        gsap.fromTo("#logosbox3 > div", {opacity:0, scale:0.2}, {opacity:1, scale:1, duration:0.75, stagger:0.1, transformOrigin: "50% 50%", ease: "expo.out", scrollTrigger: {trigger: '#logosbox3', toggleActions: "play none none none", start: "top 75%", end: "bottom 20%", pin: false, markers: false,}});
        gsap.fromTo("#logosbox4 > div", {opacity:0, scale:0.2}, {opacity:1, scale:1, duration:0.75, stagger:0.1, transformOrigin: "50% 50%", ease: "expo.out", scrollTrigger: {trigger: '#logosbox4', toggleActions: "play none none none", start: "top 75%", end: "bottom 20%", pin: false, markers: false,}});
    }, []);

    /* //////////////////////////////////////////////////
    JSX
    ////////////////////////////////////////////////// */
    return (
        <div id="logosbox" className={logosBoxStyle}>
            {/* <h2 className={logosBoxCompartmentTitleStyle}>Coding</h2> */}
            <div id="logosbox1" className={logosBoxCompartmentStyle}>
                <div>
                    <TechLogo title={"HTML5"} d={"M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"} link={"https://html.spec.whatwg.org/multipage/"} icon="Code" />
                </div>
                <div>
                    <TechLogo title={"JavaScript"} d={"M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"} link={"https://ecma-international.org/publications-and-standards/standards/ecma-262/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"React"} d={"M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"} link={"https://react.dev/"} icon="1"/>
                </div>
                <div>
                    <TechLogo title={"Vite"} d={"m8.286 10.578.512-8.657a.306.306 0 0 1 .247-.282L17.377.006a.306.306 0 0 1 .353.385l-1.558 5.403a.306.306 0 0 0 .352.385l2.388-.46a.306.306 0 0 1 .332.438l-6.79 13.55-.123.19a.294.294 0 0 1-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 0 0-.388-.355l-1.433.435a.306.306 0 0 1-.389-.354l.69-3.375a.306.306 0 0 0-.37-.36l-2.32.536a.306.306 0 0 1-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 0 1 .84.369.8.8 0 0 1 .034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 0 1-.672.37.826.826 0 0 1-.634-.302.8.8 0 0 1-.16-.67l1.029-4.981-1.12.34a.81.81 0 0 1-.86-.262.802.802 0 0 1-.165-.67l.63-3.08-2.027.468a.808.808 0 0 1-.768-.233.81.81 0 0 1-.217-.6l.389-6.57-7.44-1.33a.612.612 0 0 0-.64.906L11.58 23.691a.612.612 0 0 0 1.066-.004l11.26-20.135a.612.612 0 0 0-.644-.9z"} link={"https://vitejs.dev/"} icon="1"/>
                </div>
                <div>
                    <TechLogo title={"Three.js"} d={"M.38 0a.268.268 0 0 0-.256.332l2.894 11.716a.268.268 0 0 0 .01.04l2.89 11.708a.268.268 0 0 0 .447.128L23.802 7.15a.268.268 0 0 0-.112-.45l-5.784-1.667a.268.268 0 0 0-.123-.035L6.38 1.715a.268.268 0 0 0-.144-.04L.456.01A.268.268 0 0 0 .38 0zm.374.654L5.71 2.08 1.99 5.664zM6.61 2.34l4.864 1.4-3.65 3.515zm-.522.12l1.217 4.926-4.877-1.4zm6.28 1.538l4.878 1.404-3.662 3.53zm-.52.13l1.208 4.9-4.853-1.392zm6.3 1.534l4.947 1.424-3.715 3.574zm-.524.12l1.215 4.926-4.876-1.398zm-15.432.696l4.964 1.424-3.726 3.586zM8.047 8.15l4.877 1.4-3.66 3.527zm-.518.137l1.236 5.017-4.963-1.432zm6.274 1.535l4.965 1.425-3.73 3.586zm-.52.127l1.235 5.012-4.958-1.43zm-9.63 2.438l4.873 1.406-3.656 3.523zm5.854 1.687l4.863 1.403-3.648 3.51zm-.54.04l1.214 4.927-4.875-1.4zm-3.896 4.02l5.037 1.442-3.782 3.638z"} link={"https://threejs.org/"} icon="1" />
                </div>
            </div>

            {/* <h2 className={logosBoxCompartmentTitleStyle}>UI & Design</h2> */}
            <div id="logosbox2" className={logosBoxCompartmentStyle}>
                <div>
                    <TechLogo title={"CSS3"} d={"M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"} link={"https://drafts.csswg.org/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Tailwind"} d={"M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"} link={"https://tailwindcss.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Spline"} d={"m12.004 0c-6.6173 0-12.004 5.3785-12.004 11.996 0 6.6173 5.387 12.004 12.004 12.004 6.6173 0 11.996-5.387 11.996-12.004 0-6.6172-5.3785-11.996-11.996-11.996zm0 1.6521c0.382 0 0.75806 0.020787 1.1291 0.061946-0.84828 0.91762-1.4693 2.1465-2.0085 3.4792-0.74426 1.8393-1.3274 3.9022-2.032 5.6883-0.70466 1.7861-1.539 3.2716-2.6702 4.0171-1.0412 0.68623-2.3694 0.83216-4.3586-0.01247-0.2657-0.91766-0.40981-1.8879-0.40981-2.8922 0-0.18051 0.00374-0.35977 0.011339-0.53787 1.4214-0.03704 2.5178-0.60041 3.3597-1.4322 0.95104-0.9398 1.6076-2.192 2.2412-3.4365 0.63356-1.2445 1.2421-2.4857 2.0256-3.413 0.61629-0.72944 1.318-1.2662 2.2562-1.5112 0.1508-0.00831 0.30236-0.012472 0.45464-0.012472zm2.1516 0.22428c1.6658 0.35066 3.1834 1.1002 4.4461 2.1451-1.7529 0.9595-2.7226 2.4236-3.2423 4.0768-0.5599 1.7812-0.63594 3.7829-0.74064 5.7353-0.10469 1.9525-0.23244 3.8574-0.82394 5.4216-0.47841 1.2652-1.2302 2.3143-2.5528 3.063-4.0092-0.29038-7.3772-2.8559-8.8261-6.4141 1.844 0.61697 3.3149 0.44088 4.4568-0.31185 1.3884-0.91502 2.2594-2.57 2.9861-4.4119 0.72669-1.842 1.3037-3.901 2.0235-5.6798 0.61667-1.524 1.3381-2.8218 2.2732-3.6243zm-4.8901 0.1429c-0.21468 0.19412-0.4148 0.40396-0.60189 0.62539-0.87897 1.0404-1.5075 2.3309-2.1366 3.5667-0.62914 1.2358-1.2587 2.4147-2.0811 3.2273-0.707 0.69862-1.5361 1.1454-2.7022 1.1932 0.051402-0.39281 0.12359-0.77723 0.2177-1.1548 0.95509-0.10534 1.7164-0.50619 2.3138-1.0651 0.73092-0.68371 1.2399-1.579 1.7097-2.4846 0.46983-0.90564 0.90421-1.8218 1.445-2.5571 0.34885-0.47409 0.73402-0.87033 1.2017-1.159 0.20825-0.071471 0.42006-0.13383 0.63394-0.19208zm-2.7214 1.1825c-0.49701 0.74708-0.88989 1.574-1.2914 2.3479-0.46012 0.88698-0.93902 1.7036-1.5411 2.2668-0.41775 0.39074-0.88592 0.67058-1.4942 0.79404 0.78108-2.2634 2.3258-4.1677 4.3266-5.4087zm12.709 1.4066c1.9104 1.8751 3.0928 4.4903 3.0928 7.3874 0 5.5087-4.2753 10-9.699 10.331 0.90777-0.77301 1.5174-1.7306 1.9146-2.7812 0.65431-1.7303 0.78285-3.7125 0.88792-5.6713 0.10507-1.9587 0.18936-3.8952 0.70224-5.5262 0.50079-1.5931 1.3717-2.8883 3.1014-3.7396z"} link={"https://spline.design/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Figma"} d={"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"} link={"https://www.figma.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Webflow"} d={"m24 4.515-7.658 14.97H9.149l3.205-6.204h-.144C9.566 16.713 5.621 18.973 0 19.485v-6.118s3.596-.213 5.71-2.435H0V4.515h6.417v5.278l.144-.001 2.622-5.277h4.854v5.244h.144l2.72-5.244H24Z"} link={"https://webflow.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Framer"} d={"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"} link={"https://framer.com/"} icon="1" />
                </div>
            </div>

            {/* <h2 className={logosBoxCompartmentTitleStyle}>2D & 3D Art</h2> */}
            <div id="logosbox3" className={logosBoxCompartmentStyle}>
                <div>
                    <TechLogo title={"Photoshop"} d={"M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z"} link={"https://www.adobe.com/products/photoshop.html"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Photopea"} d={"M20.098 0A3.899 3.899 0 0 1 24 3.903v16.194A3.899 3.899 0 0 1 20.098 24H6.393l-.051-10.34v-.074c0-3.92 3.112-7.09 6.963-7.09 2.31 0 4.177 1.902 4.177 4.254 0 2.352-1.867 4.254-4.177 4.254-.77 0-1.393-.634-1.393-1.418 0-.783.623-1.418 1.393-1.418.769 0 1.392-.634 1.392-1.418 0-.784-.623-1.418-1.392-1.418-2.31 0-4.178 1.9-4.178 4.253 0 2.352 1.868 4.254 4.178 4.254 3.85 0 6.962-3.169 6.962-7.09 0-3.92-3.112-7.089-6.962-7.089-5.39 0-9.75 4.436-9.75 9.925v.086l.023 10.315A3.899 3.899 0 0 1 0 20.097V3.903A3.899 3.899 0 0 1 3.902 0z"} link={"https://www.photopea.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Illustrator"} d={"M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z"} link={"https://www.adobe.com/products/illustrator.html"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Inkscape"} d={"M7.666 14.871c.237.147 3.818.875 4.693 1.02.303.064.088.376-.33.587-.943.251-5.517-1.607-4.363-1.607zm5.647-13.264l3.505 3.56c.333.34.328.998.142 1.187l-1.74-1.392-.342 2.061-1.455-.767-2.328 1.47-.771-3.1L9.073 6.79H7.16c-.78 0-.871-.99-.163-1.698 1.237-1.335 2.657-2.696 3.429-3.485.776-.793 2.127-.77 2.887 0zM9.786.97l-8.86 9.066c-2.993 3.707 2.038 3.276 4.194 4.343.774.791-2.965 1.375-2.191 2.166.773.791 4.678 1.524 5.453 2.314.773.791-1.584 1.63-.81 2.42.773.792 2.563.042 2.898 1.868.238 1.304 3.224.56 4.684-.508.774-.791-1.48-.717-.706-1.508 1.923-1.967 3.715-.714 4.373-2.686.325-.974-2.832-1.501-2.057-2.292 2.226-1.3 9.919-2.146 6.268-5.796L13.85.97c-1.123-1.078-2.998-1.09-4.063 0zm10.177 17.475c0 .45 3.314.745 3.314-.106-.472-1.366-2.922-1.274-3.314.106zm-14.928 2.39c.784.679 1.997-.169 2.36-1.116-.76-1.01-3.607.037-2.36 1.116zm14.512-1.466c-1.011.908.114 1.828 1.111 1.242.222-.225-.006-1.016-1.11-1.242Z"} link={"https://inkscape.org/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Solidworks"} d={"M21.1854 8.0254c1.064.192 1.9321.34 2.1311.79.223.51-.936.541-1.52.552-2.7992.054-4.4862.11-4.5712 1.061-.11 1.2241 1.196 2.4572 2.486 4.1852 1.1781 1.577 2.5172 3.1351 2.1322 4.5862-.482 1.809-2.6991 2.192-4.8102 2.192-2.0211.001-3.9382-.323-4.7432-.482-1.002-.199-.852-.694-.585-.853.298-.178 2.002-.182 3.187-.252.9751-.058 3.8052-.056 4.2463-.781.54-.889-.783-2.4081-2.0001-4.0002-1.519-1.984-3.1862-4.0341-2.3031-5.5322 1.14-1.936 4.4842-1.803 6.3502-1.466m-13.6905 2.95c1.772-.104 3.9261.206 5.1342 1.1301a2.172 2.172 0 01.78 2.2771c-.698 2.7521-3.3041 6.0833-9.0933 8.6434-1.8411.813-3.2892 1.125-3.5932.906-.326-.234.624-2.052.909-2.6541.9251-1.952 2.0791-3.8532 3.2052-5.5952.414-.64 1.055-1.7521 1.634-1.6621.519.08-.089 1.26-.488 2.011-.672 1.2601-2.523 4.7603-1.912 4.9693 1.35.462 7.6803-4.3542 6.7462-7.0363-.432-1.245-3.1801-1.363-4.9122-1.363-.787 0-2.508.186-2.603-.417-.102-.5561 2.613-1.1161 4.192-1.2101M11.8672.013c2.068-.098 4.5141.342 4.9702 1.8021.747 2.3901-3.0402 5.8772-6.3383 7.5873-.809.42-1.3.536-1.504.507-.195-.027-.225-.221-.162-.355.118-.252.65-.764 1.361-1.322 3.7151-2.9001 4.9232-5.0282 4.2212-5.8903-.45-.552-2.3321-.937-4.2872-.937-.53 0-1.925.123-2.068-.367C7.942.634 9.814.108 11.866.012"} link={"https://www.solidworks.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Blender"} d={"M12.51 13.214c.046-.8.438-1.506 1.03-2.006a3.424 3.424 0 0 1 2.212-.79c.85 0 1.631.3 2.211.79.592.5.983 1.206 1.028 2.005.045.823-.285 1.586-.865 2.153a3.389 3.389 0 0 1-2.374.938 3.393 3.393 0 0 1-2.376-.938c-.58-.567-.91-1.33-.865-2.152M7.35 14.831c.006.314.106.922.256 1.398a7.372 7.372 0 0 0 1.593 2.757 8.227 8.227 0 0 0 2.787 2.001 8.947 8.947 0 0 0 3.66.76 8.964 8.964 0 0 0 3.657-.772 8.285 8.285 0 0 0 2.785-2.01 7.428 7.428 0 0 0 1.592-2.762 6.964 6.964 0 0 0 .25-3.074 7.123 7.123 0 0 0-1.016-2.779 7.764 7.764 0 0 0-1.852-2.043h.002L13.566 2.55l-.02-.015c-.492-.378-1.319-.376-1.86.002-.547.382-.609 1.015-.123 1.415l-.001.001 3.126 2.543-9.53.01h-.013c-.788.001-1.545.518-1.695 1.172-.154.665.38 1.217 1.2 1.22V8.9l4.83-.01-8.62 6.617-.034.025c-.813.622-1.075 1.658-.563 2.313.52.667 1.625.668 2.447.004L7.414 14s-.069.52-.063.831zm12.09 1.741c-.97.988-2.326 1.548-3.795 1.55-1.47.004-2.827-.552-3.797-1.538a4.51 4.51 0 0 1-1.036-1.622 4.282 4.282 0 0 1 .282-3.519 4.702 4.702 0 0 1 1.153-1.371c.942-.768 2.141-1.183 3.396-1.185 1.256-.002 2.455.41 3.398 1.175.48.391.87.854 1.152 1.367a4.28 4.28 0 0 1 .522 1.706 4.236 4.236 0 0 1-.239 1.811 4.54 4.54 0 0 1-1.035 1.626"} link={"https://www.blender.org/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Painter"} d={"m4.2357 0c-2.3393 0-4.2357 1.9516-4.2357 4.3589v15.282c0 2.4074 1.8964 4.359 4.2357 4.359h15.448c2.3393 0 4.2357-1.9516 4.2357-4.359v-15.282c0-2.4073-1.8964-4.3589-4.2357-4.3589zm4.1791 6.1133c0.81283 0 1.4975 0.1046 2.0539 0.3137a3.5629 3.6667 0 0 1 1.3397 0.8422 3.1402 3.2316 0 0 1 0.73014 1.1642 3.7527 3.8619 0 0 1 0.22466 1.3292c0 0.8809-0.19794 1.6074-0.59371 2.1797a3.355 3.4527 0 0 1-1.6046 1.2468 6.3853 6.5713 0 0 1-2.2464 0.3881c-0.23535 0-0.40112 0-0.49732-0.01-0.096199-0.01-0.24069-0.01-0.43328-0.01v3.253a0.12757 0.13128 0 0 1-0.1443 0.1486h-1.9577c-0.074821 1e-4 -0.11233-0.044-0.11233-0.132v-10.552c0-0.077 0.032066-0.1156 0.096199-0.1156 0.17102 0 0.3742 0 0.60974-0.01a324.65 334.1 0 0 1 1.6286-0.033c0.30482-0.01 0.60702-0.01 0.9066-0.01zm8.8134 0.2433c0.01458 5e-4 0.02624 0 0.03595 0.01 0.02138 0.011 0.02429 0.04 0.02429 0.095-0.02138 0.2533-0.0379 0.5974-0.04859 1.032-0.01069 0.4349-0.02138 0.8561-0.03207 1.2632h1.4922c0.06413 0 0.0962 0.044 0.0962 0.1321v1.6677a0.098765 0.10164 0 0 1-0.08065 0.1156h-1.5243v3.5338c0 0.3743 0.06122 0.6413 0.18462 0.8008 0.12273 0.1597 0.3501 0.2396 0.68184 0.2395a4.2136 4.3363 0 0 0 0.52958-0.033c0.02915-0.011 0.06122-0.01 0.08843 0.01 0.02624 0.016 0.03984 0.052 0.03984 0.1073v1.354c0 0.1212-0.04275 0.1928-0.12826 0.2147a5.6405 5.8047 0 0 1-0.64191 0.1651c-0.2541 0.047-0.51199 0.069-0.77017 0.066-0.69555 0-1.241-0.1871-1.6366-0.5614-0.39587-0.3741-0.59381-0.974-0.59371-1.7999v-4.0952h-0.94664c-0.08551 0-0.12836-0.049-0.12836-0.1486v-1.6347c0-0.088 0.04761-0.1321 0.1444-0.1322h0.94664c0.01069-0.187 0.02429-0.4045 0.03984-0.6521 0.01555-0.2477 0.03692-0.4954 0.06413-0.7431 0.02624-0.2477 0.05053-0.4486 0.07191-0.6027 0.01069-0.033 0.02721-0.064 0.04859-0.091 0.0204-0.027 0.04858-0.047 0.08065-0.058l1.9094-0.2477c0.02138 0 0.0379-0.01 0.05247 0zm-8.5781 1.7544a2.9728 3.0594 0 0 0-0.17092 6e-4c-0.25672 0-0.4841 0-0.68204 0.01-0.19813 0.01-0.33446 0.014-0.40918 0.025v3.4181c0.13895 0.011 0.26732 0.017 0.38509 0.016h0.52948a3.7859 3.8961 0 0 0 1.1473-0.1651 1.7296 1.78 0 0 0 0.81827-0.5449c0.20862-0.2531 0.31289-0.6053 0.31289-1.0568a1.6228 1.6701 0 0 0-0.23253-0.9082 1.4962 1.5398 0 0 0-0.69798-0.5862 2.9728 3.0594 0 0 0-1.0004-0.2069z"} link={"https://www.adobe.com/products/substance3d/apps/painter.html"} icon="1" />
                </div>
            </div>

            {/* <h2 className={logosBoxCompartmentTitleStyle}>Propelled by</h2> */}
            <div id="logosbox4" className={logosBoxCompartmentStyle}>
                <div>
                    <TechLogo title={"OpenAI"} d={"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"} link={"https://openai.com/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Stability"} d={"m8.2715 0c-5.3622 0-8.2715 2.7597-8.2715 7.0312 0 3.4536 2.0157 5.4617 6.1055 6.416 0.28623 0.07157 0.4331 0.10741 0.43945 0.10938 0.62209 0.19252 1.4627 0.44745 2.5195 0.76367 2.0903 0.49986 2.627 1.0306 2.627 2.6211 0 1.4541-1.5103 2.2812-3.5098 2.2812-5.7598 0-8.1816-2.9141-8.1816-2.9141v5.3184s1.5147 2.373 8.1816 2.373c5.5894 0 9.2246-2.9607 9.2246-7.4141 0-3.4536-2.2106-5.6478-6.1641-6.5566l-2.5391-0.76172c-2.2267-0.49986-3.5269-1.0994-3.2207-2.6328 0.25475-1.2757 1.0168-1.9961 2.7891-1.9961 5.634 0 7.7207 1.9961 7.7207 1.9961v-4.8008s-2.0316-1.834-7.7207-1.834zm13.072 18.889c-1.4588 0-2.5137 1.0237-2.5137 2.4824 0 1.4588 1.0549 2.4824 2.5137 2.4824 1.4588 0 2.5449-1.0547 2.5449-2.4824 0-1.4588-1.0551-2.4824-2.5449-2.4824z"} link={"https://stability.ai/"} icon="1" />
                </div>
                <div>
                    <TechLogo title={"Luma"} d={"m6.5717 21.073-4.9359-2.8841v-12.352l10.353-5.837 0.26937 11.978 3.477 2.0029c1.9123 1.1016 4.1899 2.4306 5.0614 2.9535l1.5844 0.95059-5.3149 3.0788c-2.9232 1.6934-5.3698 3.0595-5.4368 3.0359-0.06707-0.0236-2.3431-1.3408-5.0578-2.927z"} link={"https://lumalabs.ai/genie"} icon="1" />
                </div>
            </div>
        </div>
    );
}
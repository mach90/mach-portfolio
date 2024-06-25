import SplineBackground from "./SplineBackground";
import PortfolioHeaderImg from "../img/portfolio.svg";

export default function Header() {
    const headerStyle = "flex flex-col justify-start items-center h-screen";
    const headerH1Style = "font-custom1 text-5xl text-customColorBackground mt-24 mb-4";
    const headerH2Style = "font-custom1 text-2xl text-customColorBackground";
    const headerBigStyle = "absolute bottom-0 left-0";

    return (
        <div className={headerStyle}>
            <h1 className={headerH1Style}>John Doe</h1>
            <h2 className={headerH2Style}>Jobtitle namehere</h2>
            <img src={PortfolioHeaderImg} alt="Portfolio" width="100%" className={headerBigStyle}/>
            <SplineBackground />
        </div>
    );
}

import LogoImg from "../../public/logo.svg";

export default function Logo({ScrollTo}) {
    return (
            <button className="fixed top-0 left-0 m-4 p-2 z-50" onClick={() => ScrollTo('top', 'smooth')}>
                <img src={LogoImg} alt="Logo" height="48px" width="48px"/>
            </button>
    );
}
export default function Logo({ScrollTo}) {
    return (
            <button className="fixed top-0 left-0 m-4 p-2 z-50 bg-customColorCard" onClick={() => ScrollTo('top', 'smooth')}>
                <img src="public/logo.svg" alt="Logo" height="24px" width="24px"/>
            </button>
    );
}
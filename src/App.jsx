import { useEffect } from "react";
import Logo from "./components/Logo";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Portfolio from "./components/Portfolio";

export default function App() {

  /* //////////////////////////////////////////////////
  Function to scroll to top or an id
  ////////////////////////////////////////////////// */
  function ScrollTo(where, behavior = 'auto', block = 'center'){
    /* TOP */
    if(where === 'top') {
        window.scrollTo({
            top: 0,
            behavior: behavior,
        });
    }

    /* ID */
    if(where !== 'top' && where) {
        const whereToScroll = document.getElementById(where);
        if (whereToScroll) {
          whereToScroll.scrollIntoView({ behavior: behavior, block: block });
        } 
    }
  }

  /* //////////////////////////////////////////////////
  useEffect scroll to top at component mount
  ////////////////////////////////////////////////// */
  useEffect(() => {
    ScrollTo('top', 'smooth');
  }, []);

  /* ////////////////////////////////////////////////////////////////////////////////////////////////////
  JSX  
  //////////////////////////////////////////////////////////////////////////////////////////////////// */
  return (
    <div className="grid grid-flow-row cursor-cell ">
      <Logo ScrollTo={ScrollTo} />
      <Menu ScrollTo={ScrollTo} />
      <Header />
      <Portfolio />
    </div>
  );
}

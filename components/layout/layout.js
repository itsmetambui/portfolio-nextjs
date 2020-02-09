import React, { useEffect } from "react";
import { withNavigationContext } from "react-awesome-slider/dist/navigation";
import Header from "./Header";
import { initGA, logPageView } from "../../utils/analytics";

import "./Layout.scss";

const Layout = withNavigationContext(({ children, fullpage }) => {
  const { slug } = fullpage.navigation;

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [slug]);

  return (
    <div className="flex flex-col md:flex-row bg-orange-500 h-screen overflow-x-hidden relative z-100 layout">
      <Header />
      <div className="flex-1 flex flex-col relative support-device-orientation">
        <div className="font-body absolute h-full w-full top-0 left-0 text-white">
          {children}
        </div>
      </div>
      <div className="flex-1 flex flex-col relative unsupport-device-orientation">
        <div className="font-body abs-center w-full text-center text-white ">
          <p>Please use Portrait mode for better experience.</p>
          <img
            src="./images/portrait-icon.png"
            alt="portrait"
            className="text-center inline-block"
            style={{ height: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
});

export default Layout;

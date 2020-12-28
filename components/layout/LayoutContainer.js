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
    <div className="relative flex flex-col h-screen overflow-x-hidden bg-orange-500 md:flex-row z-100 layout">
      <Header />
      <div className="relative flex flex-col flex-1 support-device-orientation">
        <div className="absolute top-0 left-0 w-full h-full text-white font-body">
          {children}
        </div>
      </div>
      <div className="relative flex flex-col flex-1 unsupport-device-orientation">
        <div className="w-full text-center text-white font-body abs-center ">
          <p>Please use Portrait mode for better experience.</p>
          <img
            src="./images/portrait-icon.png"
            alt="portrait"
            className="inline-block text-center"
            style={{ height: "2rem" }}
          />
        </div>
      </div>
    </div>
  );
});

export default Layout;

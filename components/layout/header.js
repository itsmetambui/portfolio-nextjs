import React, { useState } from "react";

import LogoLink from "./LogoLink";
import InternalNavs from "./InternalNavs";
import ExternalLinks from "./ExternalLinks";

export default () => {
  const [toggleNav, setToggle] = useState(false);
  const toggleNavHandler = () => setToggle((toggle) => setToggle(!toggle));

  return (
    <header className="flex flex-row justify-between h-auto md:flex-col md:h-screen font-header bg-dark-200">
      <LogoLink />
      <InternalNavs toggle={toggleNav} />
      <ExternalLinks />
      <button className="block m-3 mr-6 sm:hidden" onClick={toggleNavHandler}>
        <i className="text-2xl text-orange-500 fas fa-bars" />
      </button>
    </header>
  );
};

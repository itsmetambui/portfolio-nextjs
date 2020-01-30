import React, { useState } from "react";

import LogoLink from "./LogoLink";
import InternalNavs from "./InternalNavs";
import ExternalLinks from "./ExternalLinks";

export default () => {
  const [toggleNav, setToggle] = useState(false);
  const toggleNavHandler = () => setToggle(toggle => setToggle(!toggle));

  return (
    <header className="flex flex-row justify-between md:flex-col h-auto md:h-screen bg-black font-header bg-dark-200 font-header">
      <LogoLink />
      <InternalNavs toggle={toggleNav} />
      <ExternalLinks />
      <button className="m-3 mr-6 block sm:hidden" onClick={toggleNavHandler}>
        <i className="fas fa-bars text-2xl text-orange-500" />
      </button>
    </header>
  );
};

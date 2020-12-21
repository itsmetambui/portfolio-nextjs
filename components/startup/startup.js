import React from "react";
import AnimatedLogo from "../fullpage/components/AnimatedLogo";

const Startup = () => {
  return (
    <div className="absolute top-0 left-0 flex justify-center w-full h-full items-align bg-dark-100 z-100">
      <div className="w-64 h-64">
        <AnimatedLogo />
      </div>
    </div>
  );
};

export default Startup;

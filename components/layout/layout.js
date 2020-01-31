import React from "react";
import Header from "./header";

const Layout = ({ children }) => (
  <div className="flex flex-col md:flex-row bg-orange-500 min-h-screen overflow-x-hidden relative z-100">
    <Header />
    <div className="flex-1 flex flex-col relative">
      <div className="font-body absolute h-full w-full top-0 left-0 text-white">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;

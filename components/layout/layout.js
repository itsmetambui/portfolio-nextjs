import React from "react";
import Header from "./header";
// import "./layout.scss";
// import Nav from "../nav/nav";

// const Layout = ({ children }) => {
//   return (
//     <>
//       <Nav />
//       <main>{children}</main>
//     </>
//   );
// };

const Layout = ({ children }) => (
  <div className="flex flex-col md:flex-row bg-dark-100 h-screen overflow-hidden relative z-100">
    <Header />
    <div className="flex-1 flex flex-col relative overflow-hidden">
      <div className="font-body absolute h-full w-full top-0 left-0 p-6 md:p-12 text-white">
        {children}
      </div>
    </div>
  </div>
);

export default Layout;

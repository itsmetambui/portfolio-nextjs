import React from "react";
import dynamic from "next/dynamic";
import About from "./About";
const Home = dynamic(() => import("./Home"), { ssr: false }); // Home's using useWindowDimentions which has window, unvailable with ssr

const pageClassnames = "h-full w-full bg-dark-100";

export const media = [
  {
    slug: "",
    className: pageClassnames,
    children: <Home />
  },
  {
    slug: "about",
    className: pageClassnames,
    children: <About />
  }
];

import React from "react";
import dynamic from "next/dynamic";
import "react-awesome-button/dist/themes/theme-c137.css";
import About from "./about";
const Home = dynamic(() => import("./home"), { ssr: false });

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

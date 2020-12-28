import React from "react";
import dynamic from "next/dynamic";

// Home's using useWindowDimentions which has window, unvailable with ssr
const Home = dynamic(() => import("./HomePage"), { ssr: false });
const Skills = dynamic(() => import("./SkillsPage"), { ssr: false });
const Works = dynamic(() => import("./WorksPage"), { ssr: false });
import About from "./AboutPage";
import Contact from "./ContactPage";

const pageClassnames = "h-full w-full bg-dark-100";

export const media = [
  {
    slug: "",
    className: pageClassnames,
    children: <Home />,
  },
  {
    slug: "works",
    className: pageClassnames,
    children: <Works />,
  },
  {
    slug: "about",
    className: pageClassnames,
    children: <About />,
  },
  {
    slug: "skills",
    className: pageClassnames,
    children: <Skills />,
  },
  {
    slug: "contact",
    className: pageClassnames,
    children: <Contact />,
  },
];

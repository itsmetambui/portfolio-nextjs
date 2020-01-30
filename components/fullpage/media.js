import React from "react";
import dynamic from "next/dynamic";
import "react-awesome-button/dist/themes/theme-c137.css";
import "./fullpage.css";
const Home = dynamic(() => import("./Home"), { ssr: false });
import About from "./About";

export const media = [
  {
    slug: "",
    children: <Home />
  },
  {
    slug: "about",
    children: <About />
  }
];

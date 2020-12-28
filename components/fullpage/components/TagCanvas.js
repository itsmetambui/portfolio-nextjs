/* eslint jsx-a11y/anchor-is-valid: 0 */
import React, { useEffect } from "react";
import "../../../public/js/tag-canvas.min";

const TagCanvas = () => {
  useEffect(() => {
    try {
      window.TagCanvas.Start("skillChartCanvas", "tags", options);
    } catch (e) {
      document.getElementById("skillChartContainer").style.display = "none";
    }
  }, []);

  const tags = items.map((item, idx) => {
    return (
      <li key={idx}>
        <a>{item}</a>
      </li>
    );
  });

  return (
    <>
      <div id="skillChartContainer">
        <canvas
          id="skillChartCanvas"
          className="mx-auto"
          width={getSize()}
          height={getSize()}
        >
          <p>Tag Canvas</p>
        </canvas>
      </div>
      <div id="tags" className="hidden">
        <ul>{tags}</ul>
      </div>
    </>
  );
};

export default TagCanvas;

const options = {
  textColour: "#F7FAFC",
  outlineThickness: 0.5,
  outlineColour: "#fe0853",
  maxSpeed: 0.04,
  freezeActive: true,
  shuffleTags: true,
  shape: "sphere",
  zoom: 1,
  noSelect: true,
  textFont: "Sourcecodepro",
  pinchZoom: true,
  freezeDecel: true,
  fadeIn: 3000,
  initial: [0.3, -0.1],
  depth: 0.8,
};

const items = [
  "HTML 5",
  "CSS 3",

  "JavaScript",
  "Typescript",
  "Angular JS",
  "React",
  "Redux",
  "Redux-saga",
  "react-query",

  "Node JS",
  "Express",
  "Jest",
  "Nestjs",
  "Nextjs",
  "Feathersjs",
  "Java",
  "Spring",

  "PostgreSQL",
  "Mongo DB",

  "Elasticsearch",
  "Lambda",
  "Cognito",
  "Amplify",
  "Appsync",
  "Jenkins",
  "CircleCI",
  "Docker",
];

const getSize = () => {
  let w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName("body")[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

  if (x < 960) {
    return 300;
  } else {
    return 700;
  }
};

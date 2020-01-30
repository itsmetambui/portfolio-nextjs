import React, { useEffect } from "react";
import gsap from "gsap";

export default () => {
  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 });
    const left = document.querySelector(".left");
    const leftLength = left.getTotalLength();
    const right = document.querySelector(".right");
    const rightLength = right.getTotalLength();

    tl.set(".left", {
      "stroke-dasharray": leftLength,
      "stroke-dashoffset": -leftLength
    })
      .set(".right", {
        "stroke-dasharray": rightLength,
        "stroke-dashoffset": -rightLength
      })
      .to(".stroke", { duration: 0.1, ["stroke-opacity"]: 1 })
      .to(".left", { duration: 1, "stroke-dashoffset": 0 })
      .to(".right", { duration: 1, "stroke-dashoffset": 0 }, "-=0.5")
      .from(".fill", { duration: 1, "fill-opacity": 0 })
      .to(".stroke", { duration: 1, opacity: 0 }, "-=1");
  }, []);

  return (
    <svg
      className="logo"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 400 400"
      width="100%"
      height="100%"
      style={{ transform: "rotate(-10deg)" }}
    >
      <defs>
        <path
          d="M6.67 139.12L123.08 125L131.93 350L223.97 325L211.09 50L0 75L6.67 139.12Z"
          id="atbjWaC8E"
          className="path left"
        ></path>
        <path
          d="M184.26 369.85L275 348.48L263.68 142.9L400 110.69L400 31.62L163.68 87.26L184.26 369.85Z"
          id="c4Y5kzd5Yo"
          className="path right"
        ></path>
        <filter id="dropshadow" height="130%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
          <feOffset dx="-4" dy="0" result="offsetblur" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.5" />
          </feComponentTransfer>
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <g>
        <g>
          <g>
            <use
              href="#atbjWaC8E"
              opacity="1"
              fill="#02fdd8"
              fillOpacity="1"
              className="fill"
              style={{ filter: "url(#dropshadow)" }}
            ></use>
            <g>
              <use
                href="#atbjWaC8E"
                opacity="1"
                fillOpacity="0"
                stroke="#adadad"
                strokeWidth="2"
                strokeOpacity="0"
                className="stroke"
              ></use>
            </g>
          </g>
          <g>
            <use
              href="#c4Y5kzd5Yo"
              opacity="1"
              fill="#ff7400"
              fillOpacity="1"
              className="fill"
              style={{ filter: "url(#dropshadow)" }}
            ></use>
            <g>
              <use
                href="#c4Y5kzd5Yo"
                opacity="1"
                fillOpacity="0"
                stroke="#adadad"
                strokeWidth="2"
                strokeOpacity="0"
                className="stroke"
              ></use>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

import React, { useRef } from "react";
import { useSpring, animated, useChain } from "react-spring";

const LEFT_LENGTH = 990.144775390625;
const RIGHT_LENGTH = 1044.377685546875;

const AnimatedLogo = () => {
  const leftRef = useRef();
  const rightRef = useRef();
  const fillRef = useRef();
  const leftSpring = useSpring({
    strokeDasharray: LEFT_LENGTH,
    strokeDashoffset: 0,
    from: {
      strokeDasharray: LEFT_LENGTH,
      strokeDashoffset: -LEFT_LENGTH,
    },
    config: { duration: 1000 },
    ref: leftRef,
  });
  const rightSpring = useSpring({
    strokeDasharray: RIGHT_LENGTH,
    strokeDashoffset: 0,
    from: {
      strokeDasharray: RIGHT_LENGTH,
      strokeDashoffset: -RIGHT_LENGTH,
    },
    config: { duration: 1000 },
    ref: rightRef,
  });
  const fillSprint = useSpring({
    fillOpacity: 1,
    strokeOpacity: 0,
    from: {
      fillOpacity: 0,
      strokeOpacity: 1,
    },
    config: { duration: 1000 },
    ref: fillRef,
  });

  useChain([leftRef, rightRef, fillRef], [0, 0.5, 1.5]);

  return (
    <div className="relative w-64 h-64">
      <animated.svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 block"
        style={{ transform: "rotate(-10deg)", ...leftSpring, ...fillSprint }}
      >
        <defs>
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
        <path
          fill="#02fdd8"
          stroke="#adadad"
          strokeWidth="2"
          style={{ filter: "url(#dropshadow)" }}
          d="M6.67 139.12L123.08 125L131.93 350L223.97 325L211.09 50L0 75L6.67 139.12Z"
        ></path>
      </animated.svg>
      <animated.svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 400 400"
        width="100%"
        height="100%"
        className="absolute top-0 left-0 block"
        style={{ transform: "rotate(-10deg)", ...rightSpring, ...fillSprint }}
      >
        <defs>
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
        <path
          fill="#ff7400"
          stroke="#adadad"
          strokeWidth="2"
          style={{ filter: "url(#dropshadow)" }}
          d="M184.26 369.85L275 348.48L263.68 142.9L400 110.69L400 31.62L163.68 87.26L184.26 369.85Z"
        ></path>
      </animated.svg>
    </div>
  );
};

export default AnimatedLogo;

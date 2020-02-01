import React, { useEffect } from "react";
import Typist from "react-typist";

import Wrapper from "../components/ContentWrapper";
import AnimatedLogo from "../components/AnimatedLogo";
import HeaderWrapper from "../components/HeaderWrapper";
import useDimensions from "../../../hooks/useWindowDimensions";

export default () => {
  const { isSmBreakpoint, isMdBreakpoint, isLgBreakpoint } = useDimensions();
  const logoSize = isSmBreakpoint
    ? 400
    : isMdBreakpoint
    ? 500
    : isLgBreakpoint
    ? 550
    : 700;

  return (
    <Wrapper>
      <div className="flex-1 flex flex-row justify-center items-center relative">
        <div className="z-10 flex-1 lg:pl-8">
          <HeaderWrapper
            className="mb-4"
            endTagPosition={isSmBreakpoint ? "end" : "inline"}
          >
            <div className="font-header text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all">
              <Typist startDelay={2500} cursor={{ hideWhenDone: true }}>
                Hi,
                <br />
                I'm{" "}
                <span>
                  <img
                    src="/images/logo.png"
                    alt="logo letter"
                    className="h-10 w-10 md:h-20 md:w-20 inline-block"
                  ></img>
                </span>
                am,
                <br />
                fullstack developer.
              </Typist>
            </div>
          </HeaderWrapper>
          <div className="text-xs md:text-sm tracking-wide font-body text-gray-500 font-semibold">
            <Typist startDelay={5000} cursor={{ hideWhenDone: true }}>
              <span> React / Node /</span>
              <span> Mongo / Postgres /</span>
              <span> AWS / Docker / CI, CD ...</span>
            </Typist>
          </div>
        </div>
        <div
          className="absolute abs-center -mt-16 ml-16 md:left-auto md:right-8 md:ml-0 md:mt-0 lg:right-16 transition-all"
          style={{
            width: logoSize,
            height: logoSize,
            transform: !isMdBreakpoint ? "translate(0, -50%)" : ""
          }}
        >
          <AnimatedLogo></AnimatedLogo>
        </div>
      </div>
    </Wrapper>
  );
};

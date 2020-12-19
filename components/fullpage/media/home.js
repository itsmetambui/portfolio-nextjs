import React from "react";
import Typist from "react-typist";
import cn from "classnames";

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
      <div className="relative flex flex-row items-center justify-center flex-1">
        <div className="z-10 flex-1 lg:pl-8">
          <HeaderWrapper
            className="mb-4"
            endTagPosition={isSmBreakpoint ? "end" : "inline"}
          >
            <div className="text-2xl font-extrabold leading-tight transition-all font-header sm:text-4xl md:text-5xl lg:text-5xl">
              <Typist startDelay={500} cursor={{ hideWhenDone: true }}>
                Hi, I'm{" "}
                <span>
                  <img
                    src="/images/logo.png"
                    alt="logo letter"
                    className="inline-block w-10 h-10 md:h-20 md:w-20"
                  ></img>
                </span>
                am,
                <br />
                fullstack developer.
              </Typist>
            </div>
          </HeaderWrapper>
          <div className="text-xs font-normal tracking-wide text-gray-500 md:text-sm font-body">
            <Typist startDelay={2000} cursor={{ hideWhenDone: true }}>
              <span> React / Node /</span>
              <span> Mongo / Postgres /</span>
              <span> AWS / Docker / CI, CD ...</span>
            </Typist>
          </div>
          <a
            className={cn(
              "inline-block uppercase text-orange-500 rounded border border-orange-500 text-xs px-6 py-3 my-3 transition-all",
              "hover:bg-orange-500 hover:text-gray-200",
              "md:px-5 md:my-5 md:text-sm",
              "absolute bottom-16 font-sourcecode"
            )}
            href="https://drive.google.com/file/d/1L0Nv0RYt-Oya-jT9uUv1DP3-CwZWa1y9/view?usp=sharing"
            target="_blank"
          >
            Download resume
          </a>
        </div>
        <div
          className="absolute ml-16 -mt-16 transition-all abs-center md:left-auto md:right-8 md:ml-0 md:mt-0 lg:right-16"
          style={{
            width: logoSize,
            height: logoSize,
            transform: !isMdBreakpoint ? "translate(0, -50%)" : "",
          }}
        >
          <AnimatedLogo></AnimatedLogo>
        </div>
      </div>
    </Wrapper>
  );
};

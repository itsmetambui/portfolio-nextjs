import React, { useEffect, useState } from "react";
import Typist from "react-typist";
import cn from "classnames";
import format from "date-fns/format";
import { Link } from "react-awesome-slider/dist/navigation";

import Wrapper from "../components/ContentWrapper";
import AnimatedLogo from "../components/AnimatedLogo";
import HeaderWrapper from "../components/HeaderWrapper";
import useDimensions from "../../../hooks/useWindowDimensions";

const GMT_7 = "Asia/Jakarta";
const convertTZ = (date) => {
  const time = new Date(
    (typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {
      timeZone: GMT_7,
    })
  );
  return format(time, "h:mm a");
};

export default () => {
  const { isSmBreakpoint, isMdBreakpoint, isLgBreakpoint } = useDimensions();
  const [currentTime, setCurrentTime] = useState(convertTZ(new Date()));
  const logoSize = isSmBreakpoint
    ? 400
    : isMdBreakpoint
    ? 500
    : isLgBreakpoint
    ? 550
    : 700;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(convertTZ(new Date()));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Wrapper>
      <div className="relative flex flex-row items-center justify-center flex-1">
        <div className="z-10 flex-1 lg:pl-8">
          <HeaderWrapper
            className="mb-8"
            endTagPosition={isSmBreakpoint ? "end" : "inline"}
          >
            <div className="text-2xl font-extrabold leading-tight transition-all font-header sm:text-4xl md:text-5xl lg:text-5xl">
              <Typist startDelay={4500} cursor={{ hideWhenDone: true }}>
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
          <div className="text-xs font-medium tracking-wide text-white md:text-sm font-sourcecode">
            <Typist startDelay={6000} cursor={{ hideWhenDone: true }}>
              <span>
                <i className="mr-1 fal fa-map-marker" />{" "}
                {`Can Tho, Vietnam - ${currentTime}`}
              </span>
            </Typist>
          </div>
          <div className="text-xs font-medium tracking-wide text-gray-300 md:text-sm font-sourcecode">
            <Typist startDelay={6000} cursor={{ hideWhenDone: true }}>
              <span>
                <i className="mr-1 fal fa-certificate" />
              </span>
              <span> React / React Native /</span>
              <span> Node / Mongo / Postgres /</span>
              <span> AWS / CI, CD ...</span>
            </Typist>
          </div>
          <Link
            className={cn(
              "inline-block uppercase text-white bg-orange-500 rounded border border-orange-600 text-xs px-6 py-3 my-3 transition-all",
              "hover:bg-orange-600 hover:text-gray-200",
              "md:px-5 md:my-5 md:text-sm",
              "absolute bottom-16 font-sourcecode"
            )}
            href="/works"
          >
            <span>
              My works <i className="ml-2 fal fa-hand-point-down" />
            </span>
          </Link>
        </div>
        <div
          className="absolute ml-16 -mt-16 transition-all abs-center md:left-auto md:right-8 md:ml-0 md:mt-0 lg:right-16"
          style={{
            width: logoSize,
            height: logoSize,
            transform: !isMdBreakpoint ? "translate(0, -50%)" : "",
          }}
        >
          {/* <AnimatedLogo></AnimatedLogo> */}
        </div>
      </div>
    </Wrapper>
  );
};

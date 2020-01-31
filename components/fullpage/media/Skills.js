import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import TagCanvas from "../components/TagCanvas";

export default () => {
  return (
    <Wrapper>
      <div className="flex-1 flex flex-col items-start md:flex-row md:items-center justify-center relative lg:pl-8 w-full">
        <div className="w-full md:w-1/2">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="font-header text-3xl sm:text-4xl md:text-5xl text-orange-600 font-bold leading-tight transition-all">
                My skills.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="text-gray-300 font-body font-light text-xs md:text-sm tracking-wide leading-relaxed">
            <p className="mb-4">
              Main area of my expertise is front end development and everything
              related with web development. HTML, CSS, JS (ES5, ES6), building
              single page web applications with Angular, React...
            </p>
            <p className="mb-4">
              Often I work as a full-stack developer, experienced with backend
              development with Java, Node, and frameworks like Express, Nestjs,
              and Spring.
            </p>

            <p className="mb-4">
              I have also some experience working with databases like
              PostgreSQL, MongoBD.
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2">
          <TagCanvas />
        </div>
      </div>
    </Wrapper>
  );
};

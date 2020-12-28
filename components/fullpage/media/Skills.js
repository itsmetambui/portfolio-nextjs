import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import TagCanvas from "../components/TagCanvas";

export default () => {
  return (
    <Wrapper>
      <div className="relative flex flex-col items-start justify-center flex-1 w-full md:flex-row md:items-center lg:pl-8">
        <div className="w-full md:w-1/2">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="text-3xl font-extrabold leading-tight text-orange-600 transition-all font-header">
                My skills.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="hidden text-xs font-normal leading-relaxed tracking-wide text-gray-300 md:block font-header md:text-sm">
            <p className="mb-4">
              Main area of my expertise is front end development and everything
              related with web development. HTML, CSS, JS, TS, building single
              page web applications with React, Angular...
            </p>
            <p className="mb-4">
              I often work as a full-stack developer, experienced with backend
              development with Node, Java, and frameworks like Express, Nestjs,
              Nextjs.
            </p>

            <p className="mb-4">
              I also have experience working with databases like PostgreSQL,
              MongoDB, CI/CD tools and Docker.
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

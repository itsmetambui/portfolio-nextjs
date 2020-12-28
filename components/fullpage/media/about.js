import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import AboutCharacter from "../components/AboutCharacter";

export default () => {
  return (
    <Wrapper>
      <div className="relative flex flex-col items-start justify-center w-full md:flex-row md:items-center">
        <div className="hidden w-full sm:block">
          <AboutCharacter></AboutCharacter>
        </div>
        <div className="relative w-full md:pl-12">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="text-3xl font-extrabold leading-tight text-orange-600 transition-all font-header">
                About me.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="text-xs font-light leading-relaxed tracking-wide text-gray-300 font-body md:text-sm">
            <p className="mb-4">
              I enjoy writing beautiful code, code that can be easily understood
              by future developers. With the help of Prettier, Eslint, Husky...,
              I can make sure my code meet those standards.
            </p>
            <p className="mb-4">
              I'm a TDD practitioner, I love that I can make changes without any
              fear, knowing TDD will give me a fast feedback loop and be my
              safety net.
            </p>
            <p className="mb-4">
              I like shipping things. Whether it is a bug fix or a feature, I
              realized that every line of code is an opportunity to make a
              user’s experience better. That will not be feasible without CI/CD.
            </p>
            <p className="mb-4">
              I have experience working with remote teams and understand the
              communication needs and dynamics of remote team environments.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

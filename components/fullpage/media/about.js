import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import Testimonial from "../components/Testimonial";

const testimonials = [
  {
    name: "David Veszelovszki",
    image: "/images/david-thumb.jpeg",
    rating: 5,
    rewiew:
      "A++ freelancer, highly recommended, would hire again! I wish you great jobs on Upwork Tam!"
  },
  {
    name: "Dmytro Ulyanets",
    image: "/images/dima-thumb.jpeg",
    rating: 5,
    rewiew:
      "A+++ freelancer, highly recommended, would hire again! I wish you great jobs on Upwork Tam!"
  },
  {
    name: "Vipul Hadiya",
    initial: "VH",
    rating: 5,
    rewiew:
      "Tam is like a Node.Js wizard. He solved my problem within an hour. His availability and communication is really fast and regular. He is more than a programmer. Thank you Tam."
  }
];

export default () => {
  return (
    <Wrapper>
      <div className="flex-1 flex flex-col items-start md:flex-row md:items-center justify-center relative lg:pl-8 w-full">
        <div className="w-full md:w-1/2">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="font-header text-3xl sm:text-4xl md:text-5xl text-orange-600 font-bold leading-tight transition-all">
                About me.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="text-gray-300 font-body font-light text-xs md:text-sm tracking-wide leading-relaxed">
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
        <div className="relative w-full md:w-1/2">
          {/* {testimonials.map(item => {
            return <Testimonial key={item.name} {...item} />;
          })} */}
        </div>
      </div>
    </Wrapper>
  );
};

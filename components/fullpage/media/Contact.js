import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import MyGoogleMap from "../components/MyGoogleMap";

import "./Contact.scss";

export default () => {
  return (
    <Wrapper>
      <div className="relative flex flex-col items-start justify-center flex-1 w-full md:flex-row md:items-center lg:pl-8">
        <div className="fixed bottom-0 left-0 z-10 w-full px-12 pb-8 rounded shadow-lg flex-1/2 md:w-1/2 md:py-8 contact">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="text-3xl font-bold leading-tight text-orange-600 uppercase transition-all font-header">
                Contact me.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="text-xs font-light leading-relaxed tracking-wide text-gray-300 font-body md:text-sm">
            <p className="mb-4">
              I am interested in remote and freelance opportunities, especially
              ambitious or large projects. However, if you have other request or
              question, don’t hesitate to contact me.
            </p>
            <form
              method="POST"
              action="https://formspree.io/itsmetambui@gmail.com"
            >
              <div>
                <div className="inputWrapper">
                  <input type="text" name="name" placeholder="Name" />
                  <span />
                </div>
                <div className="inputWrapper">
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                  />
                  <span />
                </div>
              </div>
              <div>
                <div className="inputWrapper">
                  <input type="text" name="subject" placeholder="Subject" />
                  <span />
                </div>
              </div>
              <div>
                <div className="inputWrapper">
                  <textarea
                    type="text"
                    required
                    name="message"
                    placeholder="Message"
                  />
                  <span />
                </div>
              </div>
              <button className="submit" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
        <div className="flex-1 h-full">
          <MyGoogleMap />
        </div>
      </div>
    </Wrapper>
  );
};

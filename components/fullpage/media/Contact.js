import React from "react";

import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import MyGoogleMap from "../components/MyGoogleMap";

import "./Contact.scss";

export default () => {
  return (
    <Wrapper>
      <div className="flex-1 flex flex-col items-start md:flex-row md:items-center justify-center relative lg:pl-8 w-full">
        <div className="flex-1/2 w-full md:w-1/4">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="font-header text-3xl sm:text-4xl md:text-5xl text-orange-600 font-bold leading-tight transition-all">
                Contact me.
              </h1>
            </HeaderWrapper>
          </div>
          <div className="text-gray-300 font-body font-light text-xs md:text-sm tracking-wide leading-relaxed">
            <p className="mb-4">
              I am interested in remote and freelance opportunities, especially
              ambitious or large projects. However, if you have other request or
              question, don’t hesitate to contact me.
            </p>
            <form
              method="POST"
              action="https://formspree.io/blvtam4494@gmail.com"
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
        <div className="relative flex-1 h-full">
          <div className="info">
            <p>Bui Le Vu Tam,</p>
            <p>Vietnam,</p>
            <p>223 Xuan Thuy St., Can Tho.</p>
            <br />
            <p>
              <span>@</span>: itsmetambui@gmail.com
            </p>
          </div>
          <MyGoogleMap />
        </div>
      </div>
    </Wrapper>
  );
};

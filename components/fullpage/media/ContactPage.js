import React from "react";
import axios from "axios";
import Wrapper from "../components/ContentWrapper";
import HeaderWrapper from "../components/HeaderWrapper";
import MyGoogleMap from "../components/MyGoogleMap";

import "./Contact.scss";

export default () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [message, setMessage] = React.useState("");

  const postMessage = async (event) => {
    event.preventDefault();

    const data = {
      text: `
      Name: ${name}
      Email: ${email}
      Subject: ${subject}
      Message: ${message}`,
    };

    await axios.post("/api/message", {
      data,
    });
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    alert("Message sent successfully");
  };

  return (
    <Wrapper>
      <div className="relative flex flex-col items-start justify-center flex-1 w-full md:flex-row md:items-center lg:pl-8">
        <div className="fixed bottom-0 left-0 z-10 w-full px-12 pb-8 rounded shadow-lg flex-1/2 md:w-1/2 md:py-8 contact">
          <div className="z-10">
            <HeaderWrapper className="mb-4" endTagPosition="end">
              <h1 className="text-3xl font-extrabold leading-tight text-orange-600 transition-all font-header">
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
            <form onSubmit={postMessage}>
              <div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <span />
                </div>
                <div className="inputWrapper">
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <span />
                </div>
              </div>
              <div>
                <div className="inputWrapper">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
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
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
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

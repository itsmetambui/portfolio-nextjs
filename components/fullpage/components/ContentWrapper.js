import React from "react";

const Wrapper = props => {
  return (
    <div className="h-full flex flex-col p-6 pt-8 md:p-12">
      <span className="font-tags text-gray-700 hidden md:inline-block">
        &nbsp;&nbsp;&lt;body&gt;
      </span>
      <div className="flex-1 flex">{props.children}</div>
      <span className="font-tags text-gray-700  hidden md:inline-block">
        &nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
    </div>
  );
};

export default Wrapper;

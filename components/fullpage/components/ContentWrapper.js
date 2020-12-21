import React from "react";

const Wrapper = (props) => {
  return (
    <div className="flex flex-col h-full p-4 md:p-12">
      <span className="hidden text-gray-700 font-tags md:inline-block">
        &nbsp;&nbsp;&lt;body&gt;
      </span>
      <div className="flex flex-1">{props.children}</div>
      <span className="hidden text-gray-700 font-tags md:inline-block">
        &nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
    </div>
  );
};

export default Wrapper;

import React from "react"

const Wrapper = props => {
  return (
    <div className="h-full flex flex-col">
      <span className="font-tags text-gray-700">&nbsp;&nbsp;&lt;body&gt;</span>
      <div className="flex-1 flex">{props.children}</div>
      <span className="font-tags text-gray-700">
        &nbsp;&nbsp;&lt;/body&gt;
        <br />
        &lt;/html&gt;
      </span>
    </div>
  )
}

export default Wrapper

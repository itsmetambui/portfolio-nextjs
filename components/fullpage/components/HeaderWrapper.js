import React from "react"
import cn from "classnames"

const HeaderWrapper = ({ className, children, endTagPosition }) => {
  const tagsClassname = "font-tags text-gray-700"
  return (
    <div className={cn(className)}>
      <span className={tagsClassname}>&lt;h1&gt;</span>
      <div
        className={cn("flex", {
          "flex-col": endTagPosition === "end",
          "items-start": endTagPosition === "end",
          "items-end": endTagPosition === "inline",
        })}
      >
        <div className="mr-4">{children}</div>
        <span className={cn(tagsClassname, "flex-1")}>&lt;/h1&gt;</span>
      </div>
    </div>
  )
}

export default HeaderWrapper

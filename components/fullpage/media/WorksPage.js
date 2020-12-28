import React from "react";

import Wrapper from "../components/ContentWrapper";
import WorksWall from "../components/WorksWall";

export default () => {
  return (
    <div className="flex-1 flex flex-col items-start md:flex-row md:items-center justify-center relative w-full">
      <WorksWall />
    </div>
  );
};

import React from "react";
import {
  withNavigationContext,
  Link
} from "react-awesome-slider/dist/navigation";

export default withNavigationContext(({ fullpage }) => {
  const { slug } = fullpage.navigation;

  return (
    <Link
      href="/"
      className="bg-dark-300 h-16 w-16 flex flex-col justify-center items-center"
    >
      <img src="/images/logo.png" className="h-8" alt="Logo" />
      <span className="text-gray-300 text-xs font-semibold">Tam</span>
    </Link>
  );
});

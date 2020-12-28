import React from "react";
import {
  withNavigationContext,
  Link,
} from "react-awesome-slider/dist/navigation";
import cn from "classnames";
import "./InternalNavs.scss";
import { useStartup } from "../fullpage/components/StartupProvider";

const navigationItems = [
  {
    icon: "fal fa-home",
    text: "Home",
    route: "",
  },
  {
    icon: "fal fa-book",
    text: "Works",
    route: "works",
  },
  {
    icon: "fal fa-user",
    text: "About",
    route: "about",
  },
  {
    icon: "fal fa-fire",
    text: "Skills",
    route: "skills",
  },
  {
    icon: "fal fa-envelope",
    text: "Contact",
    route: "contact",
  },
];

export default withNavigationContext(({ toggle, fullpage, ...rest }) => {
  const { slug } = fullpage.navigation;
  const [{ startupLoaded }] = useStartup();

  const links = navigationItems.map((item) => {
    return startupLoaded ? (
      <Link
        key={item.text}
        href={item.route}
        className={cn(
          "link",
          "text-gray-700 relative flex justify-center items-center h-16 w-16",
          { "text-orange-600": slug === item.route }
        )}
      >
        <i
          className={cn(item.icon, "icon", "abs-center text-xl transition-all")}
        />
        <span className={cn("text", "uppercase text-center transition-all")}>
          {item.text}
        </span>
      </Link>
    ) : (
      <div
        key={item.text}
        className={cn(
          "link",
          "text-gray-700 relative flex justify-center items-center h-16 w-16 cursor-not-allowed"
        )}
      >
        <i
          className={cn(item.icon, "icon", "abs-center text-xl transition-all")}
        />
        <span className={cn("text", "uppercase text-center transition-all")}>
          {item.text}
        </span>
      </div>
    );
  });
  return (
    <nav
      className={cn(
        { show: toggle },
        "absolute sm:relative sm:left-auto sm:top-auto flex flex-row md:flex-col justify-around transition-all",
        "w-full sm:w-auto h-auto md:h-64 top-16 md:left-0 md:top-0 bg-dark-200",
        "z-10",
        "nav"
      )}
    >
      {links}
    </nav>
  );
});

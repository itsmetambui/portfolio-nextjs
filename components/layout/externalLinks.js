import React from "react";

const navigationItems = [
  {
    icon: "fab fa-linkedin-in",
    link: "https://www.linkedin.com/in/tam-bui-a52112174/"
  },
  {
    icon: "fab fa-twitter",
    link: "https://twitter.com/itsmetambui"
  },
  {
    icon: "fab fa-github-alt",
    link: "https://github.com/itsmetambui"
  }
];

export default () => {
  const links = navigationItems.map(item => {
    return (
      <li key={item.link} className="text-center p-1">
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-orange-500 transition-all"
        >
          <i className={item.icon} />
        </a>
      </li>
    );
  });
  return (
    <ul className="hidden sm:flex flex-row justify-around items-center pr-2 md:flex-col md:w-full md:pb-8">
      {links}
    </ul>
  );
};

import React, { useEffect } from "react";
import "./WorksWall.scss";

export default () => {
  useEffect(() => {
    handleMagicWallLoaded();
  }, []);

  const handleMagicWallLoaded = () => {
    $(".magicwall").magicWall({
      maxItemHeight: 300,
      maxItemWidth: 500,
      breakpoints: "2000,1200,800,640,480",
      options_2000: {
        columnsCount: 4,
        rowsCount: 3
      },
      options_1200: {
        columnsCount: 3,
        rowsCount: 3
      },
      options_800: {
        columnsCount: 3,
        rowsCount: 2
      },
      options_640: {
        columnsCount: 2,
        rowsCount: 3
      },
      options_480: {
        columnsCount: 2,
        rowsCount: 3
      }
    });
  };

  return (
    <div className="h-full w-full">
      <div id="demo" className="magicwall" data-delay="3000">
        <ul className="magicwall-grid">
          <li data-thumb="./images/works/p-1.png">
            <div className="magicwall-content text-lg">
              <p className="magicwall-links shadow-sm text-gray-700">
                <a className="mx-2 hover:text-gray-800">
                  <i className="fal fa-eye" />
                </a>
                <a className="mx-2 hover:text-gray-800">
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

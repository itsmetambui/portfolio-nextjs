import React, { useEffect } from "react";
import { Link } from "react-awesome-slider/dist/navigation";
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
        rowsCount: 3,
      },
      options_1200: {
        columnsCount: 3,
        rowsCount: 3,
      },
      options_800: {
        columnsCount: 3,
        rowsCount: 2,
      },
      options_640: {
        columnsCount: 2,
        rowsCount: 3,
      },
      options_480: {
        columnsCount: 2,
        rowsCount: 3,
      },
    });
  };

  return (
    <div className="w-full h-full">
      <div className="magicwall" data-delay="3000">
        <ul className="magicwall-grid">
          <li data-thumb="./images/works/buildweb.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <Link className="mx-2 hover:text-gray-800" href="contact">
                  <i className="fal fa-envelope" />
                </Link>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/wizer.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://wizer-training.com/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/trillio.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://tb-trillio.now.sh/"
                >
                  <i className="fal fa-eye" />
                </a>
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://github.com/itsmetambui/trillio"
                >
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/natours.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://tb-natours.now.sh/"
                >
                  <i className="fal fa-eye" />
                </a>
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://github.com/itsmetambui/natours"
                >
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/ilovelamp.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://tb-ilovelamp.now.sh/"
                >
                  <i className="fal fa-eye" />
                </a>
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://github.com/itsmetambui/react-demo-store"
                >
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/spacexplorer.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://spacexplorer.now.sh/"
                >
                  <i className="fal fa-eye" />
                </a>
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://github.com/itsmetambui/spacexplorer"
                >
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/vutachat.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://vutachat.herokuapp.com/"
                >
                  <i className="fal fa-eye" />
                </a>
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://github.com/itsmetambui/vutachat"
                >
                  <i className="fab fa-github-alt" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/easierchef.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://easierchef.com/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/codeberry.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://codeberryschool.com/vi/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/dep.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://dep.com.vn/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/hireme.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <Link className="mx-2 hover:text-gray-800" href="contact">
                  <i className="fal fa-envelope" />
                </Link>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/spacestep.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="http://spacestep.ca/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/tambui.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://itsmetambui.now.sh/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/42race.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://web.42race.com/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
          <li data-thumb="./images/works/42class.png">
            <div className="text-lg magicwall-content">
              <p className="text-gray-700 shadow-sm magicwall-links">
                <a
                  className="mx-2 hover:text-gray-800"
                  target="_blank"
                  href="https://class.42race.com/"
                >
                  <i className="fal fa-eye" />
                </a>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

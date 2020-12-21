import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./enhanced-animation.scss";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "../startup/StartUp";

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
  const isFirstLoad = useRef(true);

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={4000}
      animation="cubeAnimation"
      buttons={false}
      fillParent
      mobileTouch={false}
      onTransitionEnd={() => {
        // HANDLE THE PAGE ELEMENTS ANIMATION ON FIRST TRANSITION END
        if (isFirstLoad.current === true) {
          isFirstLoad.current = false;
          document.querySelector("body").classList.add("animated");
          document.querySelector("body").classList.add("visible");
        }
      }}
      media={media}
    />
  );
});

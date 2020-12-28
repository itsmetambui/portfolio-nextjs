import React, { useRef } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "./enhanced-animation.scss";
import {
  withNavigationHandlers,
  withNavigationContext,
} from "react-awesome-slider/dist/navigation";
import { media } from "./media";
import Startup from "../startup/StartupAnimation";
import { finishStartup, useStartup } from "./components/StartupProvider";

const Slider = withNavigationHandlers(AwesomeSlider);

export default withNavigationContext(({ fullpage }) => {
  const [, dispatch] = useStartup();

  return (
    <Slider
      startupScreen={<Startup />}
      startupDelay={2500}
      animation="cubeAnimation"
      buttons={false}
      fillParent
      mobileTouch={false}
      onTransitionEnd={() => finishStartup(dispatch)}
      media={media}
    />
  );
});

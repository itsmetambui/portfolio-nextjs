import React, { useEffect, useRef, useState } from "react";
import "./ProfileImage.scss";

const ProfileImage = () => {
  const photoContainerRef = useRef(null);
  const containerRef = useRef(null);
  const illustrationImageRef = useRef(null);

  useEffect(() => {
    console.log("run effect");
    const imageCanvas = document.createElement("canvas");
    const imageCanvasContext = imageCanvas.getContext("2d");
    const lineCanvas = document.createElement("canvas");
    const lineCanvasContext = lineCanvas.getContext("2d");
    const pointLifetime = 1000;
    let points = [];

    if (illustrationImageRef.current.complete) {
      start();
    } else {
      illustrationImageRef.current.onload = start;
    }

    function start() {
      imageCanvas.addEventListener("mousemove", onMouseMove);
      imageCanvas.addEventListener("touchmove", onTouchMove);
      window.addEventListener("resize", resizeCanvases);
      containerRef.current.appendChild(imageCanvas);
      resizeCanvases();
      tick();
    }

    function onMouseMove(event) {
      var rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: event.pageX - rect.left,
        y: event.pageY - rect.top,
      });
    }

    function onTouchMove(event) {
      var touch = event.targetTouches[0];
      var rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: touch.pageX - rect.left,
        y: touch.pageY - rect.top,
      });
    }

    function resizeCanvases() {
      imageCanvas.width = lineCanvas.width =
        photoContainerRef.current.offsetWidth;
      imageCanvas.height = lineCanvas.height =
        photoContainerRef.current.offsetHeight;
    }

    function tick() {
      // Remove old points
      points = points.filter(function (point) {
        var age = Date.now() - point.time;
        return age < pointLifetime;
      });
      drawLineCanvas();
      drawImageCanvas();
      requestAnimationFrame(tick);
    }

    function drawLineCanvas() {
      var minimumLineWidth = 80;
      var maximumLineWidth = 80;
      var lineWidthRange = maximumLineWidth - minimumLineWidth;
      var maximumSpeed = 100;
      lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
      lineCanvasContext.lineCap = "round";
      for (var i = 1; i < points.length; i++) {
        var point = points[i];
        var previousPoint = points[i - 1];
        // Change line width based on speed
        var distance = getDistanceBetween(point, previousPoint);
        var speed = Math.max(0, Math.min(maximumSpeed, distance));
        var percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
        lineCanvasContext.lineWidth =
          minimumLineWidth + percentageLineWidth * lineWidthRange;
        // Fade points as they age
        var age = Date.now() - point.time;
        var opacity = (pointLifetime - age) / pointLifetime;
        lineCanvasContext.strokeStyle = "rgba(0, 0, 0, " + opacity + ")";
        lineCanvasContext.beginPath();
        lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
        lineCanvasContext.lineTo(point.x, point.y);
        lineCanvasContext.stroke();
      }
    }

    function getDistanceBetween(a, b) {
      return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    }

    function drawImageCanvas() {
      if (document.querySelector(".drawCanvas") != null) {
        imageCanvas.width = document.querySelector(".drawCanvas").offsetWidth;
        imageCanvas.height = document.querySelector(".drawCanvas").offsetHeight;
      }
      // Emulate background-size: cover
      var width = imageCanvas.width;
      var height =
        (imageCanvas.width / illustrationImageRef.current.naturalWidth) *
        illustrationImageRef.current.naturalHeight;
      if (height < imageCanvas.height) {
        width =
          (imageCanvas.height / illustrationImageRef.current.naturalHeight) *
          illustrationImageRef.current.naturalWidth;
        height = imageCanvas.height;
      }
      imageCanvasContext.clearRect(0, 0, width, height);
      imageCanvasContext.globalCompositeOperation = "source-over";
      imageCanvasContext.drawImage(
        illustrationImageRef.current,
        0,
        0,
        width,
        height
      );
      imageCanvasContext.globalCompositeOperation = "destination-in";
      imageCanvasContext.drawImage(lineCanvas, 0, 0);
    }

    return () => {
      console.log("clean up");
      imageCanvas.removeEventListener("mousemove", onMouseMove);
      imageCanvas.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resizeCanvases);
    };
  }, []);

  return (
    <div ref={photoContainerRef}>
      <div
        className="drawCanvas"
        ref={containerRef}
        style={{
          backgroundImage: `url(https://www.joaobairrada.com/assets/images/bairradaFace.png`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          maxHeight: 785,
          paddingBottom: "73%",
          position: "relative",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <img
          ref={illustrationImageRef}
          className="hidden w-full illustrationImage"
          src="https://www.joaobairrada.com/assets/images/illustrationImage.png"
          alt="Tam Bui's illustration"
        />
      </div>
    </div>
  );
};

export default ProfileImage;

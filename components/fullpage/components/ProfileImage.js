import React, { useEffect, useRef, useState } from "react";
import "./ProfileImage.scss";

const ProfileImage = () => {
  const photoContainerRef = useRef(null);
  const containerRef = useRef(null);
  const illustrationImageRef = useRef(null);

  useEffect(() => {
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
      const rect = imageCanvas.getBoundingClientRect();
      points.push({
        time: Date.now(),
        x: event.pageX - rect.left,
        y: event.pageY - rect.top,
      });
    }

    function onTouchMove(event) {
      const touch = event.targetTouches[0];
      const rect = imageCanvas.getBoundingClientRect();
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
      if (!illustrationImageRef.current) {
        return;
      }
      drawLineCanvas();
      drawImageCanvas();
      requestAnimationFrame(tick);
    }

    function drawLineCanvas() {
      const minimumLineWidth = 80;
      const maximumLineWidth = 80;
      const lineWidthRange = maximumLineWidth - minimumLineWidth;
      const maximumSpeed = 100;
      lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
      lineCanvasContext.lineCap = "round";
      for (let i = 1; i < points.length; i++) {
        const point = points[i];
        const previousPoint = points[i - 1];
        const distance = getDistanceBetween(point, previousPoint);
        const speed = Math.max(0, Math.min(maximumSpeed, distance));
        const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
        lineCanvasContext.lineWidth =
          minimumLineWidth + percentageLineWidth * lineWidthRange;
        const age = Date.now() - point.time;
        const opacity = (pointLifetime - age) / pointLifetime;
        lineCanvasContext.strokeStyle = "rgba(0, 0, 0, 1)";
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
      const width = imageCanvas.width;
      const height =
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
      imageCanvas.removeEventListener("mousemove", onMouseMove);
      imageCanvas.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("resize", resizeCanvases);
      cancelAnimationFrame(tick);
    };
  }, []);

  return (
    <div ref={photoContainerRef} className="relative w-full h-full">
      <div className="absolute flex flex-col items-center text-2xl font-bold text-orange-500 transform -rotate-45 top-32 left-32 font-tags">
        <span>Color me</span>
        <i className="fal fa-hand-point-down" />
      </div>

      <div
        className="drawCanvas"
        ref={containerRef}
        className="w-full h-full"
        style={{
          backgroundImage: `url(/images/avatar-grey.png)`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          position: "relative",
          boxSizing: "border-box",
        }}
      >
        <img
          ref={illustrationImageRef}
          className="hidden h-full illustrationImage"
          src="/images/avatar-cartoon.png"
          alt="Tam Bui's illustration"
          style={{
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default ProfileImage;

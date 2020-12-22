import React, { useEffect, useRef } from "react";

const ProfileImage = () => {
  const rootContainerRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const canvasRef = useRef(null);
  const canvasContextRef = useRef(null);
  const lineCanvasRef = useRef(null);
  const lineCanvasContextRef = useRef(null);
  const requestRef = React.useRef();
  const points = useRef([]);

  const animate = () => {
    if (!imageRef.current) {
      return;
    }
    drawLineCanvas();
    drawImageCanvas();
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(function setupCanvases() {
    const canvas = canvasRef.current;
    const canvasContext = canvas.getContext("2d");
    canvasContextRef.current = canvasContext;

    const lineCanvas = document.createElement("canvas");
    const lineCanvasContext = lineCanvas.getContext("2d");
    lineCanvasRef.current = lineCanvas;
    lineCanvasContextRef.current = lineCanvasContext;

    const resizeCanvases = () => {
      canvasRef.current.width = lineCanvasRef.current.width =
        rootContainerRef.current.offsetWidth;
      canvasRef.current.height = lineCanvasRef.current.height =
        rootContainerRef.current.offsetHeight;
    };

    const start = () => {
      animate();
      resizeCanvases();
    };

    if (imageRef.current.complete) {
      start();
    } else {
      imageRef.current.onload = start;
    }

    window.addEventListener("resize", resizeCanvases);
    return () => {
      cancelAnimationFrame(requestRef.current);
      window.removeEventListener("resize", resizeCanvases);
    };
  }, []);

  const drawLineCanvas = () => {
    const lineCanvasContext = lineCanvasContextRef.current;
    const lineCanvas = lineCanvasRef.current;
    const minimumLineWidth = 80;
    const maximumLineWidth = 80;
    const lineWidthRange = maximumLineWidth - minimumLineWidth;
    const maximumSpeed = 100;

    lineCanvasContext.clearRect(0, 0, lineCanvas.width, lineCanvas.height);
    lineCanvasContext.lineCap = "round";

    for (let i = 1; i < points.current.length; i++) {
      const point = points.current[i];
      const previousPoint = points.current[i - 1];
      const distance = getDistanceBetween(point, previousPoint);
      const speed = Math.max(0, Math.min(maximumSpeed, distance));
      const percentageLineWidth = (maximumSpeed - speed) / maximumSpeed;
      lineCanvasContext.lineWidth =
        minimumLineWidth + percentageLineWidth * lineWidthRange;
      lineCanvasContext.strokeStyle = "rgba(0, 0, 0, 1)";
      lineCanvasContext.beginPath();
      lineCanvasContext.moveTo(previousPoint.x, previousPoint.y);
      lineCanvasContext.lineTo(point.x, point.y);
      lineCanvasContext.stroke();
    }
  };

  function getDistanceBetween(a, b) {
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
  }

  function drawImageCanvas() {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const canvasContext = canvasContextRef.current;
    const lineCanvas = lineCanvasRef.current;
    const image = imageRef.current;

    if (container) {
      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;
    }
    // Emulate background-size: cover
    const width = canvas.width;
    const height = (canvas.width / image.naturalWidth) * image.naturalHeight;
    if (height < canvas.height) {
      width = (canvas.height / image.naturalHeight) * image.naturalWidth;
      height = canvas.height;
    }
    canvasContext.clearRect(0, 0, width, height);
    canvasContext.globalCompositeOperation = "source-over";
    canvasContext.drawImage(image, 0, 0, width, height);
    canvasContext.globalCompositeOperation = "destination-in";
    canvasContext.drawImage(lineCanvas, 0, 0);
  }

  const onTouchMove = (event) => {
    const canvas = canvasRef.current;
    const touch = event.targetTouches[0];
    const rect = canvas.getBoundingClientRect();
    points.current = [
      ...points.current,
      {
        x: touch.pageX - rect.left,
        y: touch.pageY - rect.top,
      },
    ];
  };

  const onMouseMove = (event) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    points.current = [
      ...points.current,
      {
        x: event.pageX - rect.left,
        y: event.pageY - rect.top,
      },
    ];
  };

  return (
    <div
      ref={rootContainerRef}
      className="relative w-full h-full"
      style={{
        cursor: "url(/images/cursor-pencil.png), auto",
      }}
    >
      <div className="absolute flex flex-col items-center text-xl font-bold text-orange-500 transform rotate-45 md:text-2xl md:-rotate-45 left-unset top-16 md:top-32 md:left-32 right-16 md:right-unset font-tags">
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
          ref={imageRef}
          className="hidden h-full illustrationImage"
          src="/images/avatar-cartoon.png"
          alt="Tam Bui's illustration"
          style={{
            objectFit: "cover",
          }}
        />
        <canvas
          className="absolute top-0 left-0 w-full"
          ref={canvasRef}
          onTouchMove={onTouchMove}
          onMouseMove={onMouseMove}
        />
      </div>
    </div>
  );
};

export default ProfileImage;

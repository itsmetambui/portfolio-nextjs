import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = () => (
  <img
    style={{
      display: "inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-90%)"
    }}
    src="./images/marker.png"
    alt="marker"
  />
);

const MyGoogleMap = () => {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.googleMapKey }}
        defaultCenter={{ lat: 10.022, lng: 105.722 }}
        defaultZoom={5}
      >
        <Marker lat={10.022} lng={105.722} />
      </GoogleMapReact>
    </div>
  );
};

export default MyGoogleMap;

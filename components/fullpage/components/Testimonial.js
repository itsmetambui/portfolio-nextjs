import React from "react";

// import "./Testimonial.scss";

export default ({ name, image, initial, rating, review }) => {
  return (
    <div className="story">
      <figure className="story__shape">
        <img src={image} alt="Client thumb" className="story__img" />
        <figcaption className="story__caption">{initial}</figcaption>
      </figure>
      <div className="story__text">
        <h3 className="heading-tertiary u-margin-bottom-small">{name}</h3>
        <p>{review}</p>
      </div>
    </div>
  );
};

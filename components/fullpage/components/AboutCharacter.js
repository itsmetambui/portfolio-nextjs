import React from "react";

import "./AboutCharacter.scss";

export default () => (
  <div className="item-grid">
    <div className="item">
      <div className="item-image">
        <img src="./images/traveler.jpg" alt="traveler" />
      </div>
      <div className="item-text">
        <div className="item-text-wrapper">
          <p className="item-text-dek">Traveler</p>
          <p className="item-text-title">
            Wherever you go becomes a part of you somehow.
          </p>
        </div>
      </div>
    </div>

    <div className="item">
      <div className="item-image">
        <img src="./images/curiosity.jpg" alt="curiosity" />
      </div>
      <div className="item-text">
        <div className="item-text-wrapper">
          <p className="item-text-dek">Learner</p>
          <p className="item-text-title">
            The mind is not a vessel to be filled, but a fire to be kindled.
          </p>
        </div>
      </div>
    </div>

    <div className="item">
      <div className="item-image">
        <img src="./images/team-player.jpg" alt="team" />
      </div>
      <div className="item-text">
        <div className="item-text-wrapper">
          <p className="item-text-dek">Team player</p>
          <p className="item-text-title">
            Alone we can do so little, together we can do so much.
          </p>
        </div>
      </div>
    </div>

    <div className="item">
      <div className="item-image">
        <img src="./images/problem-solver.jpg" alt="solver" />
      </div>
      <div className="item-text">
        <div className="item-text-wrapper">
          <p className="item-text-dek">Problem solver</p>
          <p className="item-text-title">
            A problem is a chance for you to do your best.
          </p>
        </div>
      </div>
    </div>
  </div>
);

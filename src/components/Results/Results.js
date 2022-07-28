import "./Results.scss";

import React from "react";

export default function Results() {
  return (
    <div className="results">
      <h1 className="results__header">Cycle Trains</h1>
      <div className="results__button-group">
        <button className="results__button">Beginner</button>
        <button className="results__button">Intermediate</button>
        <button className="results__button">Confident</button>
      </div>
      <img
        src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/02/16/subway.jpg"
        alt="map route"
        className="results__map-image"
      />
      <p className="results__label">Meet up point</p>
      <p className="results__text">Liverpool Station</p>
      <p className="results__label">Meet up time</p>
      <p className="results__text">8:00am</p>
      <p className="results__label">Duration</p>
      <p className="results__text">35mins</p>
      <div className="results__participants-container">
        <p className="results__label">Who's joined the train?</p>
        <p className="results__label">3 spots remaining</p>
        <div className="results__participants-avatars">
          <div className="results__avatar-wrapper">
            <img src="" alt="pariticpant avatar" className="results__avatar" />
          </div>
          <div className="results__avatar-wrapper">
            <img src="" alt="participant avatar" className="results__avatar" />
          </div>
          <div className="results__avatar-wrapper">
            <img src="" alt="participant avatar" className="results__avatar" />
          </div>
          <div className="results__avatar-wrapper">
            <img src="" alt="participant avatar" className="results__avatar" />
          </div>
          <button className="results__join-button">Join</button>
        </div>
      </div>
    </div>
  );
}

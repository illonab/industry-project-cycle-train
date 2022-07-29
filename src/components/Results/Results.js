import "./Results.scss";

import React from "react";

export default function Results() {
  return (
    <div className="results">
      <h1 className="results__header">Cycle Trains</h1>
      <div className="results__button-group">
        <button className="results__button results__button--beginner">
          Beginner
        </button>
        <button className="results__button results__button--intermediate">
          Intermediate
        </button>
        <button className="results__button results__button--confident">
          Confident
        </button>
      </div>
      <div className="results__map-image-container">
        <img
          src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/02/16/subway.jpg"
          alt="map route"
          className="results__map-image"
        />
      </div>
      <div className="results__route-info">
        <div className="results__meet-info-container">
          <div className="results__meet-point">
            <p className="results__label">Meet up point</p>
            <p className="results__text">Liverpool Station</p>
          </div>
          <div className="results__meet-time">
            <p className="results__label">Meet up time</p>
            <p className="results__text">8:00am</p>
          </div>
        </div>
        <p className="results__label">Duration</p>
        <p className="results__text">35mins</p>
        <div className="results__participants-container">
          <div className="results__participants-text-container">
            <p className="results__label">Who's joined:</p>
            <p className="results__info-text">3 spots remaining</p>
          </div>
          <div className="results__avatars-container">
            <div className="results__avatar-wrapper">
              <img
                src="https://www.kindpng.com/picc/m/404-4042717_face-profile-png-circle-profile-picture-hd-png.png"
                alt="pariticpant avatar"
                className="results__avatar"
              />
            </div>
            <div className="results__avatar-wrapper">
              <img
                src="https://www.kindpng.com/picc/m/497-4973038_profile-picture-circle-png-transparent-png.png"
                alt="participant avatar"
                className="results__avatar"
              />
            </div>
            <div className="results__avatar-wrapper">
              <img
                src="https://www.kindpng.com/picc/m/557-5575215_2020-profile-circle-hd-png-download.png"
                alt="participant avatar"
                className="results__avatar"
              />
            </div>
            <div className="results__avatar-wrapper">
              <img
                src="https://www.pngitem.com/pimgs/m/627-6275754_chad-profile-pic-profile-photo-circle-png-transparent.png"
                alt="participant avatar"
                className="results__avatar"
              />
            </div>
          </div>
          <button className="results__join-button">Join</button>
        </div>
      </div>
    </div>
  );
}

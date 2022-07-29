import "./Results.scss";
import React, { useState } from "react";
import map from "../../assets/images/map.png";

// import Intermediate from "../../components/Intermediate/Intermediate";
// import Confident from "../../components/Confident/Confident";
import { Link } from "react-router-dom";
// import { Route, Routes, Navigate } from "react-router-dom";

export default function Results(props) {
  const [skillLevel, setskillLevel] = useState("beginner");

  return (
    <div className="results">
      <div className="results__wrapper">
        <h1 className="results__header">Cycle Trains</h1>
        <div className="results__button-group">
          <button
            onClick={(event) => setskillLevel("beginner")}
            className="results__button results__button--active results__button--beginner"
          >
            Quiet
          </button>

          <button
            onClick={(event) => setskillLevel("intermediate")}
            className="results__button results__button--intermediate"
          >
            Steady
          </button>

          <button
            onClick={(event) => setskillLevel("confident")}
            className="results__button results__button--confident"
          >
            Fast
          </button>
        </div>
        <div className="results__container">
          <div className="results__map-image-container">
            <img src={map} alt="map route" className="results__map-image" />
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

              <Link to="/success">
                <button className="results__join-button">Join</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

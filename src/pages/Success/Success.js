import React from "react";
import "./Success.scss";
import tickGif from "../../assets/tick.gif";

export default function Success() {
  return (
    <div className="success__container">
      <div className="success__icon-container">
        <img src={tickGif} alt="tick icon" className="success__tick-icon" />
      </div>
      <h2 className="success__text">
        Train Cycle joined!
        <br />
        Beginner Train cycle
        <br />
        To work From Home
        <br />
        Time 8AM
        <br />
        Meet at Liverpool st Station
      </h2>
    </div>
  );
}

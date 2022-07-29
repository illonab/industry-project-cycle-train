import "./Results.scss";
import React, { useState } from "react";
import Beginner from "../../components/Beginner/Beginner";
// import Intermediate from "../../components/Intermediate/Intermediate";
// import Confident from "../../components/Confident/Confident";
// import { Link } from "react-router-dom";
// import { Route, Routes, Navigate } from "react-router-dom";

export default function Results() {
  const [skillLevel, setskillLevel] = useState("beginner");

  return (
    <div className="results">
      <h1 className="results__header">Cycle Trains</h1>
      <div className="results__button-group">
        <button
          onClick={(event) => setskillLevel("beginner")}
          className="results__button results__button--active results__button--beginner"
        >
          Beginner
        </button>

        <button
          onClick={(event) => setskillLevel("intermediate")}
          className="results__button results__button--intermediate"
        >
          Intermediate
        </button>

        <button
          onClick={(event) => setskillLevel("confident")}
          className="results__button results__button--confident"
        >
          Confident
        </button>
      </div>
      <Beginner />
    </div>
  );
}

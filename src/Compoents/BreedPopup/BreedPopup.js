import React from "react";
import "./BreedPopup.scss";

export default function BreedPopup(props) {
  return (
    <div className="breed-popup">
      <h1>{props.clickedCat}</h1>
    </div>
  );
}

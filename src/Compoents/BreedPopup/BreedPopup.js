import React from "react";
import "./BreedPopup.scss";
import { stars } from "../Breed/Breed";

export default function BreedPopup(props) {
  const {
    affection_level,
    description,
    child_friendly,
    dog_friendly,
    energy_level,
    image,
    intelligence,
    life_span,
    name,
    origin,
    stranger_friendly,
    temperament,
    weight,
  } = props.clickedCat[0];

  const pateu = () => {
    console.log(child_friendly);
  };

  return (
    <div className="breed-popup">
      <div
        className="breed-popup-card"
        style={{
          background: `linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url(${image.url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="cat-popup-name" onClick={pateu}>
          {name}
        </h2>
        <h3 className="origin">Origin: {origin}</h3>
        <h3 className="description">Description: {description}</h3>
        <h3 className="temperament">Temperament: {temperament}</h3>
        <h3 className="intelligence">Intelligence: {stars(intelligence)}</h3>
        <h3 className="affection_level">Affection: {stars(affection_level)}</h3>
        <h3 className="child_friendly">
          Child Friendly: {stars(child_friendly)}
        </h3>
        <h3 className="stranger_friendly">
          Stranger Friendly: {stars(stranger_friendly)}
        </h3>
        <h3 className="dog_friendly">Dog Friendly: {stars(dog_friendly)}</h3>
        <h3 className="energy_level">Energy: {stars(energy_level)}</h3>
        <h3 className="weight">Weight: {weight.metric} kg</h3>
        <h3 className="life_span">Life Span: {life_span} years</h3>
      </div>
    </div>
  );
}

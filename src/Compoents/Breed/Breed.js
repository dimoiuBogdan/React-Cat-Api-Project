import React from "react";
import "./Breed.scss";
import StarIcon from "@material-ui/icons/Star";

export const stars = (attribute) => {
  var elements = [];
  for (let i = 0; i < attribute; i++) {
    elements.push(
      <span key={i}>
        <StarIcon />
      </span>
    );
  }
  return elements;
};

export default function Breed(props) {
  const clickCat = () => {
    props.setClickedCat(
      props.breeds.filter((clickedElement) => {
        return clickedElement.id === props.id;
      })
    );
  };

  return (
    <div className="breed-card-wrap" onClick={clickCat}>
      <div className="breed-card">
        <div className="image">
          <img loading="lazy" src={props.url} alt={props.id} />
        </div>
        <div className="right-section">
          <h3>{props.catName}</h3>
          <p className="origin">Origin: {props.origin}</p>
          <p className="description">
            Description: {props.description.split(" ").splice(0, 12).join(" ")}
            ...
          </p>
          <p className="cfa">
            CFA:{" "}
            <a href={props.cfa} target="_blank" rel="noreferrer">
              {props.catName}
            </a>
          </p>
          <p className="intelligence">
            Intelligence: {stars(props.intelligence)}
          </p>
        </div>
      </div>
    </div>
  );
}
// adaptability / affection level child friendly dog friendly / energy level / grooming id inteligence / lifespan
// name / temperament / weight / wikipedia

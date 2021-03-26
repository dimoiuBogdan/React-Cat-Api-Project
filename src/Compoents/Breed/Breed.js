import React from "react";
import "./Breed.scss";
import StarIcon from "@material-ui/icons/Star";

export default function Breed(props) {
  const {
    url,
    id,
    catName,
    origin,
    description,
    cfa,
    intelligence,
    setClickedCat,
    breeds,
  } = props;

  const stars = (attribute) => {
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

  const clickCat = () => {
    setClickedCat(
      breeds.filter((clickedElement) => {
        return clickedElement.id === id;
      })
    );
  };

  return (
    <div className="breed-card-wrap" onClick={clickCat}>
      <div className="breed-card">
        <div className="image">
          <img src={url} alt={id} />
        </div>
        <div className="right-section">
          <h3>{catName}</h3>
          <p className="origin">origin: {origin}</p>
          <p className="description">
            description: {description.split(" ").splice(0, 12).join(" ")} ...
          </p>
          <p className="cfa">
            cfa:{" "}
            <a href={cfa} target="_blank" rel="noreferrer">
              {catName}
            </a>
          </p>
          <p className="intelligence">intelligence: {stars(intelligence)}</p>
        </div>
      </div>
    </div>
  );
}
// adaptability / affection level child friendly dog friendly / energy level / grooming id inteligence / lifespan
// name / temperament / weight / wikipedia

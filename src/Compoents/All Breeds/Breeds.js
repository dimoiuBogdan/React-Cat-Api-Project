import React, { useState, useEffect } from "react";
import "../All Breeds/Breeds.scss";
import axios from "axios";
import Breed from "../Breed/Breed";
import BreedPopup from "../BreedPopup/BreedPopup";

export default function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [clickedCat, setClickedCat] = useState();

  useEffect(() => {
    fetchBreeds();
  }, []);

  const fetchBreeds = async () => {
    setLoading(true);
    await axios
      .get("https://api.thecatapi.com/v1/breeds")
      .then((res) => {
        const data = res.data;
        setBreeds(data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const escFunction = (e) => {
    if (e.keyCode === 27) setDisplayPopup(false);
  };

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  const togglePopup = () => {
    setDisplayPopup(!displayPopup);
  };

  return (
    <div className="breeds-container">
      {!loading ? (
        breeds.map((breed) =>
          breed.image ? (
            <div
              className="breed"
              onKeyPress={escFunction}
              onClick={togglePopup}
              key={breed.id}
            >
              <Breed
                clickedCat={clickedCat}
                setClickedCat={setClickedCat}
                breeds={breeds}
                id={breed.id}
                url={breed.image.url}
                catName={breed.name}
                origin={breed.origin}
                cfa={breed.cfa_url}
                description={breed.description}
                intelligence={breed.intelligence}
              />
            </div>
          ) : null
        )
      ) : (
        <h2>Loading...</h2>
      )}
      {displayPopup ? (
        <div className="popup" onClick={togglePopup}>
          <BreedPopup clickedCat={clickedCat} />
        </div>
      ) : null}
    </div>
  );
}

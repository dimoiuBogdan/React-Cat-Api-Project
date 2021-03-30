import React, { useState, useEffect } from "react";
import "../All Breeds/Breeds.scss";
import axios from "axios";
import Breed from "../Breed/Breed";
import BreedPopup from "../BreedPopup/BreedPopup";
import { Pagination } from "@material-ui/lab";

export default function Breeds() {
  const [breeds, setBreeds] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayPopup, setDisplayPopup] = useState(false);
  const [clickedCat, setClickedCat] = useState();
  const [pagesNumber, setPagesNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetchBreeds(currentPage, 6);
    document.addEventListener("keydown", escFunction, false);
    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, [currentPage]);

  const fetchBreeds = async (page, limit) => {
    setLoading(true);
    await axios
      .get(`https://api.thecatapi.com/v1/breeds?limit=${limit}&page=${page}`)
      .then((res) => {
        const pages = Math.ceil(
          +res.headers["pagination-count"] / +res.headers["pagination-limit"]
        );
        setPagesNumber(pages);
        setBreeds(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const escFunction = (e) => {
    if (e.keyCode === 27) setDisplayPopup(false);
  };

  const togglePopup = () => {
    setDisplayPopup(!displayPopup);
  };

  const changePage = (e, value) => {
    if (currentPage !== value - 1) setCurrentPage(value - 1);
  };

  return (
    <div className="breeds-container">
      {!loading ? (
        <div className="breeds-wrap">
          {breeds.map((breed) =>
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
          )}
          <div className="pagination">
            <Pagination
              count={pagesNumber}
              onChange={changePage}
              page={currentPage + 1}
            />
          </div>
        </div>
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

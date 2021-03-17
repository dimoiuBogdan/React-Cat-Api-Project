import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import "./Random.scss";
import axios from "axios";
export default function Random() {
  const [catDetails, setCatDetails] = useState({});

  const fetchRandomImage = () => {
    axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
      const data = res.data[0];
      setCatDetails({
        id: data.id,
        url: data.url,
      });
      console.log(data);
    });
  };

  return (
    <div className="random">
      <Button
        className="new-button"
        variant="contained"
        size="large"
        onClick={fetchRandomImage}
      >
        Random Cat
      </Button>
      {catDetails.url ? (
        <div className="cat-details">
          <img src={catDetails.url} alt="random-cat" />
          <p>{catDetails.id}</p>
        </div>
      ) : (
        <h2>Press The Button To Get A Cat</h2>
      )}
    </div>
  );
}

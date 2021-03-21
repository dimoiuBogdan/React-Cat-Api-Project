import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import "./Random.scss";
import axios from "axios";

export default function Random(props) {
  const [catDetails, setCatDetails] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchRandomImage = () => {
    if (!loading) {
      setLoading(true);
      axios.get("https://api.thecatapi.com/v1/images/search").then((res) => {
        const data = res.data[0];
        setCatDetails({
          id: data.id,
          url: data.url,
        });
      });
      setLoading(false);
    }
  };

  const addToFav = () => {
    props.setFavorites([
      ...props.favorites,
      { id: catDetails.id, url: catDetails.url },
    ]);
    console.log(catDetails.url, loading);
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
      {catDetails.url && loading === false ? (
        <div className="cat-details">
          <img src={catDetails.url} alt="random-cat" />
          <div className="icon">
            <FavoriteBorderIcon onClick={addToFav} />
          </div>
        </div>
      ) : loading ? (
        <h2>Loading...</h2>
      ) : (
        <h2>Press The Button To Get A Cat</h2>
      )}
    </div>
  );
}

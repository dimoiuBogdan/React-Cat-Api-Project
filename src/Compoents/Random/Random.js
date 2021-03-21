import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Button from "@material-ui/core/Button";
import "./Random.scss";
import axios from "axios";

export default function Random(props) {
  const addToFav = () => {
    if (props.favorites.includes(props.catDetails) === false)
      props.setFavorites([...props.favorites, props.catDetails]);
    else alert("Already favorited");
  };

  const fetchRandomImage = async () => {
    await axios
      .get("https://api.thecatapi.com/v1/images/search")
      .then((res) => {
        const data = res.data[0];
        props.setCatDetails({
          id: data.id,
          url: data.url,
        });
      })
      .catch((err) => {
        console.log(err);
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
      {props.catDetails.url ? (
        <div className="cat-details">
          <img src={props.catDetails.url} alt="random-cat" />
          <div className="icon">
            <FavoriteBorderIcon onClick={addToFav} />
          </div>
        </div>
      ) : (
        <h2>Press The Button To Get A Cat</h2>
      )}
    </div>
  );
}

import React from "react";
import "../Favorites/Favorites.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function Favorites(props) {
  const removeFromFavorites = (e) => {};

  return (
    <div className="favorite-cats">
      {props.favorites.map((favorite) => (
        <div className="favorite-cat-wrap">
          <div className="favorite-cat" key={favorite.id}>
            <img src={favorite.url} alt="cat" />
            <div className="icon">
              <FavoriteBorderIcon onClick={removeFromFavorites} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

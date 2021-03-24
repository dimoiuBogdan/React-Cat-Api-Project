import React from "react";
import "../Favorites/Favorites.scss";

import Favorite from "../Favorite/Favorite";

export default function Favorites(props) {
  return (
    <div className="favorite-cats">
      {props.favorites.map((favorite) => (
        <Favorite
          setFavorites={props.setFavorites}
          favorites={props.favorites}
          key={favorite.id}
          id={favorite.id}
          url={favorite.url}
        />
      ))}
    </div>
  );
}

import React from "react";

export default function Favorites(props) {
  return (
    <div>
      {props.favorites.map((favorite) => (
        <h1 key={favorite.id}>{favorite.id}</h1>
      ))}
    </div>
  );
}

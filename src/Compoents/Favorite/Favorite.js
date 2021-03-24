import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import "../Favorite/Favorite.scss";

export default function Favorite(props) {
  const removeFromFavorites = () => {
    props.setFavorites(
      props.favorites.filter((clickedElement) => clickedElement.id !== props.id)
    );
  };

  return (
    <div className="favorite-cat-wrap">
      <div className="favorite-cat">
        <img src={props.url} alt="cat" />
        <div className="icon">
          <DeleteIcon onClick={removeFromFavorites} />
        </div>
      </div>
    </div>
  );
}

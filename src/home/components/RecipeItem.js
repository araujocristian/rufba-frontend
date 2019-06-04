import React from "react";

/*const getHighlightedText = (text, higlight) => {
  let parts = text.split(new RegExp(`(${higlight})`, "gi"));
  return (
    <span>
      {parts.map((part, ind) =>
        part.toLowerCase() === higlight.toLowerCase() ? (
          <mark key={ind}>{part}</mark>
        ) : (
          part
        )
      )}
    </span>
  );
};*/

const RecipeItem = ({ ingredients, thumbnail, title, searchString }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <img className="card-img-top img-fluid" src={thumbnail} alt="" />
      <div className="card-body">
        <h5 className="card-title">
         {title}
        </h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {ingredients}
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;

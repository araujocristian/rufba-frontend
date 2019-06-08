import React from "react";

const RecipeItem = ({ ingredients, thumbnail, title, vegetarian, vegan }) => (
  <div className="col-sm-3 mt-4">
    <div className="card">
      <img className="card-img-top img-fluid" src={thumbnail} alt="" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          <strong>Ingredients: </strong>
          {ingredients}
        </p>
        <p className="card-text">
          <strong>Vegetariano: </strong>
          {vegetarian ? "Sim" : "Não"}
        </p>
        <p className="card-text">
          <strong>Vegano: </strong>
          {vegan ? "Sim" : "Não"}
        </p>
      </div>
    </div>
  </div>
);

export default RecipeItem;

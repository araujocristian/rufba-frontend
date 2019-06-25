import React from "react";
//Components
import RecipeItem from "../components/RecipeItem";
//Images
import NoMenu from "../images/sem-cardapio.png";

const Menu = props => {
  return (
    <div className="cardapio">
      <div className="cardapio-nome">
        <p>Cardapio do dia</p>
      </div>
      {props.currentUnit.currentMenu.menuItems.length ? (
        <>
          <div className="refeicoes">
            {props.currentMenuItems.map((recipe, ind) => (
              <RecipeItem
                key={ind}
                ingredients={recipe.foodItem.description}
                thumbnail={recipe.foodItem.icon}
                title={recipe.foodItem.name}
                vegetarian={recipe.foodItem.vegetarian}
                vegan={recipe.foodItem.vegan}
              />
            ))}
          </div>
          <div className="fila">
            <span>Status da fila:</span>
            <span>{props.currentUnit.queueStatus}</span>
          </div>
        </>
      ) : (
        <div className="sem-refeicoes">
          <img src={NoMenu} alt="Sem Cardápio" className="sem-unidade-img" />
          <h1>Nenhum cardápio cadastrado, faça a sua contribuição!</h1>
        </div>
      )}
    </div>
  );
};

export default Menu;

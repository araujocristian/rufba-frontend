import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";

import api from "../../services/api";
import recipes from "../../services/recipes.json";
import RecipeItem from "./RecipeItem";

//Style
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {};
  }

  async componentDidMount() {
    try {
      const response = await api.get("/model/unit/ondina", {});

      this.setState({ response: response.data });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <UnauthenticatedRedirect>
        <div>
          <div className="unidade">
            <span className="unidade-nome">Unidade: Ondina</span>
            <span>Endereço: Av. Adhemar de Barros, S/N</span>
            <span>Preço: R$: 2,50</span>
          </div>
          <div className="cardapio">
            <div className="cardapio-nome">
              <p>Cardapio do dia</p>
            </div>
            <div className="refeicoes">
              {this.recipes.map((recipe, ind) => (
                <RecipeItem
                  key={ind}
                  ingredients={recipe.ingredients}
                  thumbnail={recipe.thumbnail}
                  title={recipe.title}
                  searchString={this.state.searchString}
                />
              ))}
            </div>
          </div>
          <div className="fila" />
          <div className="new-refeicao">
            <span>Adicione aqui sua contribuição!</span>
            <button>Adicionar Refeição</button>
          </div>
        </div>
      </UnauthenticatedRedirect>
    );
  }
}

export default Home;

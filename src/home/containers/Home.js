import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
// Composers
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
//Helpers
import { translateUnit } from "../../common";
// Actions
import { getUnits, getUnit } from "../actions";
// Selectors
import {
  unitListSelector,
  unitNameListSelector,
  currentUnitSelector
} from "../selectors";
import recipes from "../../services/recipes.json";
import RecipeItem from "../components/RecipeItem";

//Style
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.recipes = recipes.results;
    this.state = {
      unitName: "--"
    };
  }

  componentDidMount() {
    this.props.getUnits();
  }

  handleGetMeal = (unitName: String) => {
    this.setState({ unitName });
    this.props.getUnit(unitName);
  };

  render() {
    return (
      <UnauthenticatedRedirect>
        {console.log(this.props, "STATE")}
        <div>
          <div className="unidade-seletor">
            <span>Selecione sua unidade:</span>
            <select
              onChange={e => this.handleGetMeal(e.target.value)}
              defaultValue={this.state.unitName}
            >
              <option>--</option>
              {this.props.unitNameList.map((unit, i) => {
                return (
                  <option key={i} value={unit}>
                    {translateUnit(unit)}
                  </option>
                );
              })}
            </select>
          </div>
          {this.props.currentUnit.length !== 0 ? (
            <>
              <div className="unidade">
                <span className="unidade-nome">{`Unidade: ${translateUnit(
                  this.props.currentUnit.name
                )}`}</span>
                <span>{`Endereço: ${this.props.currentUnit.location}`}</span>
                <span>
                  {`Preço: ${parseFloat(
                    this.props.currentUnit.priceCharged
                  ).toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL"
                  })}`}
                </span>
              </div>
              <div className="cardapio">
                <div className="cardapio-nome">
                  <p>Cardapio do dia</p>
                </div>
                {!this.props.currentUnit.currentMenu.menuItems.length ? (
                  <>
                    <div className="refeicoes">
                      {this.recipes.map((recipe, ind) => (
                        <RecipeItem
                          key={ind}
                          ingredients={recipe.description}
                          thumbnail={recipe.icon}
                          title={recipe.name}
                          vegetarian={recipe.vegetarian}
                          vegan={recipe.vegan}
                        />
                      ))}
                    </div>
                    <div className="fila">
                      <span>Status da fila:</span>
                      <span>{this.props.currentUnit.queueStatus}</span>
                    </div>
                  </>
                ) : (
                  <div className="sem-refeicoes">
                    <h1>
                      Nenhum cardápio cadastrado, faça a sua contribuição!
                    </h1>
                  </div>
                )}
              </div>
              <div className="new-refeicao">
                <span>Adicione aqui sua contribuição!</span>
                <button>Adicionar Refeição</button>
              </div>
            </>
          ) : (
            <div className="sem-unidade">
              <h1>Escolha uma unidade.</h1>
            </div>
          )}
        </div>
      </UnauthenticatedRedirect>
    );
  }
}

const mapStateToProps = (state, OwnProps: Props) => {
  return {
    unitList: unitListSelector(state),
    unitNameList: unitNameListSelector(state),
    currentUnit: currentUnitSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    getUnits: () => {
      dispatch(getUnits());
    },
    getUnit: (unitName: String) => {
      dispatch(getUnit(unitName));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
// Composers
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Actions
import { getUnits, getUnit } from "../actions";

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

  componentDidMount(){
    this.props.getUnits();
  }

  render() {
    return (
      <UnauthenticatedRedirect>
        {console.log(this.props)}
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

const mapStateToProps = state => {
  return {
    /*loggedIn: loggedInSelector(state),
    isLoggingIn: loggingInLoadingSelector(state),
    isRegistering: registeringLoadingSelector(state),
    loginErrors: loginErrorsSelector(state),
    registrationErrors: registrationErrorsSelector(state),*/
  };
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    getUnits: () => {
      dispatch(getUnits());
    },
    getUnit: (unitName: String) => {
      dispatch(getUnits(unitName));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

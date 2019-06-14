import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
// Composers
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
//Helpers
import { translateUnit } from "../../common";
//Components
import Unit from "../components/Unit";
import Menu from "../components/Menu";

// Actions
import { getUnits, getUnit } from "../actions";
// Selectors
import {
  unitListSelector,
  unitNameListSelector,
  currentUnitSelector,
  currentMenuItemsSelector
} from "../selectors";
//Style
import "./Home.css";

export class Home extends Component {
  constructor(props) {
    super(props);

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
        <>
          <div className="unidade-seletor">
            <span>Selecione sua unidade:</span>
            <select
              onChange={e => this.handleGetMeal(e.target.value)}
              defaultValue={this.state.unitName}
            >
              <option value="--">Escolher...</option>
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
              <Unit currentUnit={this.props.currentUnit} />
              <Menu 
                currentUnit={this.props.currentUnit}
                currentMenuItems={this.props.currentMenuItems}
              />
              <div className="new-refeicao">
                <span>Adicione aqui sua contribuição!</span>
                <Link to="/form">
                  <button className="btn btn-deep-orange">
                    Adicionar Refeição
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="sem-unidade">
              <h1>Escolha uma unidade.</h1>
            </div>
          )}
        </>
      </UnauthenticatedRedirect>
    );
  }
}

const mapStateToProps = (state, OwnProps: Props) => {
  return {
    unitList: unitListSelector(state),
    unitNameList: unitNameListSelector(state),
    currentUnit: currentUnitSelector(state),
    currentMenuItems: currentMenuItemsSelector(state)
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

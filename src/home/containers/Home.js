import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
// Composers
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
//Components
import Unit from "../components/Unit";
import Menu from "../components/Menu";
import UnitSelector from "../components/UnitSelector";
//Images
import NoUnits from "../images/sem-unidades.png";
// Actions
import { getUnits, getUnit, getMenu } from "../actions";
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
    this.props.getMenu(unitName);
  };

  render() {
    return (
      <UnauthenticatedRedirect>
        <>
          <UnitSelector 
            handleGetMeal={this.handleGetMeal}
            unitName={this.state.unitName}
            unitNameList={this.props.unitNameList}
          />
          {this.props.currentUnit.length !== 0 ? (
            <>
              <Unit currentUnit={this.props.currentUnit} />
              <Menu 
                currentUnit={this.props.currentUnit}
                currentMenuItems={this.props.currentMenuItems}
              />
              <div className="new-refeicao">
                <span>Adicione aqui sua contribuição!</span>
                <Link to="/formulario">
                  <button className="btn btn-deep-orange">
                    Adicionar Refeição
                  </button>
                </Link>
              </div>
            </>
          ) : (
            <div className="sem-unidade">
              <img src={NoUnits} alt="Sem Unidade" className="sem-unidade-img"/>
              <h1>Escolha sua unidade :D</h1>
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
    },
    getMenu: (unitName: String) => {
      dispatch(getMenu(unitName));
    }
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);

import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
import { connect } from "react-redux";
import "./MealForm.css";
import MealSelector from "../components/MealSelector";
// Actions
import { getMeals, setMeals } from "../actions";
//Selectors
import { mealsNameListSelector } from "../selectors";

export class MealForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealOptions: this.props.mealsNameList || [],
      mealSeted: []
    };
  }

  handleSetMeal = meal => {
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
    //this.setState({mealOptions: [meal, ...rest]})
  };

  handleSetMeals = () => {
    
  };

  componentDidMount() {
    this.props.getMeals();
  }

  UNSAFE_componentWillReceiveProps(nextProps: Props) {
    this.setState({ mealOptions: this.props.mealsNameList });
  }

  render() {
    return (
      <UnauthenticatedRedirect>
        <div className="meal-form-container col-md-6 mb-4">
          <div className="card">
            <div className="card-body">
              {console.log(this.props.mealsNameList)}
              <form>
                <h2 className="text-center font-up font-bold deep-orange-text py-4">
                  Cadastre o cardápio do dia
                </h2>
                <MealSelector
                  nameOne={"Opção 1"}
                  nameTwo={"Opção 2"}
                  mealOptions={this.state.mealOptions}
                  handleSetMeal={this.handleSetMeal}
                />
                <MealSelector
                  nameOne={"Opção 3"}
                  nameTwo={"Opção 4"}
                  mealOptions={this.state.mealOptions}
                  handleSetMeal={this.handleSetMeal}
                />
                <MealSelector
                  nameOne={"Opção 5"}
                  nameTwo={"Opção 6"}
                  mealOptions={this.state.mealOptions}
                  handleSetMeal={this.handleSetMeal}
                />
                <MealSelector
                  nameOne={"Opção 7"}
                  nameTwo={"Opção 8"}
                  mealOptions={this.state.mealOptions}
                  handleSetMeal={this.handleSetMeal}
                />
                <div className="text-center">
                  <button className="btn btn-deep-orange">Cadastrar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </UnauthenticatedRedirect>
    );
  }
}

const mapStateToProps = state => {
  return {
    mealsNameList: mealsNameListSelector(state)
  };
};

const mapDispatchToProps = (dispatch: Dispatch, stateProps) => {
  return {
    getMeals: () => {
      dispatch(getMeals());
    },
    setMeals: (meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8) => {
      dispatch(
        setMeals(
          "ondina",
          meal1,
          meal2,
          meal3,
          meal4,
          meal5,
          meal6,
          meal7,
          meal8
        )
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealForm);

import React, { Component } from "react";
import { UnauthenticatedRedirect } from "../../users";
import { connect } from "react-redux";
//Components
import MealSelector from "../components/MealSelector";
import { validationHelpers } from "../../common";
import { InputFieldErrorMessage } from "../../common";
// Actions
import { getMeals, setMeals } from "../actions";
//Selectors
import { mealsNameListSelector } from "../selectors";
//Style
import "./MealForm.css";
export class MealForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mealOptions: this.props.mealsNameList || [],
      mealSeted: [],
      meal1: "",
      meal2: "",
      meal3: "",
      meal4: "",
      meal5: "",
      meal6: "",
      meal7: "",
      meal8: "",
      unit: "",

      meal1Error: "",
      unitError: ""
    };
  }
  validateUserInput() {
    let noValidationErrors: boolean = true;

    const meal1Error = validationHelpers.meal.meal1(this.state.meal1);
    this.setState({ meal1Error });
    if (meal1Error) {
      noValidationErrors = false;
    }

    const unitError = validationHelpers.meal.unit(this.state.unit);
    this.setState({ unitError });
    if (unitError) {
      noValidationErrors = false;
    }

    if (noValidationErrors) {
      this.props.setMeals(
        this.state.unit,
        this.state.meal1,
        this.state.meal2,
        this.state.meal3,
        this.state.meal4,
        this.state.meal5,
        this.state.meal6,
        this.state.meal7,
        this.state.meal8
      );
    } else {
      console.error("Validation error on registration form.");
    }
  }

  handleSetMeal1 = meal => {
    this.setState({ meal1: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal2 = meal => {
    this.setState({ meal2: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal3 = meal => {
    this.setState({ meal3: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal4 = meal => {
    this.setState({ meal4: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal5 = meal => {
    this.setState({ meal5: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal6 = meal => {
    this.setState({ meal6: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal7 = meal => {
    this.setState({ meal7: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
  };

  handleSetMeal8 = meal => {
    this.setState({ meal8: meal });
    this.setState({ mealSeted: [...this.state.mealSeted, meal] });
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
              <form
                onSubmit={e => {
                  e.preventDefault();
                  this.validateUserInput();
                }}
              >
                <h2 className="text-center font-up font-bold deep-orange-text py-4">
                  Envie o cardápio do dia
                </h2>

                <InputFieldErrorMessage message={this.state.unitError} />
                <form
                  className="text-center font-up form-unit"
                  onChange={e => this.setState({ unit: e.target.value })}
                >
                  <input type="radio" name="unit" value="ondina" />
                  <label>Ondina</label>
                  <input type="radio" name="unit" value="sao-lazaro" />
                  <label>São Lázaro</label>
                </form>

                <InputFieldErrorMessage message={this.state.meal1Error} />
                <MealSelector
                  name={"Opção 1"}
                  mealOptions={this.state.mealOptions}
                  handleSetMeal={this.handleSetMeal1}
                  meal={this.state.meal1}
                  mealSeted={this.state.mealSeted}
                />

                <div className={this.state.meal1 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 2"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal2}
                    meal={this.state.meal2}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal2 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 3"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal3}
                    meal={this.state.meal3}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal3 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 4"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal4}
                    meal={this.state.meal4}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal4 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 5"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal5}
                    meal={this.state.meal5}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal5 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 6"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal6}
                    meal={this.state.meal6}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal6 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 7"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal7}
                    meal={this.state.meal7}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className={this.state.meal7 ? "" : "invisible"}>
                  <MealSelector
                    name={"Opção 8"}
                    mealOptions={this.state.mealOptions}
                    handleSetMeal={this.handleSetMeal8}
                    meal={this.state.meal8}
                    mealSeted={this.state.mealSeted}
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-deep-orange">
                    Enviar cardápio
                  </button>
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
    setMeals: (
      unit,
      meal1,
      meal2,
      meal3,
      meal4,
      meal5,
      meal6,
      meal7,
      meal8
    ) => {
      dispatch(
        setMeals(unit, meal1, meal2, meal3, meal4, meal5, meal6, meal7, meal8)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MealForm);

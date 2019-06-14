import React from "react";

const MealSelector = props => {
  return (
    <div className="row">
      <div className="col-md-6">
        <div className="form-group">
          <label className="control-label">{props.nameOne}</label>
          <select
            className="form-control form-control-lg"
            onChange={e => props.handleSetMeal(e.target.value)}
            defaultValue={""}
          >
            <option value="">Escolher...</option>
            {props.mealOptions.map((meal, i) => {
              return (
                <option key={i} value={meal}>
                  {meal}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-group">
          <label className="control-label">{props.nameTwo}</label>
          <select
            className="form-control form-control-lg"
            onChange={e => props.handleSetMeal(e.target.value)}
            defaultValue={""}
          >
            <option value="">Escolher...</option>
            {props.mealOptions.map((meal, i) => {
              return (
                <option key={i} value={meal}>
                  {meal}
                </option>
              );
            })}{" "}
          </select>
        </div>
      </div>
    </div>
  );
};

export default MealSelector;

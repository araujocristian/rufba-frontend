import React from "react";

const MealSelector = props => {
  return (
    <div className="form-group">
      <label className="control-label">{props.name}</label>
      <select
        className="form-control form-control-lg"
        onChange={e => props.handleSetMeal(e.target.value)}
        defaultValue={props.meal}
      >
        <option value="" disabled>Escolher...</option>
        {props.mealOptions.map((meal, i) => {
          return (
            <option key={i} value={meal} disabled={props.mealSeted.indexOf(meal) > -1}>
              {meal}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default MealSelector;

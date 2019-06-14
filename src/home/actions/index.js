// @flow
import { createAction } from "redux-actions";
// API
import Unit from "../api";
// Selectors

// Types
import type { Dispatch, State } from "../../types";
// Logger
import { logException } from "../../logHelper";

/******************
 *** GET UNITS ***
 ******************/
export const fetchUnitsRequest = createAction("FETCH_UNITS_REQUEST");
export const fetchUnits = createAction("FETCH_UNITS");

export function getUnits() {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      dispatch(fetchUnitsRequest());

      const response = await Unit.getUnits();
      dispatch(fetchUnits(response));
    } catch (err) {
      logException(err);
      dispatch(fetchUnits(err));
    }
  };
}

/****************************
 *** GET SINGLE UNIT ***
 ****************************/
export const fetchUnitRequest = createAction("FETCH_UNIT_REQUEST");
export const fetchUnit = createAction("FETCH_UNIT");

export function getUnit(unitName: string) {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      dispatch(fetchUnitRequest());

      const response = await Unit.getUnit(unitName);
      dispatch(fetchUnit(response));
    } catch (err) {
      logException(err);
      dispatch(fetchUnit(err));
    }
  };
}

/******************
 *** GET MEALS ***
 ******************/
export const fetchMealsRequest = createAction("FETCH_MEALS_REQUEST");
export const fetchMeals = createAction("FETCH_MEALS");

export function getMeals() {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      dispatch(fetchMealsRequest());

      const response = await Unit.getMeals();
      dispatch(fetchMeals(response));
    } catch (err) {
      logException(err);
      dispatch(fetchMeals(err));
    }
  };
}

/******************
 *** GET MEALS ***
 ******************/
export const putMealsRequest = createAction("PUT_MEALS_REQUEST");
export const putMeals = createAction("PUT_MEALS");

export function setMeals(
  unitName,
  meal1,
  meal2,
  meal3,
  meal4,
  meal5,
  meal6,
  meal7,
  meal8
) {
  return async (dispatch: Dispatch, getState: () => State) => {
    try {
      dispatch(putMealsRequest());

      const response = await Unit.setMeals(
        unitName,
        meal1,
        meal2,
        meal3,
        meal4,
        meal5,
        meal6,
        meal7,
        meal8
      );
      dispatch(putMeals(response));
    } catch (err) {
      logException(err);
      dispatch(putMeals(err));
    }
  };
}

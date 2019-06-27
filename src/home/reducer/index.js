// @flow
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
// Types
import type { Reducer } from 'redux';
import type { ActionType } from 'redux-actions';

// List of current units for the index
const currentList: Reducer<number[], ActionType<*>> = handleActions(
  {
    [combineActions(actions.fetchUnits)]: {
      next: (state, action) => action.payload.result.units,
    },
  },
  [],
);

// Current past order
const current = handleActions(
  {
    [combineActions(actions.fetchUnit)]: {
      next: (state, action) => action.payload.result.unit,
      throw: (state, action) => []
    },
  },
  [],
);

const units = handleActions(
  {
    [combineActions(actions.fetchUnits, actions.fetchUnit)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.entities.units,
      }),
    },
  },
  {},
);

// MENU ITEMS
const menuItems = handleActions(
  {
    [combineActions(actions.fetchMenu)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.result.trustedItems,
      }),
    },
  },
  [],
);

// MEALS
const meals = handleActions(
  {
    [combineActions(actions.fetchMeals)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.result.foodItems,
      }),
    },
  },
  [],
);

// General loading states
const initialLoadingState = {
  gettingUnits: false,
  gettingUnit: false,
};
const loading = handleActions(
  {
    // ORDERS INDEX
    [combineActions(actions.fetchUnitsRequest)]: (state, action) => ({
      ...state,
      gettingUnits: true,
    }),
    [combineActions(actions.fetchUnits)]: (state, action) => ({
      ...state,
      gettingUnits: false,
    }),
    // SINGLE ORDER
    [combineActions(actions.fetchUnitRequest)]: (state, action) => ({
      ...state,
      gettingUnit: true,
    }),
    [combineActions(actions.fetchUnit)]: (state, action) => ({
      ...state,
      gettingUnit: false,
    }),
  },
  initialLoadingState,
);

const reducers = combineReducers({
  currentList,
  current,
  units,
  menuItems,
  meals,

  loading,
});

export default reducers;

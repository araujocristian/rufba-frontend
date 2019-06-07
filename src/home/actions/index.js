// @flow
import { createAction } from 'redux-actions';
// API
import Unit from '../api';
// Selectors

// Types
import type { Dispatch, State } from '../../types';
// Logger
import { logException } from '../../logHelper';

/******************
 *** GET ORDERS ***
 ******************/
export const fetchUnitsRequest = createAction('FETCH_UNITS_REQUEST');
export const fetchUnits = createAction('FETCH_UNITS');

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
 *** GET SINGLE PAST ORDER ***
 ****************************/
export const fetchUnitRequest = createAction('FETCH_UNIT_REQUEST');
export const fetchUnit = createAction('FETCH_UNIT');

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

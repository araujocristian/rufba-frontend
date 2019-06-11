// @flow
import { createSelector } from 'reselect';
import _ from 'lodash';
import type { Order } from '../../types';
import type { StoreState } from '../types';

export const localStateSelector = (state: StoreState): Order => {
  return state.home;
};

// The current orders LIST
export const unitListSelector = createSelector(
  localStateSelector,
  state =>
    _.without(
      state.currentList.map(unitName => state.units[unitName]),
      undefined,
    ),
);

export const unitNameListSelector = createSelector(
  unitListSelector,
  (units) => {
    return units.map(unit =>{
      return unit.name
    })
  }
    
)


// The current unit
export const currentUnitSelector = createSelector(
  localStateSelector,
  state => state.current,
);

////////////////// LINE ITEMS ///////////////////
// Get the line items that belong to the current orderlineItems
export const currentMenuItemsSelector = createSelector(
  localStateSelector,
  (state) => {

    return Object.values(state.menuItems);
  },
);


//////////////////////// LOADING ////////////////////
export const gettingOrdersLoadingSelector = createSelector(
  localStateSelector,
  state => state.loading.gettingOrders,
);

export const gettingOrderLoadingSelector = createSelector(
  localStateSelector,
  state => state.loading.gettingOrder,
);

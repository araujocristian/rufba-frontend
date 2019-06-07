// @flow
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
// Types
import type { Reducer } from 'redux';
import type { ActionType } from 'redux-actions';

// @flow
import { handleActions, combineActions } from 'redux-actions';
import { combineReducers } from 'redux';
import * as actions from '../actions';
// Types
import type { Reducer } from 'redux';
import type { ActionType } from 'redux-actions';

// List of current orders for the index
const currentList: Reducer<number[], ActionType<*>> = handleActions(
  {
    [combineActions(actions.fetchPastOrders)]: {
      next: (state, action) => action.payload.result.orders,
    },
  },
  [],
);

// Current past order
const current: Reducer<number, ActionType<*>> = handleActions(
  {
    [combineActions(actions.fetchPastOrder)]: {
      next: (state, action) => action.payload.result,
    },
  },
  [],
);

const pagesInfo = handleActions(
  {
    [combineActions(actions.fetchPastOrders)]: {
      next: (state, action) => ({
        ...state,
        pages: action.payload.result.pages,
        perPage: action.payload.result.count,
        currentPage: action.payload.result.currentPage,
      }),
    },
  },
  {},
);

const orders = handleActions(
  {
    [combineActions(actions.fetchPastOrders, actions.fetchPastOrder)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.entities.orders,
      }),
    },
  },
  {},
);

// LINE ITEMS
const lineItems = handleActions(
  {
    [combineActions(actions.fetchPastOrders, actions.fetchPastOrder)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.entities.lineItems,
      }),
    },
  },
  {},
);

// SHIPMENTS
const shipments = handleActions(
  {
    [combineActions(actions.fetchPastOrders, actions.fetchPastOrder)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.entities.shipments,
      }),
    },
  },
  {},
);

// SHIPPING RATES
const shippingRates = handleActions(
  {
    [combineActions(actions.fetchPastOrders, actions.fetchPastOrder)]: {
      next: (state, action) => ({
        ...state,
        ...action.payload.entities.shippingRates,
      }),
    },
  },
  {},
);

// General loading states
const initialLoadingState = {
  gettingOrders: false,
  gettingOrder: false,
};
const loading = handleActions(
  {
    // ORDERS INDEX
    [combineActions(actions.fetchPastOrdersRequest)]: (state, action) => ({
      ...state,
      gettingOrders: true,
    }),
    [combineActions(actions.fetchPastOrders)]: (state, action) => ({
      ...state,
      gettingOrders: false,
    }),
    // SINGLE ORDER
    [combineActions(actions.fetchPastOrderRequest)]: (state, action) => ({
      ...state,
      gettingOrder: true,
    }),
    [combineActions(actions.fetchPastOrder)]: (state, action) => ({
      ...state,
      gettingOrder: false,
    }),
  },
  initialLoadingState,
);

const reducers = combineReducers({
  currentList,
  current,
  pagesInfo,
  orders,
  lineItems,
  shipments,
  shippingRates,

  loading,
});

export default reducers;

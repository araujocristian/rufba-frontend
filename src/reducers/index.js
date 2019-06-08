// @flow
import { combineReducers } from 'redux';
import user from '../users';
import home from '../home'
/*import order from '../current-order';
import products from '../products';
import { reducer as search } from '../search';
import common from '../common';
import pastOrders from '../past-orders';
import blends from '../blend';
// import recipes from '../recipes';
import departments from '../departments';*/

const rootReducer = combineReducers({
  user,
  home
 /* products,
  order,
  user,
  search,
  common,
  pastOrders,
  // recipes,
  departments,
  blends,*/
});

export default rootReducer;

// @flow
/**
 * USER MODULE EXPORTS
 * This is the "interface" file for the user module.
 * You should only use exports from this file.
 */

/**
 * Imports
 */
import InputFieldErrorMessage from './components/InputFieldErrorMessage';
import validationHelpers from "./validationHelpers";
/**
 * Reducer
 * =======
 * The default export is the reducer to be integrated in the Redux Store.
 * Its state is defined too, and exported as the type UserStoreState.
 */
// Add here

/**
 * Widgets
 * =======
 * Widgets are connected components that can be used inside a page.
 */

/**
 * Pages
 * =====
 * Pages are components that are used in the router.
 * They are auto-rendered by react-router and thus have
 * to be self-sufficient (no passed props).
 */
// Add here

/**
 * HOCs and Connectors
 * ===================
 * Higher order components and connectors wrap the children component
 * and add behavior or props that depend on the internal user state.
 */
// ADD HERE

/**
 * Components
 * =====
 * Components are unconnnected and used to display static information
 */
export {
  InputFieldErrorMessage
}

/**
 * Reducer
 * =======
 * The default export is the reducer to be integrated in the Redux Store.
 * Its state is defined too, and exported as the type UserStoreState.
 */

/**
 * Helper Functions
 * =======
 */
export { validationHelpers };

/**
 * Other Exports
 * =======
 */

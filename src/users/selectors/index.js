// @flow
import { createSelector } from 'reselect';
import _ from 'lodash';

export const thisStateSelector = (state: any): StoreState => state.user;

// User information, id, etc
export const userIdSelector = createSelector(
  thisStateSelector,
  (state: StoreState): ?number => state.information.id || null,
);

export const loggedInSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loggedIn || false,
);

export const nameSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.information.name || '',
);

export const emailSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.information.email || '',
);

export const editableInformationSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => ({
    firstName: state.information.name || '',
    registration: state.information.registration || '',
    email: state.information.email || '',
  }),
);

// General Loading Related
export const loggingInLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.loggingIn,
);

export const registeringLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.registering,
);

export const validatingUserLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.validating,
);

export const editingUserInformationLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.editingInformation,
);

export const gettingUserCreditCardsLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.gettingCreditCards,
);

export const forgotPasswordLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.forgotPassword,
);

export const resetPasswordLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.resetPassword,
);

// Address loading related
export const gettingUserAddressesLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.gettingAddresses,
);

export const editingUserAddressesLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.editingAddress,
);

export const addingUserAddressesLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.addingAddress,
);

export const deletingUserAddressesLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.deletingAddress,
);

export const deletingUserAddressesLoadingByIdSelector = (
  state: any,
  id: number,
) => {
  const index = deletingUserAddressesLoadingSelector(state).indexOf(id);
  return index > -1;
};

export const deletingdUserCreditCardLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.deletingCreditCard,
);

export const updatingUserPasswordLoadingSelector = createSelector(
  thisStateSelector,
  (state: StoreState) => state.loading.updatingPassword,
);

// Error Related
export const loginErrorsSelector = createSelector(
  thisStateSelector,
  state => ({
    emailError: state.errors.wrongLoginUsername,
    passwordError: state.errors.wrongLoginPassword,
  }),
);

export const updatePasswordError = createSelector(
  thisStateSelector,
  state => state.errors.wrongUpdatePassword,
);

export const registrationErrorsSelector = createSelector(
  thisStateSelector,
  state => state.errors.registration,
);

export const forgotPasswordErrorsSelector = createSelector(
  thisStateSelector,
  state => state.errors.forgotPassword,
);

export const resetPasswordErrorsSelector = createSelector(
  thisStateSelector,
  state => state.errors.resetPassword,
);

// Address Related
export const addressMapSelector = createSelector(
  thisStateSelector,
  state => state.addresses,
);

export const userAddressesSelector = createSelector(
  thisStateSelector,
  addressMapSelector,
  (state, addresses) =>
    state.information.addresses
      ? _.filter(
          state.information.addresses.map(id => addresses[id]),
          o => o !== undefined,
        )
      : [],
);

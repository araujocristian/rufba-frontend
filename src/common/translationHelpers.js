// @flow

export const translateUnit = state => {
  switch (state) {
    case 'ondina':
      return 'Ondina';
    case 'sao-lazaro':
      return 'São Lázaro';
    case '--':
      return "";
    default:
      return state;
  }
};
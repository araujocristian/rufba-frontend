// @flow

const user = {
  name: (value: string) => {
    if (value === "") {
      return "Campo é obrigatório";
    } else if (value.length > 30) {
      return "Nome muito longo";
    } else {
      return "";
    }
  },

  registration: (value: string) => {
    if (value === "") {
      return "Campo é obrigatório";
    } else if (!value.match(/^\d+$/)) {
      return "Matricula deve conter apenas números";
    } else {
      return "";
    }
  },

  email: (value: string) => {
    if (value === "") {
      // Email is missing
      return "Campo é obrigatório";
    } else if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        value
      )
    ) {
      return "Email inválido";
    } else {
      return "";
    }
  },

  password: (value: string) => {
    if (value === "") {
      // Password is missing or invalid?
      return "Campo é obrigatório";
    } else if (value.length < 6) {
      return "Senha muito curta. Mínimo de 6 caracteres";
    } else if (value.length > 50) {
      return "Senha muito longa. Máx de 50 caracteres";
    } else {
      return "";
    }
  },

  passwordConfirmation: (value: string, otherValue: string) => {
    if (value === "") {
      // Confirmation password is mandatory
      return "Campo é obrigatório";
    } else if (value !== otherValue) {
      // Confirmation password has to match password

      return "Senha e confirmação não são iguais";
    } else {
      return "";
    }
  }
};

const meal = {
  meal1: (value: String) => {
    if (value === "") {
      // Confirmation password is mandatory
      return "Campo é obrigatório";
    } else {
      return "";
    }
  },
  unit: (value: String) => {
    if (value === "") {
      // Confirmation password is mandatory
      return "Campo é obrigatório";
    } else {
      return "";
    }
  }
};

const validationHelpers = {
  user,
  meal
};

export default validationHelpers;

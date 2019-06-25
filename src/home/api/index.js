// @flow
import { authGet, authPut } from "../../api";
import { camelizeKeys } from "humps";
import { normalize } from "normalizr";
import * as schema from "./schema";

const Unit = {
  async getUnit(unitName: String) {
    const response = await authGet(`/model/unit/${unitName}`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.units);
    return normalized;
  },

  async getUnits() {
    const response = await authGet(`/model/unit/`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.units);
    return normalized;
  },

  async getMeals() {
    const response = await authGet("/model/foodItem");
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.meals);
    return normalized;
  },

  async setMeals(
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
    const body = {
      menuItems: [
        { name: meal1, availability: true },
        meal2 ? { name: meal2, availability: true } : "",
        meal3 ? { name: meal3, availability: true } : "",
        meal4 ? { name: meal4, availability: true } : "",
        meal5 ? { name: meal5, availability: true } : "",
        meal6 ? { name: meal6, availability: true } : "",
        meal7 ? { name: meal7, availability: true } : "",
        meal8 ? { name: meal8, availability: true } : ""
      ]
    };
    const response = await authPut(`/model/unit/${unitName}/menu`, body);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.meals);
    return normalized;
  }
};

export default Unit;

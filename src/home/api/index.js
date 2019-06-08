// @flow
import { authGet } from "../../api";
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

  async getUnits(){
    const response = await authGet(`/model/unit/`);
    const data = await response.json().then(b => camelizeKeys(b));
    const normalized = normalize(data, schema.units);
    return normalized;
  }
};

export default Unit;

// @flow
import { schema } from "normalizr";
import { camelizeKeys } from "humps";

export const unit = new schema.Entity("units");

export const units = { units: [unit] };

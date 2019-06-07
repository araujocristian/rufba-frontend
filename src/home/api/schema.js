// @flow
import { schema } from "normalizr";
import { camelizeKeys } from "humps";

export const unit = new schema.Entity(
  "unit",
  {},
  { processStrategy: entity => camelizeKeys(entity) }
);

export const units = new schema.Entity("units", {
    units:[unit]
});

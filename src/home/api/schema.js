// @flow
import { schema } from "normalizr";

export const unit = new schema.Entity("units");

export const units = { units: [unit] };

// @flow
import { schema } from "normalizr";

export const unit = new schema.Entity("units");

export const units = { units: [unit] };

export const meal = new schema.Entity("meals");

export const meals = { meals: [meal] };

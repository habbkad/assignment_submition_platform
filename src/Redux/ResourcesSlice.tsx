import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { act } from "react-dom/test-utils";
import { type } from "os";
type data = {
  module: string;
  resourceLink: string;
  stack: string;
  time: string;
  title: string;
  week: number;
  __v: number;
  _id: string;
};
type week = {
  one: data[];
  two: data[];
  three: data[];
  four: data[];
  five: data[];
  six: data[];
};
type resource = {
  html: week;
  css: week;
  responsive: week;
};

// Define a type for the slice state
export interface State {
  resources: resource;
}

// Define the initial state using that type
const initialState: State = {
  resources: {
    html: { one: [], two: [], three: [], four: [], five: [], six: [] },
    css: { one: [], two: [], three: [], four: [], five: [], six: [] },
    responsive: { one: [], two: [], three: [], four: [], five: [], six: [] },
  },
};

export const resourcesSlice = createSlice({
  name: "resources",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addResources: (state, action) => {
      state.resources = action.payload;
    },
  },
});

export const { addResources } = resourcesSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.resources;

export default resourcesSlice.reducer;

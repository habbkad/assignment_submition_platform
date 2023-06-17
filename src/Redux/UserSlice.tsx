import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state

// Define the initial state using that type
const initialState = {
  user: { id: "648c72eeb3ae57c966d7d0fa" },
};

export const UserSlice = createSlice({
  name: "Student",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { addUser } = UserSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default UserSlice.reducer;

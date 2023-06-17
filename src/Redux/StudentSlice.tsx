import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
  student: {
    firstName: "",
    middleName: "",
    lastName: "",
    indexNumber: 0,
    phone: 0,
    assignments: [],
    email: "",
  },
};

export const StudentSlice = createSlice({
  name: "Student",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addStudent: (state, action) => {
      state.student = action.payload;
    },
  },
});

export const { addStudent } = StudentSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default StudentSlice.reducer;

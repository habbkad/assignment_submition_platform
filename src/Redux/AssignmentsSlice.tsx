import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./Store";
import { act } from "react-dom/test-utils";
import { type } from "os";
type Data = {
  date: string;
  gen: number;
  github_link: string;
  indexNumber: number;
  pdfUrl: string;
  student: string;
  title: string;
  topic: string;
  user: string;
  week: string;
  _id: string;
};
type AssignmentData = {
  date: string;
  gen: number;
  github_link: string;
  indexNumber: number;
  pdfUrl: string;
  student: string;
  title: string;
  topic: string;
  user: string;
  week: string;
};
// Define a type for the slice state
export interface State {
  studentAssignments: Data[];
  assignmentDetails: AssignmentData;
}

// Define the initial state using that type
const initialState: State = {
  studentAssignments: [],
  assignmentDetails: {
    date: "",
    gen: 0,
    github_link: "",
    indexNumber: 0,
    pdfUrl: "",
    student: "",
    title: "",
    topic: "",
    user: "",
    week: "",
  },
};

export const assignmentsSlice = createSlice({
  name: "assignments",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addStudentAssignments: (state, action) => {
      state.studentAssignments = action.payload;
    },
    addAssignmentDetails: (state, action) => {
      state.assignmentDetails = action.payload;
    },
  },
});

export const { addStudentAssignments, addAssignmentDetails } =
  assignmentsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.assignments;

export default assignmentsSlice.reducer;

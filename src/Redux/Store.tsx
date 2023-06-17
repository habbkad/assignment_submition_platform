import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./UserSlice";
import studentReducer from "./StudentSlice";
// ...

export const store = configureStore({
  reducer: {
    user: userReducer,
    student: studentReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

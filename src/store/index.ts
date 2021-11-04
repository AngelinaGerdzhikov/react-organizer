import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import taskSlice from "./task-slice";
import undoable from "redux-undo";

const store = configureStore({
  reducer: {
    tasks: undoable(taskSlice.reducer),
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;

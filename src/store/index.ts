import { configureStore} from '@reduxjs/toolkit';
import calendarSlice from './calendar-slice';
import { TypedUseSelectorHook, useSelector } from 'react-redux'

const store = configureStore({
  reducer: {
    calendar: calendarSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
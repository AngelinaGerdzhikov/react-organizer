import { createSlice } from '@reduxjs/toolkit';
import { InitialCalendarState } from './calendar-state';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: InitialCalendarState,
  reducers: {
    getPreviousMonth(state, action) {
      const previousMonthNumber = (+state.currentMonthNumber - 1) < 0 ? 11 : +state.currentMonthNumber - 1;
      
      if (previousMonthNumber === 11) {
        state.currentYearNumber = +state.currentYearNumber - 1;
      }

      state.currentMonthNumber = previousMonthNumber;
    },
    getNextMonth(state, action) {
      const nextMonthNumber = (+state.currentMonthNumber + 1) > 11 ? 0 : +state.currentMonthNumber + 1;

      if (nextMonthNumber === 0) {
        const updatedYearNumber = +state.currentYearNumber + 1;
        state.currentYearNumber = updatedYearNumber;
      }

      state.currentMonthNumber = nextMonthNumber;
    },
    setCurrentMonth(state, action) {
      return {
        ...state,
        currentMonthNumber: action.payload.monthNumber,
        currentYearNumber: action.payload.yearNumber
      }
    }
  }
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
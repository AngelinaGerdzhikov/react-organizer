import { createSlice } from '@reduxjs/toolkit';
import CalendarYear from '../models/calendar/calendar-year';
import { InitialCalendarState } from './calendar-state';

const calendarSlice = createSlice({
  name: 'calendar',
  initialState: InitialCalendarState,
  reducers: {
    getNextMonth(state, action) {
      const nextMonthNumber = (state.currentMonthNumber + 1) > 12 ? 0 : state.currentMonthNumber + 1;

      if (nextMonthNumber === 0) {
        const updatedYearNumber = state.currentYearNumber + 1;
        const updatedYear = new CalendarYear(updatedYearNumber);
        
        state.loadedYears.push(updatedYear);
        state.currentYearNumber = updatedYearNumber;
        state.currentYear = updatedYear;
      }

      state.currentMonthNumber = nextMonthNumber;
      state.currentMonth = state.currentYear.calendarMonths[nextMonthNumber];
      state.currentWeekNumber = 0;
      state.currentWeek = state.currentMonth.monthDatesInWeeks[state.currentWeekNumber];   
      console.log(state);
    }
  }
});

export const calendarActions = calendarSlice.actions;
export default calendarSlice;
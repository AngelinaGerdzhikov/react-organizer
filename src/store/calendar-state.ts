interface CalendarState {
  currentYearNumber: number | string,
  currentMonthNumber: number | string,
  currentWeekNumber: number | string
};

export const InitialCalendarState: CalendarState = {
  currentYearNumber: '',
  currentMonthNumber: '',
  currentWeekNumber: ''
}

export default CalendarState;
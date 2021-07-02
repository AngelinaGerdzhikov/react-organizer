interface CalendarState {
  currentYearNumber: number | string,
  currentMonthNumber: number | string
};

export const InitialCalendarState: CalendarState = {
  currentYearNumber: '',
  currentMonthNumber: ''
}

export default CalendarState;
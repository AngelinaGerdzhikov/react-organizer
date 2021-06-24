interface CalendarState {
  currentYearNumber: number,
  currentMonthNumber: number
};

const today = new Date();
const currentYearNumber = today.getUTCFullYear();
const currentMonthNumber = today.getUTCMonth();


export const InitialCalendarState: CalendarState = {
  currentYearNumber,
  currentMonthNumber
}

export default CalendarState;
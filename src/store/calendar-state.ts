import CalendarMonth from "../models/calendar/calendar-month";
import CalendarWeek from "../models/calendar/calendar-week";
import CalendarYear from "../models/calendar/calendar-year";

interface CalendarState {
  currentYearNumber: number,
  currentYear: CalendarYear,
  currentMonthNumber: number,
  currentMonth: CalendarMonth,
  currentWeekNumber: number,
  currentWeek: CalendarWeek,
  loadedYears: CalendarYear[]
};

const today = new Date();
const currentYearNumber = today.getUTCFullYear();
const currentYear = new CalendarYear(currentYearNumber);
const currentMonthNumber = today.getUTCMonth();
const currentMonth = currentYear.calendarMonths[currentMonthNumber];
const [currentWeekNumber, currentWeek] =  currentMonth.getWeekContainingADay(today.getDate());


export const InitialCalendarState: CalendarState = {
  currentYearNumber,
  currentYear,
  currentMonthNumber,
  currentMonth,
  currentWeekNumber,
  currentWeek,
  loadedYears: [currentYear]
}

export default CalendarState;
import CalendarCreator from "../../utility/calendar-creator";
import { CalendarMonth } from "./calendar-month";

class CalendarYear {
  readonly isYearALeapYear: boolean = false;
  readonly calendarMonths: CalendarMonth[] = [];

  constructor(public yearNumber: number) {
    this.isYearALeapYear = CalendarCreator.getIsYearALeapYear(yearNumber);
    this.calendarMonths = CalendarCreator.getYearInMonths(yearNumber);
  }
}

export default CalendarYear;
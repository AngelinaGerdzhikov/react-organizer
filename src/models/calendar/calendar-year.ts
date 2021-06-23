import { CalendarMonth } from "./calendar-month";

class CalendarYear {
  readonly isYearALeapYear: boolean = false;
  readonly calendarMonths: CalendarMonth[] = [];

  constructor(public yearNumber: number) {
    this.isYearALeapYear = CalendarYear.getIsYearALeapYear(yearNumber);
    this.calendarMonths = this.getYearInMonths(yearNumber);
  }

  static getIsYearALeapYear(year: number): boolean {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      year % 400 === 0
    )
      return true;
    return false;
  }

  getYearInMonths = (year: number): CalendarMonth[] => {
    if (this.calendarMonths.length > 0) return this.calendarMonths;
  
    for (let i = 0; i < 12; i++) {
      this.calendarMonths.push(new CalendarMonth(i, year));
    }
  
    return this.calendarMonths;
  }
}

export default CalendarYear;
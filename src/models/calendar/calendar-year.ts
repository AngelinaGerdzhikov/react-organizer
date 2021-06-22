import { CalendarMonth } from "./calendar-month";

class CalendarYear {
  private _yearInMonths: CalendarMonth[] = [];
  readonly isYearALeapYear: boolean = false;

  constructor(public yearNumber: number) {
    this.isYearALeapYear = this.getIsYearALeapYear(yearNumber);
  }

  private getIsYearALeapYear(year: number): boolean {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      year % 400 === 0
    )
      return true;
    return false;
  }

  getYearInMonths = (year: number): CalendarMonth[] => {
    if (this._yearInMonths.length > 0) return this._yearInMonths;
  
    for (let i = 0; i < 12; i++) {
      this._yearInMonths.push(new CalendarMonth(i, year));
    }
  
    return this._yearInMonths;
  }
}

export default CalendarYear;
import CalendarCreator from "../../utility/calendar-creator";
import CalendarDay from "./calendar-day";
import CalendarWeek from "./calendar-week";
import monthToNameMap from "./month-to-name.map";

export class CalendarMonth {
  readonly firstDayOfMonth: Date = new Date();
  readonly lastDayOfMonth: Date = new Date();
  readonly numberOfWeeksInMonth: number = 0;
  readonly numberOfDaysInMonth: number = 0;
  readonly datesInMonth: CalendarDay[] = [];
  readonly monthDatesInWeeks: CalendarWeek[] = [];
  readonly monthName: string = "";
  readonly year: number = 0;
  readonly monthFullName: string = "";

  constructor(public readonly month: number, year: number) {
    this.firstDayOfMonth = new Date(year, month, 1);
    this.year = this.firstDayOfMonth.getFullYear();
    this.numberOfDaysInMonth = CalendarCreator.getNumberOfDaysInMonth(
      this.month,
      this.year
    );
    this.datesInMonth = CalendarCreator.getDatesInMonth(this.month, this.year);
    this.lastDayOfMonth = this.datesInMonth[this.numberOfDaysInMonth - 1].date;
    this.monthDatesInWeeks = CalendarCreator.getMonthDatesInWeeks(
      this.month,
      this.year
    );
    this.monthFullName = monthToNameMap.get(this.month.toString());
    this.numberOfWeeksInMonth = this.monthDatesInWeeks.length;
  }

  static getPreviousMonthData(
    monthNumber: number,
    yearNumber: number
  ): number[] {
    const previousMonthNumber = monthNumber - 1 < 0 ? 11 : monthNumber - 1;
    let updatedYear = previousMonthNumber === 11 ? yearNumber - 1 : yearNumber;

    return [previousMonthNumber, updatedYear];
  }

  static getNextMonthData(monthNumber: number, yearNumber: number): number[] {
    const nextMonthNumber = monthNumber + 1 > 11 ? 0 : monthNumber + 1;
    let updatedYear = nextMonthNumber === 0 ? yearNumber + 1 : yearNumber;

    return [nextMonthNumber, updatedYear];
  }
}

export default CalendarMonth;

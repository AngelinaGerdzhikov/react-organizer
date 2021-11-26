import CalendarCreator from "../../utility/calendar-creator";
import CalendarDay from "./calendar-day";
import NthWeekToNameMap from "./nth-week-to-name.map";

class CalendarWeek {
  readonly firstDayOfWeek: CalendarDay;
  readonly firstDayOfWeekNumber: number = 0;
  readonly firstDayOfWeekFullName: string = "Monday";
  readonly dateRange: string = "";
  readonly nthWeekOfMonthFullName: string = '';
  readonly nthWeekOfYear: number;

  constructor(
    public readonly month: number,
    public readonly year: number,
    public readonly days: CalendarDay[],
    public readonly nthWeekOfMonth: number
  ) {
    this.firstDayOfWeek = this.days[0];
    this.firstDayOfWeekNumber = this.firstDayOfWeek.dayOfWeek;
    this.firstDayOfWeekFullName = this.firstDayOfWeek.dayOfWeekFullName;
    this.month = this.firstDayOfWeek.month;
    this.year = this.firstDayOfWeek.year;
    this.dateRange = this.getDateRange();
    this.nthWeekOfMonthFullName = NthWeekToNameMap.get(this.nthWeekOfMonth.toString());
    this.nthWeekOfYear = CalendarCreator.getWeekOfYear(this.firstDayOfWeek.date);
  }

  private getDateRange() {
    const isWeekInSameMonth = this.days[0].month === this.days[6].month;

    if (!isWeekInSameMonth) {
      return `${this.days[0].dayOfMonth} ${this.days[0].monthName} - ${this.days[6].dayOfMonth} ${this.days[6].monthName}`;
    } else {
      return  `${this.days[0].dayOfMonth} - ${this.days[6].dayOfMonth} ${this.days[6].monthName}`; 
    }
  }

}

export default CalendarWeek;

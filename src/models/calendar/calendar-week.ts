import CalendarDay from "./calendar-day";
import NthWeekToNameMap from "./nth-week-to-name.map";

class CalendarWeek {
  readonly firstDayOfWeek: CalendarDay;
  readonly firstDayOfWeekNumber: number = 0;
  readonly firstDayOfWeekFullName: string = "Monday";
  readonly dateRange: string = "";
  readonly nthWeekOfMonthFullName: string = '';

  constructor(
    public readonly month: number,
    public readonly year: number,
    public readonly days: CalendarDay[],
    public readonly nthWeekOfMonth: number
  ) {
    if (nthWeekOfMonth === 0) {
      this.firstDayOfWeek =
        this.days.find((day) => day.date.getDate() === 1) ||
        new CalendarDay(new Date(Date.UTC(this.year, this.month)));
    } else {
      this.firstDayOfWeek = this.days[0];
    }
    this.firstDayOfWeekNumber = this.firstDayOfWeek.dayOfWeek;
    this.firstDayOfWeekFullName = this.firstDayOfWeek.dayOfWeekFullName;
    this.month = this.firstDayOfWeek.month;
    this.year = this.firstDayOfWeek.year;
    this.dateRange = this.getDateRange();
    this.nthWeekOfMonthFullName = NthWeekToNameMap.get(this.nthWeekOfMonth.toString());
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

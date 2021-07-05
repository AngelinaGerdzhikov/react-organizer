import CalendarDay from "./calendar-day";

class CalendarWeek {
  readonly firstDayOfWeek: CalendarDay;
  readonly firstDayOfWeekNumber: number = 0;
  readonly firstDayOfWeekFullName: string = 'Monday';
  readonly month: number;
  readonly year: number;
  readonly dateRange: string = '';
   
  constructor(public readonly days: CalendarDay[], public readonly nthWeekOfMonth: number) {
    this.firstDayOfWeek = days.filter(day => day !== null)[0];
    this.firstDayOfWeekNumber = days.filter(day => day !== null)[0].dayOfWeek;
    this.firstDayOfWeekFullName = days.filter(day => day !== null)[0].dayOfWeekFullName;
    this.month = this.firstDayOfWeek.dayOfMonth;
    this.year = this.firstDayOfWeek.year;
    this.dateRange = `${this.firstDayOfWeek.dayOfMonth} - ${days[days.length - 1].dayOfMonth}`;
  }

  static getPreviousWeekData(year: number, month: number, week: number) {
    
  }
}

export default CalendarWeek;
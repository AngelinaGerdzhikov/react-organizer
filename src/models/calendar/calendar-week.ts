import CalendarDay from "./calendar-day";

class CalendarWeek {
  readonly nthWeekOfMonth: number = 0;
  readonly firstDayOfWeek: number = 0;
  readonly firstDayOfWeekFullName: string = 'Monday';
   
  constructor(public readonly days: CalendarDay[]) {
    this.firstDayOfWeek = days.filter(day => day !== null)[0].dayOfWeek;
    this.firstDayOfWeekFullName = days.filter(day => day !== null)[0].dayOfWeekFullName;
  }
}

export default CalendarWeek;
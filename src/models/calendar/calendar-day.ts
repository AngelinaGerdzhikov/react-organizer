import MonthToNameMap from "./month-to-name.map";
import WeekdayToNameMap from "./weekday-to-name.map";

class CalendarDay {
  readonly dayOfWeek: number = 0;
  readonly dayOfWeekFullName: string = '';
  readonly dayOfMonth: number = 1;
  readonly monthName: string = '';
  readonly month: number = 0; 
  readonly year: number = 0;
  readonly isWeekday: boolean = false;
  readonly isWeekend: boolean = false;

  constructor(public readonly date: Date) {
    this.dayOfWeek = this.date.getDay();
    this.dayOfWeekFullName = WeekdayToNameMap.get(this.dayOfWeek.toString());
    this.dayOfMonth = this.date.getDate();
    this.month = this.date.getMonth();
    this.monthName = MonthToNameMap.get(this.month.toString());
    this.year = this.date.getFullYear();
    this.isWeekday = this.dayOfWeek !== 0 && this.dayOfWeek !== 6;
    this.isWeekend = this.dayOfWeek === 0 || this.dayOfWeek === 6;
  }
} 

export default CalendarDay;
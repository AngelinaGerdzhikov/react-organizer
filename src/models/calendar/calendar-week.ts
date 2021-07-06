import { getYearFromStorage } from "../../utility/local-storage-manager";
import CalendarDay from "./calendar-day";
import CalendarMonth from "./calendar-month";

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
    this.month = this.firstDayOfWeek.month;
    this.year = this.firstDayOfWeek.year;
    this.dateRange = `${this.firstDayOfWeek.dayOfMonth} - ${days[days.length - 1].dayOfMonth}`;
    // this.getLeadingDaysFromPreviousMonth();
  }

  getLeadingDaysFromPreviousMonth() {
    const leadingDays = (0 - this.firstDayOfWeekNumber) * -1;

    if (leadingDays > 0) {
      const [prevMonthNumber, prevMonthYearNumber] = CalendarMonth.getPreviousMonthData(this.month, this.year);
      const prevMonthYear = getYearFromStorage(prevMonthYearNumber);
      const prevMonth = prevMonthYear.calendarMonths[prevMonthNumber];

      
      for (let i = 0; i <= leadingDays; i++) {
        const prevMonthDay = prevMonth.datesInMonth[prevMonth.numberOfDaysInMonth - i];
        
        this.days.splice(leadingDays - 1, 0, prevMonthDay);
        console.log(this.days);
      }
    }

  }
}

export default CalendarWeek;
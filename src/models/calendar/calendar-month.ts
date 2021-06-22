import CalendarDay from './calendar-day';
import CalendarWeek from './calendar-week';
import Year from './calendar-year';
import monthToDaysMap from './month-to-days.map';
import monthToNameMap from './month-to-name.map';

export class CalendarMonth {
  readonly firstDayOfMonth: Date = new Date();
  readonly lastDayOfMonth: Date = new Date();
  readonly numberOfWeeksInMonth: number = 0;
  readonly numberOfDaysInMonth: number = 0;
  readonly datesInMonth: CalendarDay[] = [];
  readonly monthDatesInWeeks: CalendarWeek[] = [];
  readonly monthName: string = '';
  readonly year: number = 0;
  readonly monthFullName: string = '';

  constructor(public readonly month: number, year: number) {
    this.firstDayOfMonth = new Date(year, month, 1);
    this.year = this.firstDayOfMonth.getFullYear();
    this.numberOfDaysInMonth = this.getNumberOfDaysInMonth();
    this.datesInMonth = this.getDatesInMonth();
    this.lastDayOfMonth = this.datesInMonth[this.numberOfDaysInMonth - 1].date;
    this.monthDatesInWeeks = this.getMonthDatesInWeeks();
    this.monthFullName = monthToNameMap.get(this.month.toString());
  }

  private getNumberOfDaysInMonth() {
    const isLeapYear = new Year(this.year).isYearALeapYear;
  
    if (this.month === 1 || isLeapYear) {
      return 29;
    } else {
      return monthToDaysMap.get([this.month].toString());
    }
  };

  private getDatesInMonth = () => {
  
    for (let i = 1; i <= this.numberOfDaysInMonth; i++) {
      let day = new Date(Date.UTC(this.year, this.month, i, 0o0, 0o0, 0o0));
      day.setDate(i);
      let calendarDay = new CalendarDay(day);
      this.datesInMonth.push(calendarDay);
    }
  
    return this.datesInMonth;
  }

  private getMonthDatesInWeeks = () => {
    if (this.monthDatesInWeeks[0] && this.monthDatesInWeeks[0].days.length > 1 ) return this.monthDatesInWeeks;
  
    for (let i = 0; i < this.numberOfDaysInMonth; i++) {
      let weekDates: CalendarDay[] = [];
  
      for(let k = 0; k <= 6; k++) {
        if (i === this.numberOfDaysInMonth) break;
  
        if (this.datesInMonth[i].date.getDay() === k) {
          weekDates[k] = this.datesInMonth[i];
          i++;
        } 
      }
  
      if (weekDates.length > 0) {
        this.monthDatesInWeeks.push(new CalendarWeek(weekDates));
        i--;
      }
    }
  

    return this.monthDatesInWeeks;
  }
  
  getWeekOfMonth = (numberOfWeek: number) => {
    return this.monthDatesInWeeks[numberOfWeek];
  }
}

export default CalendarMonth;













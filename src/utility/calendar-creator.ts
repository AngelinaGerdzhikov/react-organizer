import CalendarDay from "../models/calendar/calendar-day";
import CalendarMonth from "../models/calendar/calendar-month";
import CalendarWeek from "../models/calendar/calendar-week";
import monthToDaysMap from "../models/calendar/month-to-days.map";

class CalendarCreator {
  private static getLeadingDaysFromPreviousMonth(firstDayOfMonth: CalendarDay, monthDatesInWeeks: CalendarDay[][]) {
    const leadingDays = firstDayOfMonth.date.getDay();

    if (leadingDays > 0) {
      const [prevMonthNumber, prevMonthYearNumber] = CalendarMonth.getPreviousMonthData(firstDayOfMonth.month, firstDayOfMonth.year);
      const numberOfDaysInMonth = monthToDaysMap.get(prevMonthNumber.toString());
      
      for (let i = 0; i <= leadingDays; i++) {
        const prevMonthDay = new Date(prevMonthYearNumber, prevMonthNumber, numberOfDaysInMonth - i);
        monthDatesInWeeks[0][leadingDays - (i + 1)] = new CalendarDay(prevMonthDay);
      }
    }
  }

  private static getFollowingDaysFromNextMonth(lastDayOfMonth: CalendarDay, monthDatesInWeeks: CalendarDay[][]) {
    const followingDays = lastDayOfMonth.date.getDay();

    if (followingDays < 6) {
      const [nextMonthNumber, nextMonthYearNumber] = CalendarMonth.getNextMonthData(lastDayOfMonth.month, lastDayOfMonth.year);
      
      for (let i = 1; i <= 6 - followingDays; i++) {
        const nextMonthDay = new Date(nextMonthYearNumber, nextMonthNumber, i);
        monthDatesInWeeks[monthDatesInWeeks.length - 1][followingDays + i] = new CalendarDay(nextMonthDay);
      }
    }
  }

  public static getNumberOfDaysInMonth(month: number, year: number) {
    const isLeapYear = CalendarCreator.getIsYearALeapYear(year);
  
    if (month === 1 && isLeapYear) {
      return 29;
    } else {
      return monthToDaysMap.get([month].toString());
    }
  };

  public static getDatesInMonth = (month: number, year: number) => {
    const numberOfDaysInMonth = CalendarCreator.getNumberOfDaysInMonth(month, year);
    const datesInMonth: CalendarDay[] = [];
 
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      let day = new Date(year, month, i);
      // day.setDate(i);
      let calendarDay = new CalendarDay(day);
      datesInMonth.push(calendarDay);
    }
  
    return datesInMonth;
  }

  public static getMonthDatesInWeeks = (month: number, year: number) => {
    const numberOfDaysInMonth = CalendarCreator.getNumberOfDaysInMonth(month, year);
    const datesInMonth = CalendarCreator.getDatesInMonth(month, year);
    const monthDatesInWeeks: CalendarDay[][] = [];
  
    for (let i = 0; i < numberOfDaysInMonth; i++) {
      let weekDates: CalendarDay[] = [];
  
      for(let k = 0; k <= 6; k++) {
        if (i === numberOfDaysInMonth) break;
  
        if (datesInMonth[i].date.getDay() === k) {
          weekDates[k] = datesInMonth[i];
          i++;
        } 
      }
  
      if (weekDates.length > 0) {
        monthDatesInWeeks.push(weekDates);
        i--;
      }
    }

    CalendarCreator.getLeadingDaysFromPreviousMonth(datesInMonth[0], monthDatesInWeeks);
    CalendarCreator.getFollowingDaysFromNextMonth(datesInMonth[datesInMonth.length - 1], monthDatesInWeeks);

    const updatedMonthDatesInWeeks = monthDatesInWeeks.map((week: CalendarDay[], weekIndex) => {
      return new CalendarWeek(month, year, week, weekIndex);
    })


    return updatedMonthDatesInWeeks;
  }

  public static getIsYearALeapYear(year: number): boolean {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      year % 400 === 0
    )
      return true;
    return false;
  }

  public static createYear = (year: number): CalendarMonth[] => {
    const calendarMonths: CalendarMonth[] = [];
  
    for (let i = 0; i < 12; i++) {
      calendarMonths.push(new CalendarMonth(i, year));
    }
  
    return calendarMonths;
  }

  public static getWeekOfYear = (firstDayOfWeek: Date) => {
    const oneJan = new Date(firstDayOfWeek.getFullYear(),0,1);
    const numberOfDays = Math.floor((firstDayOfWeek.valueOf() - oneJan.valueOf()) / (24 * 60 * 60 * 1000));
    const result = Math.ceil(( firstDayOfWeek.getDay() + 1 + numberOfDays) / 7);
    console.log(`The week number of the current date (${firstDayOfWeek}) is ${result}.`);
    return result;
  }

}

export default CalendarCreator;
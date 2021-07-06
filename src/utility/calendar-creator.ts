import CalendarDay from "../models/calendar/calendar-day";
import CalendarMonth from "../models/calendar/calendar-month";
import CalendarWeek from "../models/calendar/calendar-week";
import monthToDaysMap from "../models/calendar/month-to-days.map";
import { getYearFromStorage } from "./local-storage-manager";

class CalendarCreator {
  static getIsYearALeapYear(year: number): boolean {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      year % 400 === 0
    )
      return true;
    return false;
  }

  static getNumberOfDaysInMonth(month: number, year: number) {
    const isLeapYear = CalendarCreator.getIsYearALeapYear(year);
  
    if (month === 1 && isLeapYear) {
      return 29;
    } else {
      return monthToDaysMap.get([month].toString());
    }
  };

  static getDatesInMonth = (month: number, year: number) => {
    const numberOfDaysInMonth = CalendarCreator.getNumberOfDaysInMonth(month, year);
    const datesInMonth: CalendarDay[] = [];
 
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      let day = new Date(Date.UTC(year, month, i, 0o0, 0o0, 0o0));
      day.setDate(i);
      let calendarDay = new CalendarDay(day);
      datesInMonth.push(calendarDay);
    }
  
    return datesInMonth;
  }

  static getMonthDatesInWeeks = (month: number, year: number) => {
    const numberOfDaysInMonth = CalendarCreator.getNumberOfDaysInMonth(month, year);
    const datesInMonth = CalendarCreator.getDatesInMonth(month, year);
    const monthDatesInWeeks: CalendarWeek[] = [];
  
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
        const nthWeekOfMonth = monthDatesInWeeks.length;
        monthDatesInWeeks.push(new CalendarWeek(weekDates, nthWeekOfMonth));
        i--;
      }
    }
  

    return monthDatesInWeeks;
  }

  static getLeadingDaysFromPreviousMonth(month: CalendarMonth) {
    const leadingDays = month.firstDayOfMonth.getDay();

    if (leadingDays > 0) {
      const [prevMonthNumber, prevMonthYearNumber] = CalendarMonth.getPreviousMonthData(month.month, month.year);
      const numberOfDaysInMonth = monthToDaysMap.get(prevMonthNumber.toString());

      
      for (let i = 0; i <= leadingDays; i++) {

        const prevMonthDay = new Date(prevMonthYearNumber, prevMonthNumber, numberOfDaysInMonth - i);
        month.monthDatesInWeeks[0].days[leadingDays - (i + 1)] = new CalendarDay(prevMonthDay);
        console.log(month);
      }
    }

  }

  static getYearInMonths = (year: number): CalendarMonth[] => {
    const calendarMonths: CalendarMonth[] = [];
  
    for (let i = 0; i < 12; i++) {
      calendarMonths.push(new CalendarMonth(i, year));
    }
  
    return calendarMonths;
  }

}

export default CalendarCreator;
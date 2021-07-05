import CalendarYear from "../models/calendar/calendar-year";

export const getYearFromStorage = (yearNumber: number): CalendarYear => {
  const yearStorage = localStorage.getItem(yearNumber.toString());

  if (!yearStorage) {
    const year = new CalendarYear(yearNumber);
    localStorage.setItem(yearNumber.toString(), JSON.stringify(year));
    return year;
  }

  return JSON.parse(yearStorage);
};

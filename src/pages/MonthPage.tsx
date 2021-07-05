import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import MonthDetails from "../components/calendar/month/MonthDetails";
import MonthNavigation from "../components/calendar/month/MonthNavigation";
import MonthSidebar from "../components/calendar/month/MonthSidebar";
import CalendarMonth from "../models/calendar/calendar-month";
import CalendarYear from "../models/calendar/calendar-year";

interface RouteParams {
  year: string;
  month: string;
}

const MonthPage = () => {
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;
  const currentMonthNumberParam = params.month;

  const yearStorage = localStorage.getItem(currentYearNumberParam);
  const year: CalendarYear = yearStorage
    ? JSON.parse(yearStorage)
    : new CalendarYear(+currentYearNumberParam);
  let month: CalendarMonth = year?.calendarMonths[+currentMonthNumberParam];

  useEffect(() => {

    if (!yearStorage) {
      localStorage.setItem(currentYearNumberParam, JSON.stringify(year));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYearNumberParam]);

  return (
    <Fragment>
      <MonthNavigation month={month} />
      <MonthSidebar weeks={month.monthDatesInWeeks} />
      <MonthDetails month={month} />
    </Fragment>
  );
};

export default MonthPage;

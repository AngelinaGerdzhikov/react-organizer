import { Fragment } from "react";
import { useParams } from "react-router-dom";
import MonthDetails from "../components/calendar/month/MonthDetails";
import MonthNavigation from "../components/calendar/month/MonthNavigation";
import MonthSidebar from "../components/calendar/month/MonthSidebar";
import CalendarMonth from "../models/calendar/calendar-month";
import { getYearFromStorage } from "../utility/local-storage-manager";
import classes from './Page.module.css';

interface RouteParams {
  year: string;
  month: string;
}

const MonthPage = () => {
  const params = useParams<RouteParams>();
  const yearParam = params.year;
  const monthParam = params.month;
  const year = getYearFromStorage(+yearParam);
  let month: CalendarMonth = year?.calendarMonths[+monthParam];
  
  return (
    <main className={classes.page}>
      <MonthNavigation month={month} />
      <MonthSidebar weeks={month.monthDatesInWeeks} />
      <MonthDetails month={month} />
    </main>
  );
};

export default MonthPage;

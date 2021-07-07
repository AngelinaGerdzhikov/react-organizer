import { useParams } from "react-router-dom";
import WeekNavigation from "../components/calendar/week/WeekNavigation";
import WeekDetails from "../components/calendar/week/WeekDetails";
import CalendarMonth from "../models/calendar/calendar-month";
import { getYearFromStorage } from "../utility/local-storage-manager";
import classes from './Page.module.css';

interface RouteParams {
  year: string;
  month: string;
  week: string;
}

const WeekPage = () => {
  const params = useParams<RouteParams>();
  const yearParam = +params.year;
  const monthParam = +params.month;
  const weekParam = +params.week;
  const year = getYearFromStorage(yearParam);
  const month: CalendarMonth = year?.calendarMonths[monthParam];
  const week = month.monthDatesInWeeks[weekParam];

  return (
    <main className={classes.page}>
      <WeekNavigation month={month} weekIndex={weekParam} />
      <WeekDetails week={week}/>
    </main>
  );
};

export default WeekPage;

import { Fragment } from "react";
import { useParams } from "react-router-dom";
import WeekNavigation from "../components/calendar/week/WeekNavigation";
import CalendarMonth from "../models/calendar/calendar-month";
import { getYearFromStorage } from "../utility/local-storage-manager";

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
    <Fragment>
      <WeekNavigation month={month} weekIndex={weekParam} />
      <ul>
        {week.days.map((day, dayIndex) => {
          if (day) {
            return <li key={dayIndex}>{day.dayOfWeekFullName}</li>;
          }

          return "";
        })}
      </ul>
    </Fragment>
  );
};

export default WeekPage;

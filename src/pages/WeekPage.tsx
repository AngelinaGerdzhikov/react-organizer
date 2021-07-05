import { Fragment, useEffect } from "react";
import { useParams } from "react-router-dom";
import WeekNavigation from "../components/calendar/week/WeekNavigation";
import CalendarMonth from "../models/calendar/calendar-month";
import CalendarYear from "../models/calendar/calendar-year";

interface RouteParams {
  year: string;
  month: string;
  week: string;
}

const WeekPage = () => {
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;
  const currentMonthNumberParam = +params.month;
  const currentWeekNumberParam = +params.week;

  const yearStorage = localStorage.getItem(currentYearNumberParam);
  const year: CalendarYear = yearStorage
    ? JSON.parse(yearStorage)
    : new CalendarYear(+currentYearNumberParam);
  let month: CalendarMonth = year?.calendarMonths[+currentMonthNumberParam];
  const week = month.monthDatesInWeeks[currentWeekNumberParam];

  useEffect(() => {
    if (!yearStorage) {
      localStorage.setItem(currentYearNumberParam, JSON.stringify(year));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYearNumberParam]);

  return (
    <Fragment>
      <WeekNavigation month={month} weekIndex={currentWeekNumberParam} />
      <ul>
        {week.days.map((day, dayIndex) => {
          if (day) {
            return (
              <li key={dayIndex}>{day.dayOfWeekFullName}</li>
            );
          }

          return "";
        })}
      </ul>
    </Fragment>
  );
};

export default WeekPage;

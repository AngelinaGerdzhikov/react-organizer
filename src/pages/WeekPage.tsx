import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import WeekNavigation from '../components/calendar/week/WeekNavigation';
import CalendarMonth from "../models/calendar/calendar-month";

interface RouteParams {
  year: string,
  month: string,
  week: string
}

const WeekPage = () => {
  const params = useParams<RouteParams>();
  const currentYearNumberParam = +params.year;
  const currentMonthNumberParam = +params.month;
  const currentWeekNumberParam = +params.week;

  const month = new CalendarMonth(currentMonthNumberParam, currentYearNumberParam);
  const week = month.monthDatesInWeeks[currentWeekNumberParam];

  return (
    <Fragment>
      <WeekNavigation month={month} weekIndex={currentWeekNumberParam}/>  
      <ul>
        {week.days.map((day) => {
            return day ? <li key={day.date.toISOString()}>{day.dayOfWeekFullName}</li> : '';
        })}
      </ul>
    </Fragment>
  )
};

export default WeekPage;
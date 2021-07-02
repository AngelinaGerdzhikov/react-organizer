import { Fragment } from 'react';
import { useAppSelector } from "../hooks/store-hooks"
import CalendarMonth from "../models/calendar/calendar-month";
import WeekNavigation from '../components/calendar/week/WeekNavigation';

const WeekPage = () => {
  const currentYearNumber = useAppSelector(state => +state.calendar.currentYearNumber);
  const currentMonthNumber = useAppSelector(state => +state.calendar.currentMonthNumber);
  const currentWeekNumber = useAppSelector(state => +state.calendar.currentWeekNumber);

  const month = new CalendarMonth(currentMonthNumber, currentYearNumber);
  const week = month.monthDatesInWeeks[currentWeekNumber];

  return (
    <Fragment>
      <WeekNavigation month={month}/>  
      <ul>
        {week.days.map((day) => {
            return day ? <li key={day.date.toISOString()}>{day.dayOfWeekFullName}</li> : '';
        })}
      </ul>
    </Fragment>
  )
};

export default WeekPage;
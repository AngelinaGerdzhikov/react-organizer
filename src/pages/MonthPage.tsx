import { Fragment } from 'react';
import MonthDetails from '../components/calendar/month/MonthDetails';
import MonthNavigation from '../components/calendar/month/MonthNavigation';
import { useAppSelector } from '../hooks/store-hooks';
import CalendarMonth from "../models/calendar/calendar-month";
import MonthSidebar from '../components/calendar/month/MonthSidebar';

const MonthPage = () => {
  const currentYearNumber = useAppSelector((state => +state.calendar.currentYearNumber));
  const currentMonthNumber = useAppSelector((state => +state.calendar.currentMonthNumber));
  const month = new CalendarMonth(currentMonthNumber, currentYearNumber);

  return (
    <Fragment>
      <MonthNavigation monthName={month.monthFullName} year={month.year}/>
      <MonthSidebar weeks={month.monthDatesInWeeks}/>
      <MonthDetails month={month} />
    </Fragment>

  );
};

export default MonthPage;

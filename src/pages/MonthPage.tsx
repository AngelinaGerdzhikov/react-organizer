import { Fragment } from 'react';
import CalendarMonth from "../models/calendar/calendar-month";
import MonthNavigation from '../components/calendar/month/MonthNavigation';
import MonthDetails from '../components/calendar/month/MonthDetails';

const MonthPage = () => {
  const month = new CalendarMonth(6, 2021);

  return (
    <Fragment>
      <MonthNavigation monthName={month.monthFullName} year={month.year}/>
      <MonthDetails month={month} />
    </Fragment>

  );
};

export default MonthPage;

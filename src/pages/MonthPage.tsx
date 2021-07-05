import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import MonthDetails from '../components/calendar/month/MonthDetails';
import MonthNavigation from '../components/calendar/month/MonthNavigation';
import MonthSidebar from '../components/calendar/month/MonthSidebar';
import CalendarMonth from "../models/calendar/calendar-month";

interface RouteParams {
  year: string;
  month: string;
}

const MonthPage = () => {
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;
  const currentMonthNumberParam = params.month;
  const month = new CalendarMonth(+currentMonthNumberParam, +currentYearNumberParam);
  
  return (
    <Fragment>
      <MonthNavigation month={month}/>
      <MonthSidebar weeks={month.monthDatesInWeeks}/>
      <MonthDetails month={month} />
    </Fragment>

  );
};

export default MonthPage;

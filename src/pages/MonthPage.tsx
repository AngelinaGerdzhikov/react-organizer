import { Fragment, useEffect } from 'react';
import { useParams  } from 'react-router-dom';
import CalendarMonth from "../models/calendar/calendar-month";
import MonthNavigation from '../components/calendar/month/MonthNavigation';
import MonthDetails from '../components/calendar/month/MonthDetails';
import {useAppSelector } from '../hooks/store-hooks';

interface RouteParams {
  year: string,
  month: string
}

const MonthPage = () => {
  const params = useParams<RouteParams>();
  const yearParam = params.year;
  const monthParam = params.month
  const month = new CalendarMonth(parseInt(monthParam), parseInt(yearParam));

  return (
    <Fragment>
      <MonthNavigation monthName={month.monthFullName} year={month.year}/>
      <MonthDetails month={month} />
    </Fragment>

  );
};

export default MonthPage;

import { Fragment } from 'react';
import { useParams  } from 'react-router-dom';
import CalendarMonth from "../models/calendar/calendar-month";
import MonthNavigation from '../components/calendar/month/MonthNavigation';
import MonthDetails from '../components/calendar/month/MonthDetails';

interface RouteParams {
  year: string,
  month: string
}

const MonthPage: React.FC<{ month: CalendarMonth}> = (props) => {
  const params = useParams<RouteParams>();
  const yearParam = params.year;
  const monthParam = params.month
  const month = props.month || new CalendarMonth(parseInt(monthParam), parseInt(yearParam));


  return (
    <Fragment>
      <MonthNavigation monthName={month.monthFullName} year={month.year}/>
      <MonthDetails month={month} />
    </Fragment>

  );
};

export default MonthPage;

import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import YearDetails from '../components/calendar/year/YearDetails';
import YearNavigation from '../components/calendar/year/YearNavigation';
import CalendarYear from '../models/calendar/calendar-year';

interface RouteParams {
  year: string;
  month?: string;
}

const YearPage = () => {
  const params = useParams<RouteParams>();
  const currentYearNumberParam = params.year;
  const year = new CalendarYear(+currentYearNumberParam);
  
  return (
    <Fragment>
      <YearNavigation year={year}></YearNavigation>
      <YearDetails months={year.calendarMonths} year={year}/>
    </Fragment>
  );
}

export default YearPage;
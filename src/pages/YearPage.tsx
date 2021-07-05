import { Fragment, useEffect } from 'react';
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
  const yearStorage = localStorage.getItem(currentYearNumberParam);
  const year: CalendarYear = yearStorage ? JSON.parse(yearStorage) : new CalendarYear(+currentYearNumberParam);

  useEffect(() => {
    if (!yearStorage) {
      localStorage.setItem(currentYearNumberParam, JSON.stringify(year));
    } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentYearNumberParam]);
  
  return (
    <Fragment>
      <YearNavigation year={year}></YearNavigation>
      <YearDetails months={year.calendarMonths} year={year}/>
    </Fragment>
  );
}

export default YearPage;
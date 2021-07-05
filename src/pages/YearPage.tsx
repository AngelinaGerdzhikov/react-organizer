import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import YearDetails from '../components/calendar/year/YearDetails';
import YearNavigation from '../components/calendar/year/YearNavigation';
import { getYearFromStorage } from '../utility/local-storage-manager';

interface RouteParams {
  year: string;
  month?: string;
}

const YearPage = () => {
  const params = useParams<RouteParams>();
  const yearParam = params.year;
  const year = getYearFromStorage(+yearParam);
  
  return (
    <Fragment>
      <YearNavigation year={year}></YearNavigation>
      <YearDetails months={year.calendarMonths} year={year}/>
    </Fragment>
  );
}

export default YearPage;
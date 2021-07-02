import { Fragment } from 'react';
import CalendarYear from '../models/calendar/calendar-year';
import YearNavigation from '../components/calendar/year/YearNavigation';
import YearDetails from '../components/calendar/year/YearDetails';
import { useAppSelector } from '../hooks/store-hooks';

const YearPage = () => {
  const yearNumber = useAppSelector(state => state.calendar.currentYearNumber);
  const year = new CalendarYear(+yearNumber);
  
  return (
    <Fragment>
      <YearNavigation></YearNavigation>
      <YearDetails months={year.calendarMonths} year={year}/>
    </Fragment>
  );
}

export default YearPage;
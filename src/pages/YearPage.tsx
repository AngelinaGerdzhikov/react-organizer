import CalendarYear from '../models/calendar/calendar-year';

const YearPage = () => {
  const year = new CalendarYear(2021);
  
  return (
    <h1>{year.yearNumber}</h1>
  );
}

export default YearPage;
import CalendarMonth from '../../../models/calendar/calendar-month';
import MonthList from './MonthList';
import CalendarYear from '../../../models/calendar/calendar-year';

const YearDetails: React.FC<{ months: CalendarMonth[], year: CalendarYear }> = (props) => {

  return (
    <section>
      <h1>Year Details</h1>
      <MonthList year={props.year} months={props.months}/>
    </section>
  )
}

export default YearDetails;
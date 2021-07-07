import CalendarWeek from "../../../models/calendar/calendar-week";
import DayList from './DayList';

const WeekDetails: React.FC<{ week: CalendarWeek }> = (props) => {
  return (
    <DayList week={props.week} />
  );
};

export default WeekDetails;

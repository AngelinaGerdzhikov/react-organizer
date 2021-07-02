import CalendarWeek from "../../../models/calendar/calendar-week";
import {Link,  useLocation } from 'react-router-dom';

const MonthSidebar: React.FC<{ weeks: CalendarWeek[] }> = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;
 
  return (
    <ul>
      {props.weeks.map((week, weekIndex) => {
        return (
        <li key={week.nthWeekOfMonth}>
          <Link to={`${currentPath}/week/${weekIndex}`}>Week {weekIndex + 1}</Link>
        </li>
        );
      })}
    </ul>
  )
}

export default MonthSidebar;
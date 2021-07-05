import { Link } from "react-router-dom";
import CalendarYear from "../../../models/calendar/calendar-year";


const YearNavigation:React.FC<{ year: CalendarYear}> = (props) => {
  return (
    <nav>
      <Link to={`/year/${+props.year.yearNumber - 1}`} className="btn">
        {"<"}
      </Link>
      <h1>{props.year.yearNumber}</h1>
      <Link to={`/year/${+props.year.yearNumber + 1}`} className="btn">
        {">"}
      </Link>
    </nav>
  );
};

export default YearNavigation;

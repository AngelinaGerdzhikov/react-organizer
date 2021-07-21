import { useHistory } from "react-router-dom";
import CalendarYear from "../../../models/calendar/calendar-year";
import CalendarNavigation from "../../UI/CalendarNavigation";

const YearNavigation: React.FC<{ year: CalendarYear }> = (props) => {
  const history = useHistory();

  const getPreviousYearHandler = () => {
    history.push(`/year/${+props.year.yearNumber - 1}`);
  };

  const getNextYearHandler = () => {
    history.push(`/year/${+props.year.yearNumber + 1}`);
  };

  return (
    <CalendarNavigation
      title={props.year.yearNumber.toString()}
      onPreviousClick={getPreviousYearHandler}
      onNextClick={getNextYearHandler}
    />
  );
};

export default YearNavigation;

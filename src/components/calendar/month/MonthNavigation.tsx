/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarNavigation from "../../UI/CalendarNavigation";

const MonthNavigation: React.FC<{ month: CalendarMonth }> = (props) => {
  const history = useHistory();

  const getPreviousMonthHandler = () => {
    const [previousMonthNumber, updatedYear] =
      CalendarMonth.getPreviousMonthData(+props.month.month, +props.month.year);

    history.push(`/year/${updatedYear}/month/${previousMonthNumber}`);
  };

  const getNextMonthHandler = () => {
    const [nextMonthNumber, updatedYear] = CalendarMonth.getNextMonthData(
      +props.month.month,
      +props.month.year
    );

    history.push(`/year/${updatedYear}/month/${nextMonthNumber}`);
  };

  return (
    <CalendarNavigation
      onPreviousClick={getPreviousMonthHandler}
      onNextClick={getNextMonthHandler}
    >
      <h1>
        <span className="cursive">{props.month.monthFullName}</span>{" "}
        {props.month.year}
      </h1>
    </CalendarNavigation>
  );
};

export default MonthNavigation;

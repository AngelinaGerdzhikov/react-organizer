/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";

const MonthNavigation: React.FC<{ month: CalendarMonth }> = (
  props
) => {
  const history = useHistory();

  const getPreviousMonthHandler = () => {
    const [previousMonthNumber, updatedYear] =
      CalendarMonth.getPreviousMonthData(
        +props.month.month,
        +props.month.year
      );

    history.push(`/year/${updatedYear}/month/${previousMonthNumber}`);
  };

  const getNextMonthHandler = () => {
    const [nextMonthNumber, updatedYear] =
      CalendarMonth.getNextMonthData(
        +props.month.month,
        +props.month.year
      );

    history.push(`/year/${updatedYear}/month/${nextMonthNumber}`);
  };

  return (
    <nav>
      <button onClick={getPreviousMonthHandler}>{"<"}</button>
      <h1>
        {props.month.monthFullName} {props.month.year}
      </h1>
      <button onClick={getNextMonthHandler}>{">"}</button>
    </nav>
  );
};

export default MonthNavigation;

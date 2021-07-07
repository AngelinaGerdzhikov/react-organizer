/* eslint-disable react-hooks/exhaustive-deps */
import { useHistory } from "react-router-dom";
import CalendarMonth from "../../../models/calendar/calendar-month";
import CalendarNavigation from "../../UI/CalendarNavigation";

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
    <CalendarNavigation
      title={`${props.month.monthFullName} ${props.month.year}`}
      onPreviousClick={getPreviousMonthHandler}
      onNextClick={getNextMonthHandler}
    />
  );
};

export default MonthNavigation;
